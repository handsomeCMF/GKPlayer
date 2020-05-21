<template>
  <div id="app">
    <header>
      <div class="header-nav">
        <ul>
          <li><a>首页</a></li>
          <li><router-link to="/streamers" class="header-nav-chosen">直播</router-link></li>
          <li><a href="/" target="_blank">游戏</a></li>
          <li><a href="/" target="_blank">视频</a></li>
          <li><a href="/" target="_blank">分类</a></li>
          <li><a href="/" target="_blank">评论</a></li>
        </ul>
      </div>
      <div class="header-right" >
        <div class="header-right-nologin" v-if="!islogin">
          <a @click="loginVisible=true">登录</a>|
          <a @click="registerVisible=true">注册</a>
        </div>
        <div class="header-right-login" v-else>
          <a href="/" target="_blank">
            <img src="@/assets/73311827_p0.jpg"/>
          </a>
        </div>
      </div>
    </header>
    <aside>

    </aside>
    <div class="main-layout">
      <section></section>
      <router-view></router-view>
    </div>

    <div>
      <el-dialog title="登录" :visible.sync="loginVisible">
        <logdialog @submit="data=>loginVisible=!data"></logdialog>
      </el-dialog>

      <el-dialog title="注册" :visible.sync="registerVisible">
        <regdialog></regdialog>
      </el-dialog>
    </div>
  </div>
</template>

<style src='@/resources/css/app.css'>

</style>

<script>
import Login from '../src/views/Login.vue'
import Register from '../src/views/Register.vue'
import { getCookie } from './common/cookieTools.js'

var tooken = getCookie('usertooken')
export default {
  name: 'app',
  components: {
    logdialog: Login,
    regdialog: Register
  },
  data () {
    return {
      islogin: tooken.length > 0,
      loginVisible: false,
      registerVisible: false
    }
  }
}
</script>
