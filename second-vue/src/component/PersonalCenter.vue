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
            :rules="rules"
          >
            <el-form-item label="我的邮箱">
              <el-input v-model="information.email" disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="information.phone"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" prop="password">
              <el-input
                v-model="information.password"
                show-password
                placeholder="修改密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="name">
              <el-input v-model="information.name"></el-input>
            </el-form-item>
            <el-form-item label="真实性别">
              <el-radio v-model="information.gender" label="1">男</el-radio>
              <el-radio v-model="information.gender" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="出生年份">
              <el-date-picker
                v-model="information.birthday"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="毕业年份">
              <el-date-picker
                v-model="information.graduationDate"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
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
            <el-form-item label="学校名称" prop="miku">
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
                @click="saveJobseekerDetail('information')"
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
              v-model="resume.internshipExperience"
            >
            </el-input>
          </div>
          <div class="resumeContent">
            <h3>工作经历</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.workExperience"
            >
            </el-input>
          </div>
          <div class="resumeContent">
            <h3>获奖荣誉</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.awards"
            >
            </el-input>
          </div>

          <div class="resumeContent">
            <h3>就职期望</h3>
            <el-input
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="请输入内容"
              v-model="resume.inaugurationExpectation"
            >
            </el-input>
          </div>

          <el-button
            type="primary"
            @click="saveResumeDetail"
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
            <el-table-column prop="jobSalary" label="薪资" width="280">
            </el-table-column>
            <el-table-column prop="jobLocation" label="工作城市">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click="viewJobDetail(scope.row.jobId)"
                  >查看职位</el-button
                >
                <el-button type="danger" @click="cancelPost(scope.row.id)"
                  >取消投递</el-button
                ></template
              >
            </el-table-column>
          </el-table>

          <el-divider></el-divider>
          <div class="myMain">
            <div class="pageContainer">
              <el-pagination
                background
                @current-change="getPostJob"
                :current-page.sync="currentPage1"
                :page-size="10"
                :page-count.sync="totalPage1"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </div>
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
            <el-table-column prop="jobSalary" label="薪资" width="280">
            </el-table-column>
            <el-table-column prop="jobLocation" label="工作城市">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  @click="viewJobDetail(scope.row.jobId)"
                  >查看职位</el-button
                >
                <el-button type="danger" @click="cancelStar(scope.row.id)"
                  >取消收藏</el-button
                ></template
              >
            </el-table-column>
          </el-table>

          <el-divider></el-divider>
          <div class="myMain">
            <div class="pageContainer">
              <el-pagination
                background
                @current-change="getStarJob"
                :current-page.sync="currentPage2"
                :page-size="10"
                :page-count.sync="totalPage2"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </div>
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
      jobseekerId: 2,

      currentPage1: 1,
      currentPage2: 1,

      totalPage1: 10,
      totalPage2: 10,

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
      information: {},

      //简历信息
      resume: {},

      //投递记录
      postRecord: [],

      //收藏列表
      starRecord: [],

      rules: {
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
          { min: 2, max: 11, message: "手机号码不正确", trigger: "blur" },
        ],
      },

      email: window.sessionStorage.getItem("email"),
    };
  },

  created() {
    this.getJobseekerDetail();
    this.getResumeDetail();
    this.getPostJob();
    this.getStarJob();
  },

  methods: {
    getJobseekerDetail() {
      this.$axios
        .get(
          "/api/jobSeeker/getJobseekerDetail?jobseekerId=" + this.jobseekerId
        )
        .then((resp) => {
          if (resp.data.code === 200) {
            this.information = resp.data.data;
            this.$message.success("查询个人信息成功！");
          } else {
            this.$message.error("查询个人信息失败！");
          }
        });
    },

    saveJobseekerDetail(formName) {
      this.$confirm("将保存个人信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios
              .post("/api/jobSeeker/saveJobseekerDetail", this.information)
              .then((resp) => {
                if (resp.data.code === 200) {
                  this.$message.success("保存成功");
                } else {
                  this.$message.error("OH~" + resp.data.message);
                }
              });
          } else {
            alert("no submit!");
          }
        });
      });
    },

    getResumeDetail() {
      this.$axios
        .get("/api/resume/getResumeDetail?jobseekerId=" + this.jobseekerId)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.resume = resp.data.data;
            this.$message.success("查询简历信息成功！");
          } else {
            this.$message.error("OH~" + resp.data.message);
          }
        });
    },

    saveResumeDetail() {
      this.$confirm("将保存个人信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$axios
          .post("/api/resume/saveResumeDetail", this.resume)
          .then((resp) => {
            if (resp.data.code === 200) {
              this.$message.success("保存成功");
            } else {
              this.$message.error("OH~" + resp.data.message);
            }
          });
      });
    },

    getStarJob() {
      this.$axios
        .post("/api/job/getStarJob", {
          jobseekerId: this.jobseekerId,
          pageNum: this.currentPage2,
          pageSize: 10,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.starRecord = resp.data.data.rows;
            this.totalPage2 = resp.data.data.totalPage;
          } else {
            this.$message.error("查询收藏岗位失败！");
          }
        });
    },

    getPostJob() {
      this.$axios
        .post("/api/job/getPostJob", {
          jobseekerId: this.jobseekerId,
          pageNum: this.currentPage1,
          pageSize: 10,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.postRecord = resp.data.data.rows;
            this.totalPage1 = resp.data.data.totalPage;
          } else {
            this.$message.error("查询投递岗位失败！");
          }
        });
    },

    cancelPost(id) {
      this.$confirm("将取消投递, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$axios.get("/api/job/cancelPost?postId=" + id).then((resp) => {
          if (resp.data.code === 200) {
            this.$message.success("取消投递成功");
            this.getPostJob();
          } else {
            this.$message.error("Oh~" + resp.data.message);
          }
        });
      });
    },

    cancelStar(id) {
      this.$confirm("将取消收藏, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$axios.get("/api/job/cancelStar?starId=" + id).then((resp) => {
          if (resp.data.code === 200) {
            this.$message.success("取消收藏成功");
            this.getStarJob();
          } else {
            this.$message.error("Oh~" + resp.data.message);
          }
        });
      });
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