<template>
  <el-main>
    <h1>个人资料设置</h1>

    <el-tabs tab-position="left" style="height: 800px" type="border-card">
      <el-tab-pane label="用户管理">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-user-solid"></i> 个人信息</span
        >

        <el-main class="myMain">
          <el-form
            ref="information"
            :model="information"
            label-width="100px"
            style="width: 50%"
          >
            <el-form-item label="我的邮箱">
              <el-input v-model="information.email" disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="information.phone"></el-input>
            </el-form-item>
            <el-form-item label="用户密码">
              <el-input
                v-model="information.password"
                show-password
                placeholder="修改密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="真实姓名">
              <el-input v-model="information.name"></el-input>
            </el-form-item>
            <el-form-item label="真实性别">
              <el-radio v-model="information.gender" label="男">男</el-radio>
              <el-radio v-model="information.gender" label="女">女</el-radio>
            </el-form-item>
            <el-form-item label="出生年份">
              <el-date-picker
                v-model="information.birthday"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="毕业年份">
              <el-date-picker
                v-model="information.graduationDate"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="所在省市">
              <el-input v-model="information.phone"></el-input>
            </el-form-item>
            <el-form-item label="最高学历">
              <el-select v-model="information.highestEducation" placeholder="请选择最高学历">
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
              <el-input v-model="information.phone"></el-input>
            </el-form-item>
            <el-form-item label="专业名称">
              <el-input v-model="information.phone"></el-input>
            </el-form-item>
            <el-form-item label="求职方向">
              <el-input v-model="information.phone"></el-input>
            </el-form-item>
          </el-form>
        </el-main>
      </el-tab-pane>
      <el-tab-pane label="配置管理">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-s-order"></i> 我的简历</span
        >
        配置管理</el-tab-pane
      >
      <el-tab-pane label="角色管理">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-s-promotion"></i> 投递记录</span
        >
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-star-on"></i> 我的收藏</span
        >
        定时任务补偿</el-tab-pane
      >
    </el-tabs>
  </el-main>
</template>



<script>
export default {
  name: "PersonalCenter",

  data() {
    return {

      educationOptions: [{
          value: '中专',
          label: '中专'
        }, {
          value: '大专',
          label: '大专'
        }, {
          value: '本科',
          label: '本科'
        }, {
          value: '硕士',
          label: '硕士'
        }, {
          value: '博士',
          label: '博士'
        }],

      information: {
        email: "111111@qq.com",
        phone: "",
        password: "",
        name: "",
        gender: "",
        birthday: "",
        graduationDate: "",
        location:"",
        highestEducation:"",
      },

      email: window.sessionStorage.getItem("email"),
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.myHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.myMain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>