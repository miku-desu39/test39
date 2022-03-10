<template>
  <div style="width: 100%;">
  <div v-for="(item, index) in this.hwList":key="item.hwId" class="hwList">
    <div style="margin-top: 20px"><span style="font-size: 14px; color: #5F6368;">个人作业  {{item.startDate}}</span></div>
    <div class="myTitle">
      <h3>{{item.hwName}}</h3>
      <el-upload
          class="upload-demo"
          action="/upload"
          multiple
          :on-success="handleSuccess"
          :limit="1"
          :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">请以"作业号"加"姓名"命名文件</div>
      </el-upload>
    </div>
    <div style="margin-bottom: 20px"><span style="font-size: 14px; color: #5F6368;">截至日期：{{item.endDate}} / 作业号：{{item.hwId}}</span></div>

  </div>
  </div>
</template>

<script>
export default {
  name: "StudentHomeworkList",

  data() {
    return {
      courseInfo:JSON.parse(window.sessionStorage.getItem("courseInfo")),
      userType:window.sessionStorage.getItem("userType"),

      hwList:[],
      fileList:[],
    };
  },

  created() {
    this.findAllHw();
  },

  methods:{

    findAllHw(){
      this.$axios.get("/Student/findAllHw?courseId="+this.courseInfo.courseId).then((resp)=>{
        this.hwList=resp.data;
      })

    },

    handleSuccess (file) {
      const filename = file.name;
      this.$message({
        message: '文件上传成功！',
        type: 'success'
      });
    },


  },


}
</script>

<style scoped>

.hwList{
  padding: 0 20px 0 40px;
  border: 1px solid #E2E6ED;
  border-radius: 8px;
  background: #FFF;
  margin-bottom: 20px;
}

.myTitle{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

</style>