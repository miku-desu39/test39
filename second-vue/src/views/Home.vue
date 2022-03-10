<template>
  <div class="app">
    <div class="main">

<el-container>
  <el-header>
    <el-tabs value="first">
      <el-tab-pane label="账号登陆" name="first">
        <el-form ref="loginForm" :model="loginForm" label-width="80px">
          <el-form-item label="类型">
            <el-radio v-model="loginForm.userType" label="Company">公司</el-radio>
            <el-radio v-model="loginForm.userType" label="JobSeeker">求职者</el-radio>
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="loginForm.email" placeholder="邮箱/账号/手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password" placeholder="请输入密码"  show-password></el-input>
          </el-form-item>

        </el-form>

        <div class="customFooter">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="dialogVisible = true">注册</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="手机短信登录" name="second">配置</el-tab-pane>
      <el-tab-pane label="微信登录" name="third">角色</el-tab-pane>
    </el-tabs>
  </el-header>
</el-container>

      <el-dialog
          title="注册"
          :visible.sync="dialogVisible"
          width="30%" center>
        <el-form ref="registerForm" :model="registerForm" label-width="80px">
          <el-form-item label="类型">
            <el-radio v-model="registerForm.newUserType" label="Company">公司</el-radio>
            <el-radio v-model="registerForm.newUserType" label="JobSeeker">求职者</el-radio>
          </el-form-item>
          <el-form-item label="邮箱账号">
            <el-input v-model="registerForm.newEmail"></el-input>
            <el-button @click="sendCode" >发送验证码</el-button>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="registerForm.newPassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="registerForm.code"></el-input>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
        </div>
      </el-dialog>
  </div>
  </div>


</template>

<script>
export default {
  name: "Home",

  data() {
    return {

      registerForm:{
        newUserType:'',
        newEmail:'',
        newPassword:'',
        code:'',
      },

      loginForm:{
        userType:'',
        email:'',
        password:'',
      },

      dialogVisible:false,
    };
  },

  methods: {

    sendCode(){

      this.$axios.get("/Login/sendCode?email="+this.registerForm.newEmail).then((resp)=>{
        if(resp.data.code === 200){
          this.$message.success("发送成功！");
        }else{
          this.$message.error("发送失败！");
        }

      })


    },

    login() {

      this.$axios.post("/Login/submit",{
        email:this.loginForm.email,
        password:this.loginForm.password,
        userType:this.loginForm.userType
      }).then((resp) => {
        if(resp.data.code === 200){
          window.sessionStorage.setItem("email", this.loginForm.email);
          window.sessionStorage.setItem("userType", this.loginForm.userType);
          this.$message.success("登录成功！");
          this.$router.push('/'+this.loginForm.userType);

        }else{

          this.$message.error("登录失败！");
        }

      }).catch(() => {
        this.$message({
          type: 'error',
          message: '登录失败'
        });
      })

    },

    addUser(){

      this.$axios.post("/Login"+"/addUser", this.registerForm).then((resp) => {

        if(resp.data.code === 200){
          this.$message.success("注册成功");
        }else {
          this.$message.error("注册失败");
        }

        this.dialogVisible = false;
      }).catch((error)=>{
        this.$message.error("注册失败");
      })


    }

  }

}
</script>

<style scoped>
.app{
  display: flex;
  justify-content:center;
  align-items:center;

  width: 100%;height: 100%;
  background-image: url(../img/bg3.jpg);
  background-size: cover; /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
  position: absolute; /* 不可缺少 */
  z-index: -1;
  background-repeat: no-repeat;
}

.main{
  background-color: white;
  width: 20%;
  height: 40%;
}

.customFooter{

  display: flex;
  justify-content: space-evenly;
}
</style>
