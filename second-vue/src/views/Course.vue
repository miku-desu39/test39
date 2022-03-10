<template>
  <el-container>
    <el-header class="myHeader">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/'+this.userType }">课堂</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.courseInfo.courseName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-divider class="myDivider"></el-divider>
    <el-main class="myMain">
      <div class="trueMain">
        <div class="courseTop">
          <div style="margin-left: 20px">
            <h1 class="myH1">{{this.courseInfo.courseName}}</h1>
          </div>
          <div style="color: #fff; background: rgba(255, 255, 255, .4); display: inline-block; margin-left: 20px">
            <span style="font-size: 16px; font-style: normal;">
              加课码：{{this.courseInfo.courseId}}
            </span>
          </div>
        </div>
        <div>
          <el-menu :default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/MemberList">全部成员</el-menu-item>
            <el-menu-item index="2">作业列表</el-menu-item>
          </el-menu>
        </div>
        <div style="width: 100%;">
          <router-view></router-view>
        </div>
      </div>
    </el-main>
  </el-container>



</template>

<script>
export default {
  name: "Course",

  data() {
    return {
      courseInfo:JSON.parse(window.sessionStorage.getItem("courseInfo")),
      userType:window.sessionStorage.getItem("userType"),

    };
  },


  methods:{
    handleSelect(index){
      if(index === "/MemberList"){
        this.$router.push(index);
      }else {
        if(this.userType === 'Teacher'){
          this.$router.push('/TeacherHomeworkList');
        }else {
          this.$router.push('/StudentHomeworkList');
        }
      }
    },

  },


}
</script>

<style scoped>

.myHeader{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.myDivider{
  margin-top: 0px;
  margin-bottom: 0px;
}

.myMain{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trueMain{
  display: flex;
  width: 1224px;
  flex-direction: column;
}

.courseTop{
  width: 100%;
  height: 200px;
  background-image: url("../img/courseTop.png");
  background-position: 0 center;
  background-size: cover;
}

.myH1{
  font-size: 36px;
  color: #fff;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>