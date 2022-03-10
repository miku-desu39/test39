<template>

  <el-container>
    <el-divider class="myDivider"></el-divider>
    <el-header class="myHeader">
      <span>职位一览</span>
      <el-button type="primary" @click="addJobPrevious">添加职位</el-button>
    </el-header>

    <el-divider class="myDivider"></el-divider>

    <el-main>

      <el-card v-for="item in this.pageData" class="box-card">

        <el-header class="myHeader">
          <strong><span style="font-size: 30px; color: black;">{{item.name}}</span></strong>
          <strong><span style="font-size: 30px; color: red;">{{item.salary}}</span></strong>
        </el-header>

        <div class="text item"><strong><span style="margin-left: 20px">工作地点：{{item.location}}</span></strong></div>
        <div class="text item"><strong><span style="margin-left: 20px">工作负责：{{item.introduce}}</span></strong></div>
        <div class="myHeader">
          <strong><span style="margin-left: 20px; color: goldenrod">{{item.companyName}}</span></strong>
          <div>
            <el-button type="warning" @click="updataPrevious(item)">修改职位</el-button>
            <el-button type="danger" @click="deleteJob(item)">删除职位</el-button>
          </div>

        </div>

      </el-card>


      <el-divider></el-divider>
      <div class="pageContainer">
        <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-count="this.totalPage"
            layout="prev, pager, next"
        >
        </el-pagination>
      </div>

    </el-main>


    <el-dialog
        title="职位信息"
        :visible.sync="dialogVisible"
        width="30%" center>
      <el-form ref="jobForm" :model="jobForm" label-width="80px">

        <el-form-item label="职位名称">
          <el-input v-model="jobForm.name"></el-input>
        </el-form-item>

        <el-form-item label="职位薪水">
          <el-input v-model="jobForm.salary"></el-input>
        </el-form-item>

        <el-form-item label="工作地点">
          <el-input v-model="jobForm.location"></el-input>
        </el-form-item>

        <el-form-item label="职位介绍">
          <el-input v-model="jobForm.introduce"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateJob">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog
        title="添加职位"
        :visible.sync="dialogVisible2"
        width="30%" center>
      <el-form ref="jobForm" :model="jobForm" label-width="80px">

        <el-form-item label="职位名称">
          <el-input v-model="jobForm.name"></el-input>
        </el-form-item>

        <el-form-item label="职位薪水">
          <el-input v-model="jobForm.salary"></el-input>
        </el-form-item>

        <el-form-item label="工作地点">
          <el-input v-model="jobForm.location"></el-input>
        </el-form-item>

        <el-form-item label="职位介绍">
          <el-input v-model="jobForm.introduce"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="addJob">确 定</el-button>
      </div>
    </el-dialog>




  </el-container>
</template>

<script>
export default {
  name: "JobList",

  data () {
    return {

      currentPage1:1,

      totalPage:"",

      pageData:[],

      email:window.sessionStorage.getItem("email"),

      dialogVisible:false,

      dialogVisible2:false,

      jobForm:{
        id:'',
        companyId:'',
        name:'',
        introduce:'',
        salary:'',
        location:'',
        companyName:'',
      },

    }
  },

  created() {
    this.getJobList();
  },


  methods: {

    addJobPrevious(){

      this.jobForm.id = '';
      this.jobForm.companyId = '';
      this.jobForm.name = '';
      this.jobForm.location = '';
      this.jobForm.salary = '';
      this.jobForm.introduce = '';
      this.jobForm.companyName = '';

      this.dialogVisible2 = true;

    },

    addJob(){
      this.$axios.post("/Job/insertJob?email="+this.email, this.jobForm).then((resp)=>{
        if(resp.data.code === 200){
          this.$message.success("添加成功");
        }else {
          this.$message.error("添加失败");
        }
        this.dialogVisible2 = false;
        this.getJobList();
      })



    },

    deleteJob(item){

      this.$confirm('将删除该职位, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{

        this.$axios.get("/Job/deleteJob?jobId="+item.id).then((resp)=>{
          if(resp.data.code === 200){
            this.$message.success("删除成功");
          }else {
            this.$message.error("删除失败");
          }

          this.getJobList();
        })

      })

    },


    updataPrevious(item){

      this.jobForm.id = item.id;
      this.jobForm.companyId = item.companyId;
      this.jobForm.name = item.name;
      this.jobForm.location = item.location;
      this.jobForm.salary = item.salary;
      this.jobForm.introduce = item.introduce;
      this.jobForm.companyName = item.companyName;

      this.dialogVisible = true;
    },


    updateJob(){
      this.$axios.post("/Job/updataJob", this.jobForm).then((resp)=>{
        if(resp.data.code === 200){
          this.$message.success("修改成功");
        }else {
          this.$message.error("修改失败");
        }
        this.dialogVisible = false;
        this.getJobList();
      })
    },


    getJobList(){
      this.$axios.post("/Job/listTargetJob?email="+this.email, {
        pageNum:this.currentPage1,
        pageSize:5
      }).then((resp)=>{
        if(resp.data.code === 200){

          this.pageData = resp.data.data.pageData;
          this.totalPage = resp.data.data.totalPageNum;

        }else{
          this.$message.error("发送失败！");
        }

      })

    },

    handleCurrentChange(){
      this.getJobList();

    },

    quit(command){
      this.$router.replace('/');
      this.$message.success("退出成功！");
    },
  }



}
</script>

<style scoped>

.courseDiv{
  height: 273px;
  display: inline-block;
  margin-right: 40px;
  width: 270px;
  background: #fff;
  border: 1px solid #E2E6ED;
  border-radius: 8px;
}

.myHeader{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.courseDivP1{
  display: flex;
  flex-direction: column;
  height: 50%;
  background-size: cover!important;
  background-image: url("../img/courseDiv0.png");
}

.courseDivP2{
  height: 50%;
}


.myDivider{
  margin-top: 0px;
  margin-bottom: 0px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 65%;
  margin-bottom: 20px;

  padding: 20px;

  margin-left: auto;
  margin-right: auto;
}

.pageContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
