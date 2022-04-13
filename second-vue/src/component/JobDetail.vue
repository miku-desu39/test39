<template>
  <el-main>
    <div class="myHeader">
      <div>
        <span style="font-size: 39px">{{ job.name }}</span>

        <div style="padding-top: 20px">
          <span>{{ job.salary }} / </span>
          <span>{{ job.location }} / </span>
          <span>招聘人数：{{ job.number }}</span>
        </div>

        <div class="job-tag-content">
          <ul>
            <li class="job-tag">{{ job.tag1 }}</li>
            <li class="job-tag">{{ job.tag2 }}</li>
            <li class="job-tag">{{ job.tag3 }}</li>
          </ul>
        </div>
        <div style="padding-top: 20px">
          <span style="color: #999; font-size: 15px"
            >职位浏览量：{{ job.pageviews }}</span
          >
        </div>
      </div>

      <div>
        <el-button type="primary" @click="postJob">投递简历</el-button>

        <el-button type="warning" @click="starJob">收藏职位</el-button>
      </div>
    </div>

    <div style="padding: 30px">
      <h4>一.公司介绍</h4>
      <p>公司名：{{ job.companyName }}</p>
      <p>公司描述：{{ job.companyIntroduce }}</p>

      <h4>二.任职要求</h4>
      <p>{{ job.requirement }}</p>

      <h4>三.福利待遇</h4>
      <!-- <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="job.welfare"
      >
      </el-input> -->
      <div v-html="job.welfare"></div>
      <!-- <el-input
        type="textarea"
        v-model="job.welfare"
        :autosize="{ minRows: 2, maxRows: 4 }"
        readonly="true"
        class="myInput"
      ></el-input> -->

      <h4>四.工作城市</h4>
      <p>{{ job.location }}</p>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "JobDetail",

  data() {
    return {

      jobseekerId: 2,

      jobId: "",

      job: {
        id: "",
        companyName: "",
        companyIntroduce: "",
        name: "",
        salary: "",
        location: "",
        tag1: "",
        tag2: "",
        tag3: "",
        requirement: "",
        welfare: "",
        number: "",
        pageviews: "",
      },

      email: window.sessionStorage.getItem("email"),
    };
  },

  created() {
    if (this.$route.query.jobId) {
      this.jobId = this.$route.query.jobId;
    }

    this.initJob();
  },

  methods: {
    initJob() {
      this.$message.success(this.jobId);

       this.$axios
        .get("/api/job/viewJobDetail?jobId="+this.jobId)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.job = resp.data.data;
          } else {
            this.$message.error("错误："+resp.data.message);
          }
        });
    },

    starJob() {
      this.$message.success(this.jobId);

       this.$axios
        .post("/api/job/starJob",{
          jobId: this.jobId,
          jobseekerId: this.jobseekerId
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.$message.success("收藏职位成功");
          } else {
            this.$message.error("OH~ "+resp.data.message);
          }
        });
    },

    postJob() {
      this.$message.success(this.jobId);

       this.$axios
        .post("/api/job/postJob",{
          jobId: this.jobId,
          jobseekerId: this.jobseekerId
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.$message.success("投递职位成功");
          } else {
            this.$message.error("OH~ "+resp.data.message);
          }
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
  justify-content: space-between;
  background-color: white;
  padding: 30px;
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
</style>