<template>
  <el-main>
    <h1>公司详情页</h1>

    <el-tabs tab-position="left" style="height: 900px" type="border-card">
      <el-tab-pane>
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-user-solid"></i> 公司信息</span
        >

        <el-main class="myMain">
          <el-form
            ref="company"
            :model="company"
            label-width="100px"
            style="width: 50%"
            :rules="rules"
          >
            <el-form-item label="注册邮箱">
              <el-input v-model="company.email" disabled="true"></el-input>
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

            <el-form-item>
              <el-button
                type="primary"
                @click="saveCompanyDetail('company')"
                style="width: 150px"
                >保存</el-button
              >
            </el-form-item>
          </el-form>
        </el-main>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-s-promotion"></i> 简历查看</span
        >

        <el-main>
          <el-table :data="resumeList" border style="width: 100%" stripe>
            <el-table-column prop="jobName" label="职位名"> </el-table-column>
            <el-table-column prop="jobLocation" label="城市"> </el-table-column>
            <el-table-column prop="jobSeekerName" label="求职者姓名">
            </el-table-column>
            <el-table-column prop="jobSeekerPhone" label="手机号">
            </el-table-column>
            <el-table-column prop="jobSeekerSchoolName" label="毕业学校">
            </el-table-column>
            <el-table-column width="230">
              <template slot="header" slot-scope="scope">
                <div class="myHeader">
                  <el-input
                    v-model="input1"
                    placeholder="输入关键词搜索"
                  ></el-input>
                  <el-button type="primary" @click="searchResume"
                    >搜索</el-button
                  >
                </div>
              </template>
              <template slot-scope="scope">
                <el-button
                  type="text"
                  @click="getResumeDetail(scope.row.jobSeekerId)"
                  >查看简历</el-button
                >
              </template>
            </el-table-column>
          </el-table>

          <el-divider></el-divider>
          <div class="myMain">
            <div class="pageContainer">
              <el-pagination
                background
                @current-change="searchResume"
                :current-page.sync="currentPage1"
                :page-size="10"
                :page-count.sync="totalPage1"
                layout="prev, pager, next"
              >
              </el-pagination>
            </div>
          </div>
        </el-main>

        <el-dialog title="简历详情" :visible.sync="dialogVisible1" width="50%">
          <el-main class="myMain" style="padding-top: 0px">
            <div class="resumeContent">
              <h3>专业能力</h3>
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 3 }"
                placeholder="请输入内容"
                v-model="resume.professionalAbility"
                readonly="true"
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
                readonly="true"
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
                readonly="true"
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
                readonly="true"
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
                readonly="true"
              >
              </el-input>
            </div>
          </el-main>
        </el-dialog>
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-star-on"></i> 职位管理</span
        >

        <el-main>
          <el-table :data="jobList" border style="width: 100%" stripe>
            <el-table-column prop="jobName" label="职位名"> </el-table-column>
            <el-table-column prop="jobSalary" label="薪资"> </el-table-column>
            <el-table-column prop="jobLocation" label="工作城市">
            </el-table-column>
            <el-table-column prop="number" label="招聘人数"> </el-table-column>
            <el-table-column label="操作" width="300">
              <template slot="header" slot-scope="scope">
                <div class="myHeader">
                  <el-button
                    type="text"
                    @click="searchJob"
                    style="margin-right: 20px"
                    >新增岗位</el-button
                  >

                  <el-input v-model="input2" placeholder="搜索职位"></el-input>
                  <el-button type="primary" @click="searchJob">搜索</el-button>
                </div>
              </template>
              <template slot-scope="scope">
                <el-button
                  type="warning"
                  @click="updateJob(scope.row.jobId)"
                  round
                  >编辑职位</el-button
                >
                <el-button type="danger" @click="cancelStar(scope.row.id)" round
                  >删除职位</el-button
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

        <el-dialog
          title="修改职位信息"
          :visible.sync="dialogVisible2"
          width="30%"
        >
          <el-main class="myMain" style="padding-top: 0px">
            <el-form
              ref="job"
              :model="job"
              label-width="100px"
              style="width: 90%"
            >
              <el-form-item label="职位名">
                <el-input v-model="job.name"></el-input>
              </el-form-item>
              <el-form-item label="职位薪资">
                <el-input v-model="job.salary"></el-input>
              </el-form-item>
              <el-form-item label="工作地点">
                <el-input v-model="job.location"></el-input>
              </el-form-item>

              <el-form-item label="标签1">
                <el-input v-model="job.tag1"></el-input>
              </el-form-item>
              <el-form-item label="标签2">
                <el-input v-model="job.tag2"></el-input>
              </el-form-item>
              <el-form-item label="标签3">
                <el-input v-model="job.tag3"></el-input>
              </el-form-item>

              <el-form-item label="职位要求">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 3 }"
                  placeholder="请输入内容"
                  v-model="job.requirement"
                >
                </el-input>
              </el-form-item>

              <el-form-item label="职位福利">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 3 }"
                  placeholder="请输入内容"
                  v-model="job.welfare"
                >
                </el-input>
              </el-form-item>

              <el-form-item label="招聘人数">
                <el-input v-model="job.number"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" style="width: 150px" round
                  >保存</el-button
                >
                <el-button
                  type="danger"
                  @click="resetJob('job')"
                  style="width: 150px"
                  round
                  >取消</el-button
                >
              </el-form-item>
            </el-form>
          </el-main>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</template>

