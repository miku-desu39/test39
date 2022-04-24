<template>
  <el-main style="padding-top: 0px">
    <el-container>
      <!-- 搜索框 -->
      <el-header class="myHeader2">
        <div class="myHeader2">
          <input
            v-model="jobInput"
            placeholder="请输入职位"
            class="search-input"
          />
          <el-button
            type="primary"
            class="search-button"
            @click="searchJobByInput"
            >搜索岗位</el-button
          >
        </div>
      </el-header>

      <!-- <router-view></router-view> -->

      <!-- 轮播图 -->
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.idView" class="image" />
        </el-carousel-item>
      </el-carousel>

      <!-- 岗位密集列表 -->
      <el-tabs
        @tab-click="handleClick"
        value="技术"
        type="border-card"
        style="height: 500px"
      >
        <el-tab-pane name="技术">
          <span slot="label" style="font-size: 17px">技术</span>
          <dl>
            <dt>后端开发</dt>
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
            <dt>产品经理</dt>
            <dd>
              <span
                v-for="item in meta1[0]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>产品设计师</dt>
            <dd>
              <span
                v-for="item in meta1[1]"
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
          <dl>
            <dt>错觉设计</dt>
            <dd>
              <span
                v-for="item in meta2[0]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>交互设计</dt>
            <dd>
              <span
                v-for="item in meta2[1]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>用户研究</dt>
            <dd>
              <span
                v-for="item in meta2[2]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
        </el-tab-pane>
        <el-tab-pane name="运营">
          <span slot="label" style="font-size: 17px">运营</span>
          <dl>
            <dt>运营</dt>
            <dd>
              <span
                v-for="item in meta3[0]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>编辑</dt>
            <dd>
              <span
                v-for="item in meta3[1]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>客服</dt>
            <dd>
              <span
                v-for="item in meta3[2]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
        </el-tab-pane>
        <el-tab-pane name="市场与销售">
          <span slot="label" style="font-size: 17px">市场与销售</span>
          <dl>
            <dt>市场/营销</dt>
            <dd>
              <span
                v-for="item in meta4[0]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>公关</dt>
            <dd>
              <span
                v-for="item in meta4[1]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>销售</dt>
            <dd>
              <span
                v-for="item in meta4[2]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>供应链</dt>
            <dd>
              <span
                v-for="item in meta4[3]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>采购</dt>
            <dd>
              <span
                v-for="item in meta4[4]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
        </el-tab-pane>
        <el-tab-pane name="职能">
          <span slot="label" style="font-size: 17px">职能</span>
          <dl>
            <dt>人力资源</dt>
            <dd>
              <span
                v-for="item in meta5[0]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>行政</dt>
            <dd>
              <span
                v-for="item in meta5[1]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>财务</dt>
            <dd>
              <span
                v-for="item in meta5[2]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>法务</dt>
            <dd>
              <span
                v-for="item in meta5[3]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
        </el-tab-pane>
        <el-tab-pane name="金融">
          <span slot="label" style="font-size: 17px">金融</span>
          <dl>
            <dt>投融资</dt>
            <dd>
              <span
                v-for="item in meta6[0]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>风控</dt>
            <dd>
              <span
                v-for="item in meta6[1]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
          <dl>
            <dt>审计税务</dt>
            <dd>
              <span
                v-for="item in meta6[2]"
                :key="item"
                @click="searchJob(item)"
              >
                {{ item }}
              </span>
            </dd>
          </dl>
        </el-tab-pane>
      </el-tabs>

      <el-divider></el-divider>

      <!-- 岗位卡片 -->

      <div class="card_wrap">
        <el-card
          class="box-card"
          shadow="always"
          v-for="job in jobs"
          :key="job"
          style="width: 370px"
        >
          <div class="myHeader">
            <div class="job-name">
              <a @click="viewJobDetail(job.id)">{{ job.name }}</a>
            </div>
            <div class="job-salary">{{ job.salary }}</div>
          </div>

          <div class="job-tag-content">
            <ul class="">
              <li class="job-tag">{{ job.tag1 }}</li>
              <li class="job-tag">{{ job.tag2 }}</li>
              <li class="job-tag">{{ job.tag3 }}</li>
            </ul>
          </div>
          <div class="company">
            <img
              style="width: 40px; height: 40px"
              class="img-rounded"
              :src="imgUrl+'img'+job.companyId+'.jpg'"
            />
            <div class="company-right">
              <div class="company-name">
                <a href="">{{ job.companyName }}</a>
              </div>
              <div class="company-description">{{ job.companyTag }}</div>
            </div>
          </div>
        </el-card>
      </div>

      <!-- 底部分页 -->
      <el-main>
        <el-divider></el-divider>
        <div class="pageContainer">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="12"
            :page-count.sync="totalPage"
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
  name: "JobSeekerHome",

  data() {
    return {

      imgUrl: "http://175.178.110.91/images/",


      jobInput: "",

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

      jobs: [],

      totalPage: 10,

      email: window.sessionStorage.getItem("email"),

      currentPage: 1,
    };
  },

  created() {
    this.currentPage = 1;
    this.getJobHomeJobList();
    
  },

  methods: {


    getJobHomeJobList(){

        this.$axios
        .post("/api/job/getJobHomeJobList", {
          pageNum: this.currentPage,
          pageSize: 9,
        })
        .then((resp) => {
          if (resp.data.code === 200) {
            this.jobs = resp.data.data.rows;
            this.totalPage = resp.data.data.totalPage;

            this.$message.success("查询成功！");
          } else {
            this.$message.error("发送失败！");
          }
        });



    },

    handleCurrentChange() {
      this.getJobHomeJobList();
    },



    viewJobDetail(jobId) {
      this.$router.push({
        path: "/JobDetail",
        query: {
          jobId: jobId,
        },
      });
    },

    searchJobByInput() {
      this.$message.success(this.jobInput);
      this.$router.push({
        path: "/JobSeekerJobList",
        query: {
          jobInput: this.jobInput,
        },
      });
    },

    searchJob(item) {
      this.$message.success(item);
      this.$router.push({
        path: "/JobSeekerJobList",
        query: {
          jobInput: item,
        },
      });
    },

    handleClick(tab, event) {
      this.$message.success(tab.name);
    },

    // ------------------------------------------------------------------------------

    
      
  },
};
</script>

<style scoped>
dd {
  margin-top: 10px;
}

dd > span {
  color: black;
  font-size: 14px;
  margin-left: 8px;
}
dd > span:hover {
  font-size: 14px;
  color: #39c5bb;
  cursor: pointer;
}

.card_wrap {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  margin-bottom: 20px;
  margin-left: 20px;

  padding: 20px;
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
  margin-top: 5px;
  font-size: 12px;
  color: #999999;
}
</style>