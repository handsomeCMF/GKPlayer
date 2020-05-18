<template>
    <div id="app">
        <img :src="imgpath" v-if="imgpath" />
        <label>{{title}}</label>
        <input name="test" placeholder="请输入title" />
    </div>
</template>
<style scoped>
img{
width: 30px;
height: 30px;
vertical-align: middle;
margin:0px 10px;
}
#app{
  width:300px;
  height: 50px;
  text-align: center;
}
#app>input{
  margin:0px 10px;
  height: 30px;
}
</style>

<script>
export default {
  name: 'ImgImput',
  props: {
    title: String,
    imgpath: String
  }
}
</script>