<script>
export default {
  name: "CompanyCenter",

  data() {
    return {
      rules: {
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
      companyId: 1,

      currentPage1: 1,
      currentPage2: 1,

      totalPage1: 10,
      totalPage2: 10,

      dialogVisible1: false,
      dialogVisible2: false,

      input1: "",
      input2: "",

      // 公司信息
      company: {},

      //简历信息
      resume: {},

      job: {
        name: "",
        salary: "",
        location: "",
        tag1: "",
        tag2: "",
        tag3: "",
        requirement: "",
        welfare: "",
        number: "",
      },

      //简历列表
      resumeList: [],

      //岗位列表
      jobList: [
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
        {
          jobName: "java开发工程师",
          jobLocation: "北京",
          jobSalary: "15-20k",
          number: 500,
        },
      ],

      email: window.sessionStorage.getItem("email"),
    };
  },

  created() {
    this.getCompanyDetail();
    this.searchResume();
  },

  methods: {
    getCompanyDetail() {
      this.$axios
        .get("/api/company/getCompanyDetail?companyId=" + this.companyId)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.company = resp.data.data;
            this.$message.success("查询公司信息成功");
          } else {
            this.$message.error("Oh~" + resp.data.message);
          }
        });
    },

    saveCompanyDetail(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/api/company/saveCompanyDetail", this.company)
            .then((resp) => {
              if (resp.data.code === 200) {
                this.$message.success("修改公司信息成功");
              } else {
                this.$message.error("Oh~" + resp.data.message);
              }
            });
        } else {
          alert("请填完整的信息!");
        }
      });
    },

    searchResume() {
      this.$axios
        .post("/api/resume/searchResumeByKeyWord", {
          keyword: this.input1,
          companyId: this.companyId,
          pageNum: this.currentPage1,
          pageSize: 10,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.resumeList = resp.data.data.rows;
            this.totalPage1 = resp.data.data.totalPage;
            this.$message.success("查询简历list成功");
          } else {
            this.$message.error("Oh~" + resp.data.message);
          }
        });
    },

    getResumeDetail(jobSeekerId) {
      this.$axios
        .get("/api/resume/getResumeDetail?jobseekerId=" + jobSeekerId)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.resume = resp.data.data;
            this.$message.success("查询简历信息成功");
            this.dialogVisible1 = true;
          } else {
            this.$message.error("Oh~" + resp.data.message);
          }
        });
    },

    viewResumeDetail(resumeId) {
      this.dialogVisible1 = true;
    },

    searchJob() {
      alert(this.input2);
    },

    updateJob() {
      this.dialogVisible2 = true;
    },

    resetJob(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible2 = false;
    },

    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       alert("no submit!");
    //     }
    //   });
    // },
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