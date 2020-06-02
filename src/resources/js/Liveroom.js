import { getOwnerRoom } from '@/common/LiveRoom.js'
export default {
  name: 'liveroom',
  data () {
    return {
      isAttend: false,
      avatorImg: this.$route.params.avatorImg,
      userId: this.$route.params.id,
      roomNum: 1,
      message: [],
      liveUrl: ''
    }
  },
  methods: {
    attendAvator: function () {
      this.isAttend = !this.isAttend
    },
    postMessage: function () {
      // 传递数据给iframe
      this.iframe = this.$refs.iframe
      console.log(this.iframe)
      var data = '123'
      this.iframe.contentWindow.postMessage(data, '*')
    },
    getLiveUrl: function () {
      getOwnerRoom({ id: this.userId }, this).then(res => {
        console.log(res.data.url)
        this.liveUrl = res.data.url
      })
    }
  },
  created () {
    this.getLiveUrl()
  },
  mounted () {
    var that = this // listener里的指向问题
    // 接受iframe传过来的数据
    window.addEventListener('message', function (event) {
      switch (event.data.event) {
        case 'video-fullscreen':

          break
        case 'live-room-state':

          break
        case 'live-room-num':
          that.roomNum = event.data.params.num
          break
        case 'live-room-message':
          var mess = event.data.params.fromNick + ' : ' + event.data.params.message
          that.message.push(mess)
          break
      }
    })
  },

  destroyed () {
    window.removeEventListener('message', this.handleMessage)
  }
}
