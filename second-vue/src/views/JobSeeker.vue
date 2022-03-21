<template>
  <el-container style="padding-left: 400px; padding-right: 400px">
    <el-header class="myHeader">
      <div class="left-bar">
        <img
          src="../img/logo_transparent.png"
          alt=""
          width="72px"
          height="60px"
        />
        <el-menu
          :default-active="2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#39c5bb"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="2">职位推荐</el-menu-item>
          <el-menu-item index="3">校园招聘</el-menu-item>
          <el-menu-item index="4">社会招聘</el-menu-item>
          <el-menu-item index="5">公司推荐</el-menu-item>
          <el-menu-item index="6">笔试面经</el-menu-item>
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

        <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.idView" class="image" />
          </el-carousel-item>
        </el-carousel>

        <!-- 岗位列表 -->
        <el-tabs @tab-click="handleClick" value="技术">
          <el-tab-pane name="技术">
            <span slot="label" style="font-size: 17px">技术</span>
            <dl>
              <dt>
                <span>后端开发</span>
              </dt>
              <dd>
                <span
                  v-for="item in meta[0]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>移动开发</dt>
              <dd>
                <span
                  v-for="item in meta[1]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>前端开发</dt>
              <dd>
                <span
                  v-for="item in meta[2]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>人工智能</dt>
              <dd>
                <span
                  v-for="item in meta[3]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>测试</dt>
              <dd>
                <span
                  v-for="item in meta[4]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>运维</dt>
              <dd>
                <span
                  v-for="item in meta[5]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
          </el-tab-pane>
          <el-tab-pane name="产品">
            <span slot="label" style="font-size: 17px">产品</span>
            <dl>
              <dt>
                <span>后端开发</span>
              </dt>
              <dd>
                <span
                  v-for="item in meta[0]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>移动开发</dt>
              <dd>
                <span
                  v-for="item in meta[1]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>前端开发</dt>
              <dd>
                <span
                  v-for="item in meta[2]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>人工智能</dt>
              <dd>
                <span
                  v-for="item in meta[3]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>测试</dt>
              <dd>
                <span
                  v-for="item in meta[4]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>运维</dt>
              <dd>
                <span
                  v-for="item in meta[5]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
          </el-tab-pane>
          <el-tab-pane name="设计">
            <span slot="label" style="font-size: 17px">设计</span>
          </el-tab-pane>
          <el-tab-pane name="运营">
            <span slot="label" style="font-size: 17px">运营</span>
          </el-tab-pane>
          <el-tab-pane name="市场与销售">
            <span slot="label" style="font-size: 17px"
              >市场与销售</span
            ></el-tab-pane
          >
          <el-tab-pane name="职能">
            <span slot="label" style="font-size: 17px">职能</span>
            <dl>
              <dt>
                <span>后端开发</span>
              </dt>
              <dd>
                <span
                  v-for="item in meta[0]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>移动开发</dt>
              <dd>
                <span
                  v-for="item in meta[1]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>前端开发</dt>
              <dd>
                <span
                  v-for="item in meta[2]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>人工智能</dt>
              <dd>
                <span
                  v-for="item in meta[3]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>测试</dt>
              <dd>
                <span
                  v-for="item in meta[4]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
            <dl>
              <dt>运维</dt>
              <dd>
                <span
                  v-for="item in meta[5]"
                  :key="item"
                  @click="searchJob(item)"
                >
                  {{ item }}
                </span>
              </dd>
            </dl>
          </el-tab-pane>
          <el-tab-pane name="金融">
            <span slot="label" style="font-size: 17px">金融</span></el-tab-pane
          >
        </el-tabs>

        <div class="card_wrap">
          <el-card
            class="box-card"
            shadow="always"
            v-for="job in jobs"
            :key="job"
            style="width: 370px"
          >
            <div class="myHeader">
              <div class="job-name col-md-8">
                <a>{{ job.title }}</a>
              </div>
              <div class="job-salary col-md-4 text-right">10k-20k</div>
            </div>

            <div class="line-3 job-tag-content row">
              <ul class="">
                <li class="col-md-3 job-tag">数据分析</li>
                <li class="col-md-3 job-tag">全栈开发</li>
              </ul>
            </div>
            <div class="company">
              <img
                style="width: 40px; height: 40px"
                class="img-rounded"
                src="../img/img1.jpg"
              />
              <div class="company-right">
                <div class="row company-name">
                  <a href="">{{ job.companyName }}</a>
                </div>
                <div class="row company-description">
                  大型互联网公司/上市公司
                </div>
              </div>
            </div>
          </el-card>
        </div>

        <div class="job-list-container container">
          <div class="jot-tab-content row">
            <div class="line">
              <ul class="col-md-4 no-margin-bottom">
                <li class="nav_item col-md-4 active">
                  <a class="" href="#">热门推荐</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="job-summary-container container">
            <div class="content" id="job-content">
              <div
                class="col-lg-4 summary-border"
                id="job-box"
                v-for="job in jobs"
                :key="job"
              >
                <div class="job-summary">
                  <div class="line-1 row">
                    <div class="job-name col-md-8">
                      <a>{{ job.title }}</a
                      ><span class="create-item"
                        >数日前发布<span
                          class="lianxi iconfont icon-lianxi"
                        ></span>
                      </span>
                    </div>
                    <div class="job-salary col-md-4 text-right">10k-20k</div>
                  </div>
                  <div class="line-2 job-require">
                    <!--{{job.requirement}}-->
                  </div>
                  <div class="line-3 job-tag-content row">
                    <ul class="">
                      <li class="col-md-3 job-tag">数据分析</li>
                      <li class="col-md-3 job-tag">全栈开发</li>
                    </ul>
                  </div>
                  <div class="company">
                    <img
                      style="width: 40px; height: 40px"
                      class="img-rounded"
                      src="../img/img1.jpg"
                    />
                    <div class="company-right">
                      <div class="row company-name">
                        <a href="">{{ job.companyName }}</a>
                      </div>
                      <div class="row company-description">
                        大型互联网公司/上市公司
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

    <el-dialog
      title="简历模板"
      :visible.sync="dialogVisible"
      width="30%"
      center
    >
      <el-form ref="resumeForm" :model="resumeForm" label-width="80px">
        <el-form-item label="真实姓名">
          <el-input v-model="resumeForm.realName"></el-input>
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="resumeForm.phoneNumber"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio v-model="resumeForm.sex" label="1">男</el-radio>
          <el-radio v-model="resumeForm.sex" label="0">女</el-radio>
        </el-form-item>

        <el-form-item label="学历">
          <el-input v-model="resumeForm.education"></el-input>
        </el-form-item>
        <el-form-item label="毕业学校">
          <el-input v-model="resumeForm.school"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="resumeForm.address"></el-input>
        </el-form-item>
        <el-form-item label="意向岗位">
          <el-input v-model="resumeForm.intentionJob"></el-input>
        </el-form-item>
        <el-form-item label="自我介绍">
          <el-input v-model="resumeForm.introduce"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateResume">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  name: "JobSeeker",

  data() {
    return {
      imgList: [
        { id: 0, idView: require("@/img/poster1.png") },
        { id: 1, idView: require("@/img/poster2.png") },
        { id: 2, idView: require("@/img/poster3.png") },
      ],

      meta: [],

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
    this.initJoblist();
  },

  methods: {
    initJoblist() {
      this.meta = [
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
      ];
    },

    searchJob(item) {
      this.$message.success(item);
    },

    handleClick(tab, event) {
      this.$message.success(tab.name);

      if (tab.name == "技术") {
        this.meta = [
          [1, 2, 3, 4, "666"],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
        ];
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-tab-pane dt {
  padding: 10px 0;
}

.el-tab-pane dd {
  color: rgb(57 197 187 / 52%);
}

.el-tab-pane dd span {
  margin: 5px;
}

.jot-tab-content .nav_item {
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: block;
  padding: 10px 18px;
  color: #999999;
  font-size: 16px;
}

.jot-tab-content .nav_item.active,
.jot-tab-content .nav_item:hover {
  color: #6aa2e4;
  border-bottom: 2px solid #6aa2e4;
}
.jot-tab-content .line {
  width: 100%;
  border-bottom: solid 1px #e6e6e6;
  margin-right: 40px;
}
.no-margin-bottom {
  margin-bottom: 0 !important;
  margin-left: -15px !important;
}
.job-summary-container .content {
  padding-top: 15px;
}
.job-list-container {
}
.job-summary-container {
  margin-left: -42px;
}
.job-summary-container .col-lg-4 {
  padding: 0 10px !important;
}
.job-summary {
  box-sizing: border-box;
  position: relative;

  height: 180px;
  margin: 16px 0 0 0;
  padding: 12px 12px 0;
  border: solid 1px #eaeeed;
}
.summary-border {
}
.job-summary:hover {
  box-shadow: 0 0 10px 0 rgba(56, 81, 76, 0.12);
}

.line-1 {
  color: #333;
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
.create-item {
  color: #999;
  font-size: 14px;
}
.lianxi {
  margin-left: 5px;
  color: #6aa2e4;
  cursor: pointer;
}
.job-require {
  padding-top: 6px;

  display: inline-block;

  margin: 0;
  color: #999;
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
