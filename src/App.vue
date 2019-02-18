<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <v-header></v-header>
      </el-header>
      <el-container>
        <el-aside>
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    'navmenu': NavMenu,
    'v-header': Header
  }
}
</script>

<style>
  .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    /* text-align: center; */
    line-height: 60px;
  }
  
  .el-aside {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 230px !important;
    background-color: #2e3e4e;
    color: #333;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #f7f7f7;
    color: #333;
    text-align: center;
    /* padding: 20px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}

</style>
