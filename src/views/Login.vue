<template>
<div id="app">
    <form @submit.prevent="login" autocomplete="off">
     <div id="account">
        <img src="@/assets/56978985_p0.jpg" />
        <input id="account" name="account" maxlength="12" type="text" placeholder="账号" v-model="account"  />
    </div>
    <div id="password">
        <img src="@/assets/58538666_p0.jpg" />
        <input name="psd" maxlength="12" type="password" placeholder="密码" v-model="password"/>
    </div>
    <div>
        <div>
            <input id="submit" type="submit" value="登录" /></div>
        <div id="toregister">
            <span >去注册</span></div>
    </div>
    </form>
</div>
</template>

<style src='../resources/css/login.css' scoped>
</style>
<script>
import { login as loginuser } from '../common/User.js'
import { setCookie } from '@/common/cookieTools.js'
export default {
  name: 'login',
  data () {
    return {
      account: '', // localStorage.getItem('player-account'),
      password: '' // localStorage.getItem('player-password')
    }
  },
  methods: {
    login: function () {
      var logMes = {
        account: this.account,
        password: this.password
      }
      loginuser(logMes).then(mes => {
        setCookie('usertooken', mes.token)
        this.$emit('submit', true)
      })
    }
  }
}

</script>
