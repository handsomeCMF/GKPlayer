<template>
<div id="app">
    <img id="anthor" :src=" (imgpath===undefined || imgpath===null) ?'/img/73075882_p0.02bb4f94.png':imgpath" />
    <div id="message">
        <div class="mess-fir">
            <span class="streamer-field">{{field}}</span>
            <h3 class="streamer-title">{{title}}</h3>
        </div>
        <div class="mess-sec">
            <span class="streamer-fire">
                <!-- <img src="../assets/like.png"/> -->
                {{fire}}
            </span>

            <div class="mess-avator">
              <img :src="(avatarImg === undefined || avatarImg===null) ?'/img/user.eaefaedb.png':avatarImg"/>
              <h2 class="streamer-name">
                  {{sname}}
              </h2>
            </div>
        </div>
            <span>{{introduce}}</span>
    </div>
</div>
</template>
<style src='../resources/css/streamer-item.css' scoped>
</style>
<script>
export default {
  name: 'streamer',
  data () {
    return {

    }
  },
  props: {
    avatarImg: String,
    imgpath: String,
    field: String,
    title: String,
    fire: Number,
    sname: String,
    introduce: String
  }
}
</script>
