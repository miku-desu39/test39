<template>
  <el-main style="padding-top: 0px">
    <el-container>
      <el-header class="myHeader2">
        <!-- <span>职位推荐</span> -->

        <!-- <el-input
            placeholder="请输入岗位"
            v-model="input"
            style="width: 30%; border: 2px solid #39c5bb"
          >
            <el-button slot="append" style="background: #39c5bb"
              >搜索岗位</el-button
            >
          </el-input> -->

        <div class="myHeader2">
          <input
            v-model="input"
            placeholder="请输入职位"
            class="search-input"
          />
          <el-button type="primary" class="search-button">搜索岗位</el-button>
        </div>

        <!-- <div style="display: flex">
            <div><el-input v-model="input" placeholder="请输入职位" size="medium"></el-input></div>
            <el-button type="primary" @click="getTargetJobList" style="margin-left: 10px">搜索职位</el-button>
            <el-button type="success" @click="resetPage">重置</el-button>
          </div> -->

        <!-- <el-button type="primary" @click="dialogVisible = true">修改简历</el-button> -->
      </el-header>
      <!-- <el-divider class="myDivider"></el-divider> -->

      <!-- 岗位展示块 -->
      <el-main>
        <el-card v-for="item in this.pageData" class="box-card" :key="item">
          <el-header class="myHeader">
            <strong
              ><span style="font-size: 30px; color: black">{{
                item.name
              }}</span></strong
            >
            <strong
              ><span style="font-size: 30px; color: red">{{
                item.salary
              }}</span></strong
            >
          </el-header>

          <div class="text item">
            <strong
              ><span style="margin-left: 20px"
                >工作地点：{{ item.location }}</span
              ></strong
            >
          </div>
          <div class="text item">
            <strong
              ><span style="margin-left: 20px"
                >工作负责：{{ item.introduce }}</span
              ></strong
            >
          </div>
          <div class="myHeader">
            <strong
              ><span style="margin-left: 20px; color: goldenrod">{{
                item.companyName
              }}</span></strong
            >
            <el-button type="primary" @click="deliverResume(item)"
              >投递简历</el-button
            >
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
      pageDataType: "normal",

      input: "",

      currentPage1: 1,

      totalPage: 10,

      pageData: [
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

      dialogVisible: false,

      resumeForm: {
        realName: "",
        phoneNumber: "",
        sex: "",
        education: "",
        school: "",
        address: "",
        intentionJob: "",
        introduce: "",
      },
    };
  },

  created() {
    this.getJobList();
  },

  methods: {
    searchJob(item) {
      this.$message.success(item);
    },

    handleClick(tab, event) {
      this.$message.success(tab.name);

      if (tab.name == "技术") {
      }
    },

    updateResume() {
      this.$axios
        .post("/Resume/updateResume?email=" + this.email, this.resumeForm)
        .then((resp) => {
          if (resp.data.code === 200) {
            this.$message.success("修改成功");
          } else {
            this.$message.error("修改失败");
          }
          this.dialogVisible = false;
        });
    },

    deliverResume(item) {
      this.$confirm("确认投递该岗位", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
      }).then(() => {
        this.$axios
          .get("/Resume/sendResume?email=" + this.email + "&jobId=" + item.id)
          .then((resp) => {
            if (resp.data.code === 200) {
              this.$message.success("投递成功");
            } else {
              this.$message.error("投递失败");
            }
          });
      });
    },

    resetPage() {
      this.input = "";
      this.currentPage1 = 1;
      this.pageDataType = "normal";
      this.getJobList();
      this.$message.success("已重置");
    },

    getTargetJobList() {
      if (this.pageDataType === "normal") {
        this.currentPage1 = 1;
        this.pageDataType = "special";
      }

      this.$axios
        .post("/Job/listJobByFuzzyQuery?keyWord=" + this.input, {
          pageNum: this.currentPage1,
          pageSize: 5,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.pageData = resp.data.data.pageData;
            this.totalPage = resp.data.data.totalPageNum;

            this.$message.success("查询成功！");
          } else {
            this.$message.error("发送失败！");
          }
        });
    },

    getJobList() {
      this.$axios
        .post("/Job/listJobByPage", {
          pageNum: this.currentPage1,
          pageSize: 5,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.pageData = resp.data.data.pageData;
            this.totalPage = resp.data.data.totalPageNum;
          } else {
            this.$message.error("发送失败！");
          }
        });
    },

    handleCurrentChange() {
      if (this.pageDataType === "normal") {
        this.getJobList();
      } else {
        this.getTargetJobList();
      }
    },

    quit(command) {
      this.$router.replace("/");
      this.$message.success("退出成功！");
    },
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