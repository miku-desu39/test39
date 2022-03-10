<template>
  <el-container>

    <el-header class="myHeader">
      <el-menu :default-active="2" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><img src="../img/logo2.jpg" alt="" width="96px" height="24px"></el-menu-item>
        <el-menu-item index="2">职位推荐</el-menu-item>
        <el-menu-item index="3">校园招聘</el-menu-item>
        <el-menu-item index="4">社会招聘</el-menu-item>
        <el-menu-item index="5">公司推荐</el-menu-item>
        <el-menu-item index="6">笔试面经</el-menu-item>
      </el-menu>

      <el-dropdown @command="quit" style="margin-right: 20px">
  <span class="el-dropdown-link">
    welcome! {{this.email}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


    </el-header>

    <el-divider class="myDivider"></el-divider>

    <el-main style="padding-top: 0px">

      <el-container>
        <el-header class="myHeader">
          <span>职位推荐</span>

          <div style="display: flex">
            <div><el-input v-model="input" placeholder="请输入职位" size="medium"></el-input></div>
            <el-button type="primary" @click="getTargetJobList" style="margin-left: 10px">搜索职位</el-button>
            <el-button type="success" @click="resetPage">重置</el-button>
          </div>


          <el-button type="primary" @click="dialogVisible = true">修改简历</el-button>
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
              <el-button type="primary" @click="deliverResume(item)">投递简历</el-button>
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
      </el-container>

    </el-main>

    <el-dialog
        title="简历模板"
        :visible.sync="dialogVisible"
        width="30%" center>
      <el-form ref="resumeForm" :model="resumeForm" label-width="80px">

        <el-form-item label="真实姓名">
          <el-input v-model="resumeForm.realName"></el-input>
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="resumeForm.phoneNumber"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio v-model="resumeForm.sex" label="1">男</el-radio>
          <el-radio v-model="resumeForm.sex" label="0">女</el-radio>
        </el-form-item>

        <el-form-item label="学历">
          <el-input v-model="resumeForm.education"></el-input>
        </el-form-item>
        <el-form-item label="毕业学校">
          <el-input v-model="resumeForm.school"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="resumeForm.address"></el-input>
        </el-form-item>
        <el-form-item label="意向岗位">
          <el-input v-model="resumeForm.intentionJob"></el-input>
        </el-form-item>
        <el-form-item label="自我介绍">
          <el-input v-model="resumeForm.introduce"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateResume">确 定</el-button>
      </div>
    </el-dialog>

  </el-container>





</template>

<script>
export default {
  name: "JobSeeker",

  data () {
    return {

      pageDataType:'normal',

      input:'',

      currentPage1:1,

      totalPage:10,

      pageData:[],

      email:window.sessionStorage.getItem("email"),

      dialogVisible:false,

      resumeForm:{
        realName:'',
        phoneNumber:'',
        sex:'',
        education:'',
        school:'',
        address:'',
        intentionJob:'',
        introduce:'',
      },

    }
  },

  created() {
    this.getJobList();
  },


  methods: {


    updateResume(){
      this.$axios.post("/Resume/updateResume?email="+this.email, this.resumeForm).then((resp)=>{
        if(resp.data.code === 200){
          this.$message.success("修改成功");
        }else {
          this.$message.error("修改失败");
        }
        this.dialogVisible = false;
      })
    },


    deliverResume(item){
      this.$confirm('确认投递该岗位', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(()=>{

        this.$axios.get("/Resume/sendResume?email="+this.email+"&jobId="+item.id).then((resp)=>{
          if(resp.data.code === 200){
            this.$message.success("投递成功");
          }else {
            this.$message.error("投递失败");
          }
        })
      })

    },


    resetPage(){
      this.input = '';
      this.currentPage1 = 1;
      this.pageDataType = 'normal';
      this.getJobList();
      this.$message.success("已重置");
    },

    getTargetJobList(){

      if(this.pageDataType === 'normal'){
        this.currentPage1 = 1;
        this.pageDataType = 'special';
      }

      this.$axios.post("/Job/listJobByFuzzyQuery?keyWord="+this.input, {
        pageNum:this.currentPage1,
        pageSize:5
      }).then((resp)=>{
        if(resp.data.code === 200){

          this.pageData = resp.data.data.pageData;
          this.totalPage = resp.data.data.totalPageNum;

          this.$message.success("查询成功！")

        }else{
          this.$message.error("发送失败！");
        }

      })

    },

    getJobList(){
      this.$axios.post("/Job/listJobByPage", {
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
      if(this.pageDataType === 'normal'){
        this.getJobList();
      }else {

        this.getTargetJobList();
      }

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
  width: 1000px;
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
