<template>
  <el-container style="padding-left: 400px; padding-right: 400px; background-color:rgb(244,245,245)">
    <el-header class="myHeader">
      <div class="left-bar">
        <img
          src="../img/easy_logo.png"
          alt=""
          width="128px"
          height="60px"
        />
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          router
          text-color="black"
          active-text-color="#39c5bb"
        >
          
          <el-menu-item index="1" route="/CompanyCenter">公司页面</el-menu-item>
          <!-- <el-menu-item index="5">笔试面经</el-menu-item> -->
        </el-menu>
      </div>

      <el-dropdown @command="quit" style="margin-right: 20px">
        <span class="el-dropdown-link">
          welcome! {{ this.email
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <!-- <el-divider class="myDivider"></el-divider> -->

    <router-view></router-view>


    <div class="myHeader2">
      <img width="200px" height="200px" src="../img/logo_transparent.png" />

    </div>
    
  </el-container>
</template>

<script>

export default {
  name: "JobSeeker",

  data() {
    return {
     

  
    
    };
  },

  created() {
    
  },

  methods: {

    quit(command) {
      document.cookie = "loginUUID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      this.$router.replace("/");
      this.$message.success("退出成功！");
    },
  },
};
</script>

<style scoped>
dd > span {
  color: black;
  font-size: 14px;
  margin-left: 5px;
}
dd > span:hover {
  font-size: 14px;
  color: #39c5bb;
  cursor: pointer;
}

.card_wrap {
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.courseDiv {
  height: 273px;
  display: inline-block;
  margin-right: 40px;
  width: 270px;
  background: #fff;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
}

.myHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}

.myHeader2 {
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.courseDivP1 {
  display: flex;
  flex-direction: column;
  height: 50%;
  background-size: cover !important;
  background-image: url("../img/courseDiv0.png");
}

.courseDivP2 {
  height: 50%;
}

.left-bar {
  display: flex;
}

.myDivider {
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

.pageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 700px;
  height: 40px;
  border: 2px solid #39c5bb;
  padding: 5px 10px;
  box-sizing: border-box;
  outline: none;
}

.search-button {
  border-radius: 0px;
}

.job-name {
  font-size: 16px;
  display: inline-block;
  padding-left: 15px;
  margin: 0;
  color: #333;
}
.job-name a:hover {
  cursor: pointer;
  color: #6aa2e4 !important;
}

.job-salary {
  font-size: 16px;
  color: #fa6041;
  padding-left: 0 !important;
}

.job-tag-content {
  padding-top: 6px;
  font-size: 10px;
  display: block;
  height: 30px;
  line-height: 30px;
  margin-left: -43px;
  color: #777;
}
.job-tag {
  display: inline-block;
  width: 61px;
  height: 26px;
  padding: 0 5px;
  font-size: 12px;
  line-height: 26px;
  color: #999;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  text-align: center;
  margin-left: 6px;
}
.company {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px dashed #e0e0e0;
}
.company img {
  display: inline-block;
}

.company .company-right {
  margin-left: 54px;
  position: absolute;
  display: inline-block;
}
.company .company-right .company-name a {
  font-size: 14px;
  color: #555555;
}
.company .company-right .company-name a:hover {
  color: #6aa2e4;
}
.company .company-right .company-description {
  font-size: 12px;
  color: #999999;
}
</style>
