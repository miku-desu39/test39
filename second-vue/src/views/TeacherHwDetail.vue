<template>
  <div>
    <el-table
        :data="stuHwList"
        border="true"
        style="width: 100%">
      <el-table-column
          prop="hwId"
          label="作业号"
          width="200">
      </el-table-column>
      <el-table-column
          prop="stuId"
          label="姓名"
          width="200">
      </el-table-column>
      <el-table-column
          prop="submit"
          label="提交状态"
          width="200">
      </el-table-column>
      <el-table-column
          prop="score"
          label="分数"
          width="200">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="primary"
              @click="download(scope.$index, scope.row)">下载批阅</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="marking(scope.$index, scope.row)">在线评分</el-button>
        </template>
      </el-table-column>
    </el-table>


  </div>

</template>

<script>
export default {
  name: "TeacherHwDetail",

  data() {
    return {
      courseInfo:JSON.parse(window.sessionStorage.getItem("courseInfo")),
      hwId:window.sessionStorage.getItem("hwId"),

      stuHwList:[],

      tempStu:{},

    };
  },

  created() {
    this.findStuHwByHwId();
  },

  methods: {
    findStuHwByHwId() {
      this.$axios.get("/Teacher/findStuHwByHwId?hwId=" + this.hwId).then((resp) => {
        this.stuHwList = resp.data;
      })
    },

    marking(index, row){
      this.$prompt('请输入分数', '评分', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value })=>{
        this.tempStu = row;
        this.tempStu.score = value;
        this.$axios.post("/Teacher/updateStuHw", this.tempStu).then((resp)=>{
          this.$message.success("评分成功！");
          this.findStuHwByHwId();
        })

      })
    },

    download(index, row) {
     window.open("/Teacher/download?filename="+row.hwId+"-"+row.stuId+".txt");
    }

  }

}
</script>

<style scoped>

</style>