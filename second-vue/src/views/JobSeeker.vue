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

        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.idView" class="image" />
          </el-carousel-item>
        </el-carousel>

        <el-tabs tab-position="left">
          <el-tab-pane label="技术">
            <div class="menu_box">
               
                <div class="menu_sub hidden">
                    <dl>
                        <dt>
                            <span>后端开发</span>
                        </dt>
                        <dd>
                            <a href="/searchlist?keyword=Java" class="current" >Java</a>
                            <a href="/searchlist?keyword=C++" >C++</a>
                            <a href="/searchlist?keyword=PHP" >PHP</a>
                            <a href="/searchlist?keyword=数据挖掘" >数据挖掘</a>
                            <a href="#" >搜索算法</a>
                            <a href="#" >精准推荐</a>
                            <a href="#" >C</a>
                            <a href="#" >C#</a>
                            <a href="#"  class="current">全栈工程师</a>
                            <a href="#" >Hadoop</a>
                            <a href="/searchlist?keyword=.Net" >.NET</a>
                            <a href="/searchlist?keyword=Python" >Python</a>
                            <a href="#" >Delphi</a>
                            <a href="#" >VB</a>
                            <a href="#" >Perl</a>
                            <a href="#" >Ruby</a>
                            <a href="#" class="current" >Node.js</a>
                            <a href="#" >Go</a>
                            <a href="#" >ASP</a>
                            <a href="#" >Shell</a>
                            <a href="#" >后端开发其它</a>

                        </dd>

                    </dl>
                    <dl>
                        <dt>
                            移动开发
                        </dt>
                        <dd>
                            <a href="#" class="current" >HTML5</a>
                            <a href="#"  class="current">Android</a>
                            <a href="#" >iOS</a>
                            <a href="#" >WP</a>
                            <a href="#" >移动开发其它</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            前端开发
                        </dt>
                        <dd>
                            <a href="#" class="current">web前端</a>
                            <a href="#" >Flash</a>
                            <a href="#" class="current">JavaScript</a>
                            <a href="#" >U3D</a>
                            <a href="#" >Shell</a>
                            <a href="#" >COCOS2D-X</a>
                            <a href="#" >前端开发其它</a>

                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            人工智能
                        </dt>
                        <dd>
                            <a href="#" class="current">深度学习</a>
                            <a href="#" class="current">机器学习</a>
                            <a href="#" >图像处理</a>
                            <a href="#" >图像识别</a>
                            <a href="#" >语音识别</a>
                            <a href="#" >机器视觉</a>
                            <a href="#" >算法工程师</a>
                            <a href="#" >自然语言处理</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            测试
                        </dt>
                        <dd>
                            <a href="#" >测试工程师</a>
                            <a href="#" >自动化测试</a>
                            <a href="#" >功能测试</a>
                            <a href="#" >性能测试</a>
                            <a href="#" >测试开发</a>
                            <a href="#" >游戏测试</a>
                            <a href="#" >白盒测试</a>
                            <a href="#" >灰盒测试</a>
                            <a href="#" >黑盒测试</a>
                            <a href="#" >手机测试</a>
                            <a href="#" >硬件测试</a>
                            <a href="#" >测试经理</a>

                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            运维
                        </dt>
                        <dd>
                            <a href="#" >运维工程师</a>
                            <a href="#" >网络工程师</a>
                            <a href="#" >系统工程师</a>
                            <a href="#" >IT支持</a>
                            <a href="#" >CDN</a>
                            <a href="#" >系统管理员</a>
                            <a href="#" >网络安全</a>
                            <a href="#" >系统安全</a>
                            <a href="#" >运维经理</a>
                            <a href="#" >运维其他</a>

                        </dd>
                    </dl>
                </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
        <!-- <div>
          <el-tabs style="height: 200px;" type="border-card">
          <el-tab-pane label="用户管理">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>

        </div> -->

        <el-main>
          <el-card v-for="item in this.pageData" class="box-card">
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
</style>
