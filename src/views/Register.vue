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
            <span >去登陆</span></div>
    </div>
    </form>
</div>
</template>

<style scoped>
    img{
        width:50px;
        height: 50px;
        vertical-align: middle;
    }
    #app{
        font-size: 15px;
        text-align: center;
        background-color: khaki;
    }
    div>input{
        height: 25px;
        vertical-align: middle;
        margin:0 10px;
        line-height: 10px;
        border-top-width:0px;
        border-left-width:0px;
        border-right-width:0px;
        border-bottom-width: 1px;
        border-color:burlywood;
        background-color: rgba(0, 0, 0, 0);
        outline:none;
    }
    #account>input,#password>input,#nickName>input{
        width:250px;
    }
    #submit{
        border:0px;
        border-radius: 20px;
        width:300px;
        height: 40px;
        background-color: lightsalmon;
        letter-spacing: 10px;
        font-size: 16px;
        outline:none;
        margin:10px 0px 5px 0px;
    }
    #submit:hover{
        background-color: rgb(255, 144, 101);
    }
    #tologin>span{
        text-decoration-line: underline;
    }
    #tologin>span:hover{
        opacity: .5;
    }

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
