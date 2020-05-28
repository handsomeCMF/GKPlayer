<template>
  <div id="app">
    <header>
      <div class="header-nav">
        <ul>
          <li v-for="nav in headerNav" :key="nav.index">
            <router-link :class="{'header-nav-chosen':chooseNav===nav.index}" :to="nav.path" :target="nav.target" @click.native="changeNav(nav.index)">{{nav.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="header-right" >
        <div class="header-right-nologin" v-if="!loginMess">
          <a @click="loginVisible=true">登录</a>|
          <a @click="registerVisible=true">注册</a>
        </div>
        <div class="header-right-login" v-else>
          <a >
            <img src="@/assets/73311827_p0.jpg"/>
          </a>
        </div>
      </div>
    </header>
    <aside>

    </aside>
    <div class="main-layout">
      <section></section>
      <router-view ></router-view>
    </div>

    <div>
      <el-dialog title="登录" :visible.sync="loginVisible">
        <logdialog @submit="afterLogin"></logdialog>
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
import { getCookie, cookieKeys } from './common/cookieTools.js'

export default {
  name: 'app',
  components: {
    logdialog: Login,
    regdialog: Register
  },
  methods: {
    changeNav: function (val) {
      this.chooseNav = val
    },
    afterLogin: function (val) {
      this.loginVisible = !val
      this.islogin = true
    }
  },
  data () {
    return {
      chooseNav: 2,
      islogin: getCookie(cookieKeys.userName).length > 0,
      loginVisible: false,
      registerVisible: false,
      headerNav: [{ index: 1, name: '首页', path: '/Liverooms', target: '_self' },
        { index: 2, name: '直播', path: '/streamers', target: '_self' },
        { index: 3, name: '视频', path: '/', target: '_self' },
        { index: 4, name: '游戏', path: '/', target: '_self' },
        { index: 5, name: '分类', path: '/', target: '_self' },
        { index: 6, name: '评论', path: '/', target: '_self' }
      ]
    }
  },
  computed: {
    loginMess () {
      return this.islogin
    }
  }
}
</script>
