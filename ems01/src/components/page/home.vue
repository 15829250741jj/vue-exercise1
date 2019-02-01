<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <Headers/>
    </el-header>
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">
        <Sidebar/>
      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Headers from "@/layout/headers.vue";
import Sidebar from "@/layout/sidebar.vue";
export default {
  components: {
    Headers,
    Sidebar
  }
};
</script>
<style>
.el-container {
  height: 100%;
}
.el-header {
  background: #b3c0d1;
  color: #333;
  line-height: 60px;
  padding: 0;
}
el-aside {
  background: #d3dce6;
  color: #333;
  height: 100%;
}
.el-main {
  background: #e9eef3;
  color: #333;
  height: 100%;
}
/* 头部样式 */
</style>


