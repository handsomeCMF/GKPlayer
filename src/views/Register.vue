<template>
<div id="app">
    <form method="post" @submit.prevent="register" autocomplete="off">
     <div id="account">
        <img src="@/assets/56978985_p0.jpg" />
        <input id="account" name="account" maxlength="12" type="text" placeholder="账号" v-model="account" />
    </div>
    <div id="password">
        <img src="@/assets/58538666_p0.jpg" />
        <input name="psd" maxlength="12" type="password" placeholder="密码" v-model="password"/>
    </div>
    <div id="nickName">
        <img src="@/assets/73075882_p0.png" />
        <input name="nickname" maxlength="8" type="text" placeholder="昵称" v-model="nickname" />
    </div>
    <div id="gender">
        <img src="@/assets/73311827_p0.jpg" />
        <input type="radio" name="gender" v-model="gender" value="1" checked/>男
        <input type="radio" name="gender" v-model="gender" value="0"/>女
    </div>
    <div>
        <div>
            <input id="submit" type="submit" value="立即注册" /></div>
        <div id="tologin">
            <!-- <span >去登陆</span> -->
            </div>
    </div>
    </form>
</div>
</template>

<style src='../resources/css/register.css' scoped>
</style>
<script>
import { register as registerUser } from '../common/User.js'
export default {
  name: 'register',
  data () {
    return {
      gender: 0,
      account: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    register: function () {
      var data = {
        account: this.account,
        password: this.password,
        nickname: this.nickname,
        gender: Number(this.gender)
      }
      registerUser(data).then(mes => { alert(JSON.stringify(mes)) })
    }
  }
}

</script>
