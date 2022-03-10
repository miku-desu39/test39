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

    <el-container>

      <el-aside width="20%">

          <el-col :span="12" style="width: 100%">
            <el-menu
                default-active="/JobList"
                class="el-menu-vertical-demo"
                router="true">
              <el-menu-item index="/ResumeList">
                <i class="el-icon-message"></i>
                <span slot="title">简历一览</span>
              </el-menu-item>
              <el-menu-item index="/JobList">
                <i class="el-icon-document"></i>
                <span slot="title">职位管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>


      </el-aside>

      <el-main>

        <router-view></router-view>
      </el-main>

    </el-container>


  </el-container>



</template>

<script>
export default {
  name: "Company",

  data () {
    return {


      email:window.sessionStorage.getItem("email"),


    }
  },

  methods: {

    quit(command){
      this.$router.replace('/');
      this.$message.success("退出成功！");
    },


  }
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

</style>
