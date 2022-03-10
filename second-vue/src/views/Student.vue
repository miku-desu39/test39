<template>
  <el-container>

    <el-header class="myHeader">
      <el-menu :default-active="2" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><img src="../img/logo.png" alt="" width="96px" height="24px"></el-menu-item>
        <el-menu-item index="2">课堂</el-menu-item>
        <el-menu-item index="3">精品慕课</el-menu-item>
        <el-menu-item index="4">我的精品</el-menu-item>
        <el-menu-item index="5">双选会</el-menu-item>
        <el-menu-item index="6">论文管理</el-menu-item>
      </el-menu>

      <el-dropdown @command="quit" style="margin-right: 20px">
  <span class="el-dropdown-link">
    welcome! {{this.uid}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-main style="padding-top: 0px">

      <el-container>
        <el-header class="myHeader">
          <span>置顶课程</span>
          <el-button type="primary" @click="dialogVisible=true">加入课程</el-button>
        </el-header>
        <el-divider class="myDivider"></el-divider>
        <el-main>
          <div v-for="(item, index) in this.course":key="item.courseName" class="courseDiv">
            <div class="courseDivP1">
              <div style="margin: 10px"><strong><span style="font-size: 20px; color: white"><a @click="courseDetail(index)">{{ item.courseName }}</a></span></strong></div>
              <div style="margin: 10px"><span style="font-size: 15px; color: white">加课码：{{item.courseId}}</span></div>
            </div>

            <div class="courseDivP2">
              <div style="height: 75%">
                  <div><span style="font-size: 15px;">近期作业</span></div>
                  <div style="margin-top: 5px"><span>Homework{{index+1}}</span></div>
                  <div style="margin-top: 5px"><span>Homework{{index+2}}</span></div>
              </div>
              <el-divider class="myDivider"></el-divider>
              <div style="display: flex; flex-direction: row-reverse"><el-button @click="deleteCourse(index)" size="small">退出</el-button></div>
            </div>

          </div>
          <el-divider></el-divider>
        </el-main>
      </el-container>

    </el-main>

    <el-dialog
        title="加入课程"
        :visible.sync="dialogVisible"
        width="30%" center>
      <el-form ref="newCourseForm" :model="newCourseForm" label-width="80px">
        <el-form-item label="加课码">
          <el-input v-model="newCourseForm.course"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="joinCourse">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>

</template>

<script>
export default {
  name: "Student",
  data() {
    return {

      uid:window.sessionStorage.getItem("uid"),

      course:[],

      dialogVisible:false,

      newCourseForm:{
        course:'',
        student:'',
      },

      quitCourse:{
        course:'',
        student:'',
      },

    }
  },

  created() {
    this.findAllCourse();
  },

  watch:{

  },

  methods: {

    findAllCourse(){
      this.$axios.get("/Student/getCourse?uid="+this.uid).then((resp)=>{
        this.course = resp.data;
      })
    },

    joinCourse(){
      this.newCourseForm.student=this.uid;
      this.$axios.post("/Student/joinCourse", this.newCourseForm).then((resp)=>{
        this.dialogVisible=false;
        this.$message.success("加入成功");
        this.findAllCourse();
      })
    },

    deleteCourse(index){
      this.$confirm('此操作将永久退出课程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        this.quitCourse.course=this.course[index].courseId;
        this.quitCourse.student=this.uid;
        this.$axios.post("/Student/quitCourse", this.quitCourse).then((resp)=>{
          this.$message.success("退出成功");
          this.findAllCourse();
        })
      })
    },

    courseDetail(index){
      window.sessionStorage.setItem("courseInfo", JSON.stringify(this.course[index]));
      this.$router.push('/Course');

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


</style>