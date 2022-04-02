<template>
  <el-main>
    <h1>个人资料设置</h1>

    <el-tabs tab-position="left" style="height: 900px" type="border-card">
      <el-tab-pane>
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
              <el-input v-model="information.location"></el-input>
            </el-form-item>
            <el-form-item label="最高学历">
              <el-select
                v-model="information.highestEducation"
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
              <el-input v-model="information.schoolName"></el-input>
            </el-form-item>
            <el-form-item label="专业名称">
              <el-input v-model="information.majorName"></el-input>
            </el-form-item>
            <el-form-item label="求职方向">
              <el-input v-model="information.careerDirection"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="saveInformation"
                style="width: 150px"
                >保存</el-button
              >
            </el-form-item>
          </el-form>
        </el-main>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-s-order"></i> 我的简历</span
        >

        <el-main class="myMain">
          <div class="resumeContent">
            <h3>专业能力</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.professionalAbility"
            >
            </el-input>
          </div>
          <div class="resumeContent">
            <h3>实习经历</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.professionalAbility"
            >
            </el-input>
          </div>
          <div class="resumeContent">
            <h3>工作经历</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.professionalAbility"
            >
            </el-input>
          </div>
          <div class="resumeContent">
            <h3>获奖荣誉</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.professionalAbility"
            >
            </el-input>
          </div>

          <div class="resumeContent">
            <h3>就职期望</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.professionalAbility"
            >
            </el-input>
          </div>

          <el-button
            type="primary"
            @click="saveInformation"
            style="width: 150px; margin-top: 30px"
            >保存</el-button
          >
        </el-main>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-s-promotion"></i> 投递记录</span
        >

        <el-main>
          <el-table :data="postRecord" border style="width: 100%" stripe>
            <el-table-column prop="jobName" label="职位名" width="280">
            </el-table-column>
            <el-table-column prop="salary" label="薪资" width="280">
            </el-table-column>
            <el-table-column prop="location" label="工作城市">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" @click="viewJobDetail(scope.row.jobId)"
                  >查看职位</el-button
                >
                <el-button type="danger" @click="cancelDelivery(scope.row.id)"
                  >取消投递</el-button
                ></template
              >
            </el-table-column>
          </el-table>
        </el-main>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-star-on"></i> 我的收藏</span
        >

        <el-main>
          <el-table :data="starRecord" border style="width: 100%" stripe>
            <el-table-column prop="jobName" label="职位名" width="280">
            </el-table-column>
            <el-table-column prop="salary" label="薪资" width="280">
            </el-table-column>
            <el-table-column prop="location" label="工作城市">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" @click="viewJobDetail(scope.row.jobId)"
                  >查看职位</el-button
                >
                <el-button type="danger" @click="cancelStar(scope.row.id)"
                  >取消收藏</el-button
                ></template
              >
            </el-table-column>
          </el-table>
        </el-main>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>



<script>
export default {
  name: "PersonalCenter",

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

      // 个人信息
      information: {
        email: "111111@qq.com",
        phone: "",
        password: "",
        name: "",
        gender: "",
        birthday: "",
        graduationDate: "",
        location: "",
        highestEducation: "",
        schoolName: "",
        majorName: "",
        careerDirection: "",
      },

      //简历信息
      resume: {
        professionalAbility: "",
        internshipExperience: "",
        workExperience: "",
        awards: "",
        inaugurationExpectation: "",
      },

      //投递记录
      postRecord: [
        {
          id: 2000,
          jobId: 1000,
          jobName: "java开发工程师",
          salary: "8k-12k",
          location: "北京",
        },
        {
          id: 2001,
          jobId: 1000,
          jobName: "java开发工程师",
          salary: "8k-12k",
          location: "北京",
        },
        {
          id: 2002,
          jobId: 1000,
          jobName: "java开发工程师",
          salary: "8k-12k",
          location: "北京",
        },
        {
          id: 2003,
          jobId: 1000,
          jobName: "java开发工程师",
          salary: "8k-12k",
          location: "北京",
        },
      
      ],

      //收藏列表
      starRecord: [
       {
          id: 2001,
          jobId: 1000,
          jobName: "java开发工程师",
          salary: "8k-12k",
          location: "北京",
        },
        {
          id: 2002,
          jobId: 1000,
          jobName: "java开发工程师",
          salary: "8k-12k",
          location: "北京",
        },
        {
          id: 2003,
          jobId: 1000,
          jobName: "java开发工程师",
          salary: "8k-12k",
          location: "北京",
        },
       
      ],

      email: window.sessionStorage.getItem("email"),
    };
  },

  created() {},

  methods: {
    saveInformation() {
      this.$message.success("修改成功");
    },

    cancelDelivery(id) {
      this.$message.success(`${id}`);
    },

    cancelStar(id) {
      // alert(id)
      this.$message.success(`${id}`);
    },

    viewJobDetail(jobId) {
      this.$router.push({
        path: "/JobDetail",
        query: {
          jobId: jobId,
        },
      });
    },
  },
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

.resumeContent {
  width: 80%;
  margin-top: 5px;
}
</style>