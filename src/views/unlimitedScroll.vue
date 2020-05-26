<!--
无限滚动 但是加载的方法是自动一次性加载的，不是在滑动到底部时加载的
-->
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
            <li v-infinite-scroll='getRoomList' infinite-scroll-disabled="disable" v-for="item in liverooms" :key="item.id">
              <streamer-item :field="item.field" :title="item.title" :fire="item.fire" :sname="item.sname" :introduce="item.introduce"></streamer-item>
            </li>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
          </ul>

        </div>
    </div>
</template>

<style scoped>
#streamer{
  overflow:auto;
}
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
import { roomList } from '../common/LiveRoom.js'

var item = { field: '领域', title: '超长标题踢踢踢踢踢踢踢踢踢踢踢超长标题', fire: 26000, sname: '主播名', introduce: '主播介绍' }
var streamerlist = []
for (let i = 0; i < 20; i++) {
  streamerlist.push(item)
}

export default {
  name: 'liverooms',
  data () {
    return {
      page: 1,
      pageSize: 20,
      loading: false,
      isMax: false,
      liverooms: streamerlist
    }
  },
  computed: {
    noMore () { return this.isMax },
    disable () {
      return this.loading || this.noMore
    }
  },
  components: {
    'streamer-item': streamer
  },
  methods: {
    getRoomList: function () {
      var params = {
        status: 'off',
        page: this.page,
        pagesize: this.pageSize
      }
      roomList(params, this).then(res => {
        this.loading = true
        if (res.total !== this.pageSize) {
          this.isMax = true
          this.loading = false
        } else {
          this.page += 1
        }
        this.liverooms.pop({})
        for (const room of res.data) {
          var item = { field: '领域', title: room.title, fire: 26000, sname: '主播名', introduce: '主播介绍' }
          this.liverooms.push(item)
        }
      })
    }
  }
}
</script>
