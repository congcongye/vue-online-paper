<template>
  <div>
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">问卷管理</el-menu-item>
      <el-menu-item index="2">我的问卷</el-menu-item>
    </el-menu>
  </div>
</template>

<style>
@import "../css/main.css";
</style>
