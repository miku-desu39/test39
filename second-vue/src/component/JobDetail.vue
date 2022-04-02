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
        <el-button type="primary">投递简历</el-button>

        <el-button type="warning">收藏职位</el-button>
      </div>
    </div>

    <div style="padding: 30px">
      <h4>一.公司介绍</h4>
      <p>公司名：{{ job.companyName }}</p>
      <p>公司描述：{{ job.companyDetail }}</p>

      <h4>二.任职要求</h4>
      <p>{{ job.introduce }}</p>

      <h4>三.福利待遇</h4>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="job.welfare"
      >
      </el-input>
      <div v-html="job.welfare"></div>
      <el-input
        type="textarea"
        v-model="job.welfare"
        :autosize="{ minRows: 2, maxRows: 4 }"
        readonly="true"
        class="myInput"
      ></el-input>

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
      jobId: "",

      job: {
        name: "java工程师",
        salary: "10k-59k",
        location: "杭州",
        introduce:
          "接收应届实习生，实习期满应聘上岗接收应届实习生，实习期满应聘上岗收应届实习生，实习期满应聘上岗",
        companyName: "Tencent",
        number: 500,
        companyDetail:
          "阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人于1999年在浙江杭州创立",
        welfare:
          "1、五险一金 </br> 2、上班时间：8：30-12:00,13:30-17:30，国家法定节假日 </br> 3、生日福利卡 </br>4、定期的员工活动，聚餐旅游等 </br>5、扁平化管理，为员工提供公平公正公开的晋升渠道",
        pageviews: 821,
        tag1: "java开发",
        tag2: "五险一金",
        tag3: "周末双休",
      },

      email: window.sessionStorage.getItem("email"),
    };
  },

  created() {

      if(this.$route.query.jobId){

          this.jobId = this.$route.query.jobId;

      }

      this.initJob();

      


  },

  methods: {

    initJob(){

        this.$message.success(this.jobId);

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