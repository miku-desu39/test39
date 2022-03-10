<template>

  <el-container>

    <el-divider class="myDivider"></el-divider>
    <el-header class="myHeader2">

        <div><el-input v-model="input" placeholder="请输入职位" size="medium"></el-input></div>
        <el-button type="primary" @click="searchResume" style="margin-left: 10px">搜索简历</el-button>

    </el-header>

    <el-divider class="myDivider"></el-divider>

    <el-main>

      <el-card v-for="item in this.resumeData" class="box-card">

        <el-header class="myHeader">
          <strong><span style="font-size: 30px; color: black;">{{item.realName}}</span></strong>
          <strong><span style="font-size: 30px; color: red;">{{item.phoneNumber}}</span></strong>
        </el-header>

        <el-header class="myHeader">
          <strong><span style="font-size: 30px; color: black;">{{item.education}}</span></strong>
          <strong><span style="font-size: 30px; color: red;">{{item.school}}</span></strong>
        </el-header>
        <el-header class="myHeader">
          <strong><span style="font-size: 30px; color: black;">{{item.address}}</span></strong>
          <strong><span style="font-size: 30px; color: red;">{{item.intentionJob}}</span></strong>
        </el-header>

        <div class="text item"><strong><span style="margin-left: 20px">工作地点：{{item.introduce}}</span></strong></div>


      </el-card>


    </el-main>

  </el-container>
</template>

<script>
export default {
  name: "ResumeList",

  data() {
    return {
      input: '',

      email:window.sessionStorage.getItem("email"),

      resumeData:[],
    }
  },

  methods: {

    searchResume(){

      this.$axios.get("Resume/listTargeResume?email="+this.email+"&keyWord="+this.input).then((resp)=>{
        if(resp.data.code === 200){

          this.resumeData = resp.data.data;

        }else {
          this.$message.error("查询失败");
        }

      })


    }



  }




}
</script>

<style scoped>
.myHeader{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.myHeader2{
  display: flex;
  align-items: center;
  justify-content:center;

}

.myDivider{
  margin-top: 0px;
  margin-bottom: 0px;
}


.box-card {
  width: 70%;
  margin-bottom: 20px;

  padding: 20px;

  margin-left: auto;
  margin-right: auto;
}

</style>
