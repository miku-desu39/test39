<template>
  <el-container
    style="
      padding-left: 200px;
      padding-right: 200px;
      background-color: rgb(244, 245, 245);
    "
  >
    <el-aside
      style="
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 100px;
      "
    >
      <img
        src="../img/logo_transparent.png"
        alt=""
        width="1000px"
        height="1000px"
      />
    </el-aside>

    <el-main
      style="display: flex; justify-content: center; align-items: center"
    >
      <el-card class="box-card" style="width: 400px; padding: 40px">
        <el-form ref="loginForm" :model="loginForm">
          <el-form-item label="类型">
            <el-radio v-model="loginForm.userType" label="Company"
              >公司</el-radio
            >
            <el-radio v-model="loginForm.userType" label="JobSeeker"
              >求职者</el-radio
            >
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="loginForm.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item class="customFooter">
            <el-button
              type="primary"
              @click="login"
              style=" width: 150px"
              round
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <div>
            <el-button
              type="text"
              @click="dialogVisible = true"
              style=" width: 150px"
              round
              >企业注册</el-button
            >
            <el-button
              type="text"
              @click="dialogVisible = true"
              style=" width: 150px"
              round
              >求职者注册</el-button
            >
         </div>
      </el-card>
    </el-main>

    <el-dialog title="注册" :visible.sync="dialogVisible" width="30%" center>
      <el-form ref="registerForm" :model="registerForm" label-width="80px">
        <el-form-item label="类型">
          <el-radio v-model="registerForm.newUserType" label="Company"
            >公司</el-radio
          >
          <el-radio v-model="registerForm.newUserType" label="JobSeeker"
            >求职者</el-radio
          >
        </el-form-item>
        <el-form-item label="邮箱账号">
          <el-input v-model="registerForm.newEmail"></el-input>
          <el-button @click="sendCode">发送验证码</el-button>
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
  </el-container>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      registerForm: {
        newUserType: "",
        newEmail: "",
        newPassword: "",
        code: "",
      },

      loginForm: {
        userType: "",
        email: "",
        password: "",
      },

      dialogVisible: false,
    };
  },

  methods: {
    sendCode() {
      this.$axios
        .get("/Login/sendCode?email=" + this.registerForm.newEmail)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.$message.success("发送成功！");
          } else {
            this.$message.error("发送失败！");
          }
        });
    },

    login() {
      this.$axios
        .post("/Login/submit", {
          email: this.loginForm.email,
          password: this.loginForm.password,
          userType: this.loginForm.userType,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            window.sessionStorage.setItem("email", this.loginForm.email);
            window.sessionStorage.setItem("userType", this.loginForm.userType);
            this.$message.success("登录成功！");
            this.$router.push("/" + this.loginForm.userType);
          } else {
            this.$message.error("登录失败！");
          }
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "登录失败",
          });
        });
    },

    addUser() {
      this.$axios
        .post("/Login" + "/addUser", this.registerForm)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.$message.success("注册成功");
          } else {
            this.$message.error("注册失败");
          }

          this.dialogVisible = false;
        })
        .catch((error) => {
          this.$message.error("注册失败");
        });
    },
  },
};
</script>

<style scoped>


.customFooter {
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
