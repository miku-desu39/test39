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
            <el-radio v-model="loginForm.type" label="Company">企业</el-radio>
            <el-radio v-model="loginForm.type" label="JobSeeker"
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
              @click="login()"
              style="width: 150px"
              round
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <div>
          <span style="font-size: 14px; margin-left: 100px">还没注册？</span>
          <el-button
            type="text"
            @click="dialogVisible1 = true"
            style="margin-left: 5px"
            >企业注册</el-button
          >
          <el-button type="text" @click="dialogVisible2 = true"
            >求职者注册</el-button
          >
        </div>
      </el-card>
    </el-main>
    <el-dialog
      title="求职者注册"
      :visible.sync="dialogVisible2"
      width="30%"
      center
    >
      <el-form
        ref="jobseeker"
        :model="jobseeker"
        label-width="100px"
        style="width: 80%"
        :rules="rules2"
      >
        <el-form-item label="注册邮箱">
          <el-input v-model="jobseeker.email"></el-input>
          <el-button type="">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="jobseeker.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input
            v-model="jobseeker.password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="name">
          <el-input v-model="jobseeker.name"></el-input>
        </el-form-item>
        <el-form-item label="真实性别">
          <el-radio v-model="jobseeker.gender" label="1">男</el-radio>
          <el-radio v-model="jobseeker.gender" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="出生年份">
          <el-date-picker
            v-model="jobseeker.birthday"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="毕业年份">
          <el-date-picker
            v-model="jobseeker.graduationDate"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="所在省市">
          <el-input v-model="jobseeker.location"></el-input>
        </el-form-item>
        <el-form-item label="最高学历">
          <el-select
            v-model="jobseeker.highestEducation"
            placeholder="请选择最高学历"
          >
            <el-option
              v-for="item in educationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校名称">
          <el-input v-model="jobseeker.schoolName"></el-input>
        </el-form-item>
        <el-form-item label="专业名称">
          <el-input v-model="jobseeker.majorName"></el-input>
        </el-form-item>
        <el-form-item label="求职方向">
          <el-input v-model="jobseeker.careerDirection"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="jobseeker.code"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="dialogVisible2" style="width: 150px"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog
      title="企业注册"
      :visible.sync="dialogVisible1"
      width="30%"
      center
    >
      <el-form
        ref="company"
        :model="company"
        label-width="100px"
        style="width: 80%"
        :rules="rules1"
      >
        <el-form-item label="注册邮箱">
          <el-input v-model="company.email"></el-input>
          <el-button type="">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input
            v-model="company.password"
            show-password
            placeholder="修改密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="company.name"></el-input>
        </el-form-item>

        <el-form-item label="公司简介">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 3 }"
            placeholder="请输入内容"
            v-model="company.introduce"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="公司标签">
          <el-input v-model="company.tag"></el-input>
        </el-form-item>

        <el-form-item label="验证码">
          <el-input v-model="company.code"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="saveCompanyDetail('company')"
            style="width: 150px"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </div> -->
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      //学历选项
      educationOptions: [
        {
          value: "中专",
          label: "中专",
        },
        {
          value: "大专",
          label: "大专",
        },
        {
          value: "本科",
          label: "本科",
        },
        {
          value: "硕士",
          label: "硕士",
        },
        {
          value: "博士",
          label: "博士",
        },
      ],

      rules2: {
        password: [
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],

        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { min: 11, max: 11, message: "手机号码不正确", trigger: "blur" },
        ],

        name: [
          { required: true, message: "请输入名字", trigger: "blur" },
          { min: 2, max: 11, message: "请输入正确的名字", trigger: "blur" },
        ],
      },

      rules1: {
        password: [
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],

        name: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          { min: 2, max: 11, message: "公司名称不正确", trigger: "blur" },
        ],
      },

      // 公司信息
      company: {
        email: "",

        name: "",

        password: "",

        introduce: "",

        tag: "",

        code: "",
      },

      jobseeker: {
        password: "",

        email: "",

        gender: "",

        name: "",

        phone: "",

        birthday: "",

        graduationDate: "",

        location: "",

        highestEducation: "",

        schoolName: "",

        majorName: "",

        careerDirection: "",

        code: "",
      },

      loginForm: {
        type: "",
        email: "",
        password: "",
      },

      dialogVisible1: false,
      dialogVisible2: false,
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
        .post("/api/login/submit", {
          email: this.loginForm.email,
          password: this.loginForm.password,
          type: this.loginForm.type,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            window.sessionStorage.setItem(this.loginForm.type, resp.data.data);
            // window.sessionStorage.setItem("email", this.loginForm.email);
            // window.sessionStorage.setItem("userType", this.loginForm.userType);

            this.$message.success("登录成功！");

            this.$router.replace("/" + this.loginForm.type);
          } else {
            this.$message.error("登录失败！");
          }
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
