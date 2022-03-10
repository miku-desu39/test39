<template>

  <div style="width: 100%;">
    <div style="margin-top: 10px; margin-bottom: 10px">
      <el-button type="primary" @click="dialogVisible = true">新建作业</el-button>
      <el-button type="primary" @click="deleteHw">删除作业</el-button>
    </div>
    <div v-for="(item, index) in this.hwList" class="hwList">
      <div style="margin-top: 20px"><span style="font-size: 14px; color: #5F6368;">个人作业  {{item.homework.startDate}}</span></div>
      <div class="myTitle">
        <h3 @click="homeworkDetail(index)">{{item.homework.hwName}}</h3>

        <div>
          <span style="margin-right: 30px">已批：{{item.checked}}</span>
          <span style="margin-right: 30px">未批：{{item.notChecked}}</span>
          <span style="margin-right: 30px">未交：{{item.notUpload}}</span>
        </div>
      </div>
      <div style="margin-bottom: 20px"><span style="font-size: 14px; color: #5F6368;">截至日期：{{item.homework.endDate}} / 作业号：{{item.homework.hwId}}</span></div>

    </div>
    <el-dialog
        title="新建作业"
        :visible.sync="dialogVisible"
        width="30%" center>
      <el-form ref="registerForm" :model="newHwForm" label-width="80px">
        <el-form-item label="作业号">
          <el-input v-model="newHwForm.hwId"></el-input>
        </el-form-item>
        <el-form-item label="作业详情">
          <el-input v-model="newHwForm.hwName"></el-input>
        </el-form-item>
        <el-form-item label="开始日期">
          <el-date-picker
              v-model="newHwForm.startDate"
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="截至日期">
          <el-date-picker
              v-model="newHwForm.endDate"
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addHw">确 定</el-button>
      </div>
    </el-dialog>
  </div>


</template>

<script>
export default {
  name: "TeacherHomeworkList",

  data() {
    return {
      courseInfo:JSON.parse(window.sessionStorage.getItem("courseInfo")),
      userType:window.sessionStorage.getItem("userType"),

      hwList:[],
      dialogVisible:false,

      newHwForm:{
        hwId:'',
        hwName:'',
        courseId:'',
        startDate:'',
        endDate:'',
      },

      tempDeleteHwId:'',

    };
  },

  created() {
    this.findAllHw();
  },

  methods:{

    findAllHw(){
      this.$axios.get("/Teacher/findAllHw?courseId="+this.courseInfo.courseId).then((resp)=>{
        this.hwList=resp.data;
      })

    },

    addHw(){
      this.newHwForm.courseId=this.courseInfo.courseId;
      this.$axios.post("/Teacher/addHw", this.newHwForm).then((resp)=>{
        this.dialogVisible=false;
        this.$message.success("新建作业成功！");
        this.findAllHw();
      })

    },

    homeworkDetail(index){
      window.sessionStorage.setItem("hwId", this.hwList[index].homework.hwId);
      this.$router.push('/TeacherHwDetail');
    },

    deleteHw(){
      this.$prompt('所删除作业号', '删除作业', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value })=>{
        this.tempDeleteHwId=value;
        this.$axios.get("/Teacher/deleteHw?hwId="+this.tempDeleteHwId).then((resp)=>{
          this.$message.success("删除成功！");
          this.tempDeleteHwId='';
          this.findAllHw();
        })

      })
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