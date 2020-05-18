<template>
    <div>
        <div id="titleBar">

        </div>
        <div id="advertisement">

        </div>
        <div id="typeBar">

        </div>
        <div id="streamer">
          <ul>
            <li v-for="item in streamers" :key="item.id">
              <streamer-item :field="item.field" :title="item.title" :fire="item.fire" :sname="item.sname" :introduce="item.introduce"></streamer-item>
            </li>
          </ul>

        </div>
    </div>
</template>

<style scoped>
#streamer>ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
#streamer>ul>li:hover{
  transform: scale(1.1,1.1);
}
#streamer>ul>li{
  transition: .3s ease-in-out;
  padding:0px 14px;
  margin-bottom: 20px;
}

</style>

<script>
import streamer from '../components/streamer-item'
var item = { field: '领域', title: '超长标题踢踢踢踢踢踢踢踢踢踢踢超长标题', fire: 26000, sname: '主播名', introduce: '主播介绍' }
var streamerlist = []
for (let i = 0; i < 12; i++) {
  streamerlist.push(item)
}
export default {
  name: 'streamers',
  data () {
    return {
      streamers: streamerlist
    }
  },
  components: {
    'streamer-item': streamer
  }
}
</script>
