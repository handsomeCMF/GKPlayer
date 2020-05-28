import streamer from '@/components/streamer-item'
import { roomList } from '@/common/LiveRoom.js'

export default {
  name: 'liverooms',
  data () {
    return {
      pageSize: 1,
      liverooms: [],
      total: 30,
      currentpage: 1
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
          var coverurl = room.coverImage ? room.coverImage.url : null
          var item = { userId: room.userId, field: '领域', title: room.title, fire: 26000, sname: '主播名', introduce: '主播介绍', imagepath: coverurl, avatorImg: room.userinfoId.avatar.url }
          this.liverooms.push(item)
        }
      })
    }
  },
  beforeMount: function () { // 使用生命周期函数
    this.getRoomList(1)
  }
}
