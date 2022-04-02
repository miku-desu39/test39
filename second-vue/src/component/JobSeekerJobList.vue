<template>
  <el-main style="padding-top: 0px">
    <el-container>
      <el-header class="myHeader2">
        <div class="myHeader2">
          <input
            v-model="jobInput"
            placeholder="请输入职位"
            class="search-input"
          />
          <el-button type="primary" class="search-button" @click="searchJobList">搜索岗位</el-button>
        </div>
      </el-header>

      <!-- 岗位展示块 -->
      <el-main style="padding-top: 0px">
        <el-tabs style="width: 1042px; margin: auto" @tab-click="handleClick">
          <el-tab-pane name="most valuable">
            <span slot="label" style="font-size: 17px"
              ><i class="el-icon-trophy"></i>最有价值</span
            >
          </el-tab-pane>
          <el-tab-pane name="latest release">
            <span slot="label" style="font-size: 17px"
              ><i class="el-icon-alarm-clock"></i>最新发布</span
            >
          </el-tab-pane>
          <el-tab-pane name="most popular">
            <span slot="label" style="font-size: 17px"
              ><i class="el-icon-medal-1"></i>最具人气</span
            >
          </el-tab-pane>
        </el-tabs>

        <el-card
          v-for="item in this.pageData"
          class="box-card"
          :key="item"
          shadow="always"
        >
          <div class="myHeader">
            <div class="job-name">
              <a @click="viewJobDetail(item.name)">{{ item.name }}</a>
            </div>
            <div class="job-salary">{{ item.salary }}</div>
          </div>

          <div class="job-tag-content">
            <ul>
              <li class="job-tag" style="width: 100px">
                工作地点：{{ item.location }}
              </li>
              <li class="job-tag" style="width: 100px">招聘人数：5555</li>
              <li class="job-tag" style="width: 100px">浏览量：8888</li>
            </ul>
          </div>
          <div
            style="
              font-size: 12px;
              color: #999999;
              margin-top: 25px;
              padding-left: 15px;
            "
          >
            工作要求：{{ item.introduce }}
          </div>
          <div class="company">
            <img
              style="width: 40px; height: 40px"
              class="img-rounded"
              src="../img/img1.jpg"
            />
            <div class="company-right">
              <div class="company-name">
                <a href="">{{ item.companyName }}</a>
              </div>
              <div class="company-description">
                阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人于1999年在浙江杭州创立
              </div>
            </div>
          </div>

        </el-card>

        <el-divider></el-divider>
        <div class="pageContainer">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-count="this.totalPage"
            layout="prev, pager, next"
          >
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </el-main>
</template>

<script>
export default {
  name: "JobSeekerJobList",

  data() {
    return {
      jobInput: "",

      pageDataType: "normal",

      currentPage1: 1,

      totalPage: 10,

      pageData: [
        {
          name: "java工程师",
          salary: "10k-59k",
          location: "杭州",
          introduce:
            "接收应届实习生，实习期满应聘上岗接收应届实习生，实习期满应聘上岗收应届实习生，实习期满应聘上岗",
          companyName: "Tencent",
        },
        {
          name: "java工程师",
          salary: "10k-59k",
          location: "上海",
          introduce: "熟练使用RPC框架，具备相关的分布式开发经验",
          companyName: "Tencent",
        },
        {
          name: "java工程师",
          salary: "10k-59k",
          location: "china",
          introduce: "code java for living",
          companyName: "Tencent",
        },
        {
          name: "java工程师",
          salary: "10k-59k",
          location: "china",
          introduce: "code java for living",
          companyName: "Tencent",
        },
        {
          name: "java工程师",
          salary: "10k-59k",
          location: "china",
          introduce: "code java for living",
          companyName: "Tencent",
        },
        {
          name: "java工程师",
          salary: "10k-59k",
          location: "china",
          introduce: "code java for living",
          companyName: "Tencent",
        },
      ],

      email: window.sessionStorage.getItem("email"),

    };
  },

  created() {
    if (this.$route.query.jobInput) {
      this.jobInput = this.$route.query.jobInput;
    }

    this.initJob();
    this.getJobList();
  },

  methods: {
    viewJobDetail(jobId) {
      this.$router.push({
        path: "/JobDetail",
        query: {
          jobId: jobId,
        },
      });
    },

    searchJobList() {
      this.$message.success(this.jobInput);
    },

    handleClick(tab, event) {
      this.$message.success(tab.name);
    },


    // -------------------------------------------------------------------

  },
};
</script>

<style scoped>
dd > span {
  color: black;
  font-size: 14px;
  margin-left: 5px;
}
dd > span:hover {
  font-size: 14px;
  color: #39c5bb;
  cursor: pointer;
}

.card_wrap {
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.courseDiv {
  height: 273px;
  display: inline-block;
  margin-right: 40px;
  width: 270px;
  background: #fff;
  border: 1px solid #e2e6ed;
  border-radius: 8px;
}

.myHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.myHeader2 {
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.courseDivP1 {
  display: flex;
  flex-direction: column;
  height: 50%;
  background-size: cover !important;
  background-image: url("../img/courseDiv0.png");
}

.courseDivP2 {
  height: 50%;
}

.left-bar {
  display: flex;
}

.myDivider {
  margin-top: 0px;
  margin-bottom: 0px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 1000px;
  margin-bottom: 20px;

  padding: 20px;

  margin-left: auto;
  margin-right: auto;
}

.pageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 700px;
  height: 40px;
  border: 2px solid #39c5bb;
  padding: 5px 10px;
  box-sizing: border-box;
  outline: none;
}

.search-button {
  border-radius: 0px;
}

.job-name {
  font-size: 16px;
  display: inline-block;
  padding-left: 15px;
  margin: 0;
  color: #333;
}
.job-name a:hover {
  cursor: pointer;
  color: #6aa2e4 !important;
}

.job-salary {
  font-size: 16px;
  color: #fa6041;
  padding-left: 0 !important;
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
.company {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px dashed #e0e0e0;
}
.company img {
  display: inline-block;
}

.company .company-right {
  margin-left: 54px;
  position: absolute;
  display: inline-block;
}
.company .company-right .company-name a {
  font-size: 14px;
  color: #555555;
}
.company .company-right .company-name a:hover {
  color: #6aa2e4;
}
.company .company-right .company-description {
  font-size: 12px;
  color: #999999;
}
</style>