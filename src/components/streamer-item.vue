<template>
<div id="app">
    <img id="anthor" src="../assets/56978985_p0.jpg" />
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
<style scoped>
#app{
  background-color: white;
    margin:0px;
    padding:0px;
    width:320px;
    height: 250px;
    text-align: left;
    border-radius: 10px;
}
#anthor{
    border-radius: 10px;
    width:100%;
    height: 160px;
}

.mess-fir{
    height: 24px;
}

.streamer-title{
    margin:0px;
    padding:0px;
    display: block;
    padding-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 24px;
    font-size: 15px;
}

.streamer-field{
    float: right;
    font-size: 12px;
    color: #888;
    line-height: 24px;
}
.streamer-fire{
    float:right;
    font-size: 12px;
    color: #888;
    line-height: 24px;
}
.streamer-name{
    margin: 0px;
    padding:0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    padding-right: 5px;
    font-size: 13px;
    line-height: 24px;
}
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
