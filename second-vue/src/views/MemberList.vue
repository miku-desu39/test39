<template>
  <div>
    <el-table
        :data="stuData"
        border="true"
        style="width: 100%">
      <el-table-column
          prop="uid"
          label="姓名"
          width="300">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="300">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄">
      </el-table-column>
    </el-table>


  </div>

</template>

<script>
export default {
  name: "menberList",

  data() {
    return {
      courseInfo:JSON.parse(window.sessionStorage.getItem("courseInfo")),

      stuData:[],


    };
  },

  created() {
    this.findAllStudent();
  },

  methods:{
    findAllStudent(){
      this.$axios.get("/Teacher/findAllStudent?courseId="+this.courseInfo.courseId).then((resp)=>{
        this.stuData = resp.data;
      })
    },

  },
}
</script>

<style scoped>

</style>