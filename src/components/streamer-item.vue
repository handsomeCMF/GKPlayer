<template>
<div id="app">
    <img id="anthor" src="../assets/73075882_p0.png" />
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

            <h2 class="streamer-name">
                <!-- <img src="../assets/user.png"/> -->
                {{sname}}
            </h2>
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
    field: String,
    title: String,
    fire: Number,
    sname: String,
    introduce: String
  }
}
</script>
