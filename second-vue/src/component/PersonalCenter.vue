<template>
  <el-main>

    <h1>个人资料设置</h1>

    <el-tabs tab-position="left" style="height: 500px" type="border-card">
      <el-tab-pane label="用户管理">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-user-solid"></i> 个人信息</span
        >
        用户管理</el-tab-pane
      >
      <el-tab-pane label="配置管理">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-s-order"></i> 我的简历</span
        >
        配置管理</el-tab-pane
      >
      <el-tab-pane label="角色管理">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-s-promotion"></i> 投递记录</span
        >
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">
        <span slot="label" style="font-size: 15px"
          ><i class="el-icon-star-on"></i> 我的收藏</span
        >
        定时任务补偿</el-tab-pane
      >
    </el-tabs>
  </el-main>
</template>

<style scoped>
</style>