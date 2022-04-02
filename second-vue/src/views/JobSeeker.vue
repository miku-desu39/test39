<template>
  <el-container style="padding-left: 400px; padding-right: 400px; background-color:rgb(244,245,245)">
    <el-header class="myHeader">
      <div class="left-bar">
        <img
          src="../img/easy_logo.png"
          alt=""
          width="128px"
          height="60px"
        />
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          router
          text-color="black"
          active-text-color="#39c5bb"
        >
          <el-menu-item index="1" route="/JobSeekerHome"
            >职位推荐</el-menu-item
          >
          <el-menu-item index="2" route="/JobSeekerJobList"
            >校园招聘</el-menu-item
          >
          <el-menu-item index="3" route="/PersonalCenter">社会招聘</el-menu-item>
          <el-menu-item index="4" route="/JobDetail">公司推荐</el-menu-item>
          <el-menu-item index="5">笔试面经</el-menu-item>
        </el-menu>
      </div>

      <el-dropdown @command="quit" style="margin-right: 20px">
        <span class="el-dropdown-link">
          welcome! {{ this.email
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <!-- <el-divider class="myDivider"></el-divider> -->

    <router-view></router-view>


    <div class="myHeader2">
      <img width="200px" height="200px" src="../img/logo_transparent.png" />

    </div>
    
  </el-container>
</template>

<script>
import router from "../router";

export default {
  name: "JobSeeker",

  data() {
    return {
      imgList: [
        { id: 0, idView: require("@/img/poster1.png") },
        { id: 1, idView: require("@/img/poster2.png") },
        { id: 2, idView: require("@/img/poster3.png") },
      ],

      meta: [
        [
          "Java",
          "C++",
          "PHP",
          "数据挖掘",
          "搜索算法",
          "精准推荐",
          "C",
          "C#",
          "全栈工程师",
          "Hadoop",
          ".NET",
          "Python",
          "Delphi",
          "VB",
          "Perl",
          "Ruby",
          "Node.js",
          "Go",
          "ASP",
          "Shell",
          "后端开发其它",
        ],
        ["HTML5", "Android", "iOS", "WP", "移动开发其它"],
        [
          "web前端",
          "Flash",
          "JavaScript",
          "U3D",
          "Shell",
          "COCOS2D-X",
          "前端开发其它",
        ],
        [
          "深度学习",
          "机器学习",
          "图像处理",
          "图像识别",
          "语音识别",
          "机器视觉",
          "算法工程师",
          "自然语言处理",
        ],
        [
          "测试工程师",
          "自动化测试",
          "功能测试",
          "性能测试",
          "测试开发",
          "游戏测试",
          "白盒测试",
          "灰盒测试",
          "黑盒测试",
          "手机测试",
          "硬件测试",
          "测试经理",
        ],
        [
          "运维工程师",
          "网络工程师",
          "系统工程师",
          "IT支持",
          "CDN",
          "系统管理员",
          "网络安全",
          "系统安全",
          "运维经理",
          "运维其他",
        ],
      ],

      meta1: [
        [
          "产品经理",
          "网页产品经理",
          "移动产品经理",
          "产品助理",
          "数据产品经理",
          "电商产品经理",
          "游戏策划",
          "产品实习生",
        ],
        ["网页产品设计师", "无线产品设计师"],
      ],

      meta2: [
        [
          "错觉设计师",
          "网页设计师",
          "Flash设计师",
          "APP设计师",
          "UI设计师",
          "平面设计师",
          "美术设计师",
          "广告设计师",
          "多媒体设计师",
          "原画师",
          "游戏特效",
          "游戏界面设计师",
          "游戏场景",
          "游戏角色",
          "游戏动作",
        ],
        ["交互设计师", "无线交互设计师", "网页交互设计师", "硬件交互设计师"],
        ["数据分析师", "用户研究员", "游戏数值策划"],
      ],

      meta3: [
        [
          "用户运营",
          "产品运营",
          "数据运营",
          "内容运营",
          "活动运营",
          "商家运营",
          "品类运营",
          "游戏运营",
          "网络推广",
          "运营专员",
          "网店运营",
          "新媒体运营",
          "海外运营",
          "运营经理",
        ],
        ["主编辑", "副主编", "内容编辑", "文案编辑", "记者"],
        ["售前咨询", "售后咨询", "淘宝客服", "客服经理"],
      ],

      meta4: [
        [
          "市场营销",
          "市场策划",
          "市场顾问",
          "市场推广",
          "SEO",
          "SEM",
          "商务渠道",
          "商业数据分析",
          "活动策划",
          "网络营销",
          "海外市场",
          "政府关系",
        ],
        ["媒介经理", "广告协调", "品牌公关"],
        [
          "销售专员",
          "销售经理",
          "客户代表",
          "大客户代表",
          "BD经理",
          "商务渠道",
          "渠道销售",
          "代理商销售",
          "销售助理",
          "电话销售",
          "销售顾问",
          "商品经理",
        ],
        ["物流", "仓储"],
        ["采购专员", "采购经理", "商品经理"],
      ],

      meta5: [
        [
          "人力资源",
          "招聘",
          "HRBP",
          "人事",
          "培训经理",
          "薪资福利经理",
          "绩效考核经理",
          "员工关系",
        ],
        ["助理", "前台", "行政", "总助", "文秘"],
        ["会计", "出纳", "财务", "结算", "税务", "审计", "风控"],
        ["专刊", "法务", "律师"],
      ],

      meta6: [
        [
          "投资经理",
          "分析师",
          "投资助理",
          "融资",
          "并购",
          "行业研究",
          "投资者关系",
          "资产管理",
          "理财顾问",
          "交易员",
        ],
        ["风控", "资信评估", "合规稽查", "律师"],
        ["审计", "法务", "会计", "清算"],
      ],

      jobs: [
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
        { title: "java开发工程师", companyId: 1, companyName: "alibaba" },
      ],

      pageDataType: "normal",

      input: "",

      currentPage1: 1,

      totalPage: 10,

      pageData: [],

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
    handleSelect() {
      this.$router.push("/JobSeekerHome");
    },

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
  background-color: #fff;
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
