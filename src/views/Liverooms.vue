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
            <li v-for="item in liverooms" :key="item.id">
              <streamer-item :field="item.field" :title="item.title" :fire="item.fire" :sname="item.sname" :introduce="item.introduce"></streamer-item>
            </li>
          </ul>
            <div class="block">
                <el-pagination :page-count="6" :page-size="pageSize" background layout="total,sizes,prev, pager, next, jumper" :total="total"
                 @size-change='changePageSize'
                 @current-change="getRoomList"
                 :page-sizes="[1,2,5,10]"
                 :current-page="currentpage"
                 >
                </el-pagination>
            </div>
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

export default {
  name: 'liverooms',
  data () {
    return {
      pageSize: 1,
      liverooms: [],
      total: 30,
      currentpage: 2
    }
  },
  computed: {
    funTotal () {
      return this.total
    }
  },
  components: {
    'streamer-item': streamer
  },
  methods: {
    changePageSize: function (val) {
      this.pageSize = val
    },
    getRoomList: function (newPage) {
      var params = {
        status: 'off',
        page: newPage,
        pagesize: this.pageSize
      }
      roomList(params, this).then(res => {
        this.total = res.total
        this.liverooms = []
        for (const room of res.data) {
          var item = { field: '领域', title: room.title, fire: 26000, sname: '主播名', introduce: '主播介绍' }
          this.liverooms.push(item)
        }
      })
    }
  }
}
</script>
