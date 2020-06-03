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
    },
    lanchFullScreenAction: function (doc) {
      if (doc.requestFullScreen) {
        doc.requestFullScreen()
      } else if (doc.mozRequestFullScreen) { // 兼容moz
        doc.mozRequestFullScreen()
      } else if (doc.webkitRequestFullScreen) { // 兼容webkit
        doc.webkitRequestFullScreen()
      }
    },
    exitFullScreenAction: function () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) { // 兼容moz
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) { // 兼容webkit
        document.webkitExitFullscreen()
      }
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
          var action = event.data.params.action
          if (action === 'enter') {
            that.lanchFullScreenAction(that.$refs.iframe)
          } else if (action === 'exit') {
            that.exitFullScreenAction()
          }
          break
        case 'live-room-state':

          break
        case 'live-room-num':
          that.roomNum = event.data.params.num
          break
        case 'live-room-message':
          var s = Symbol('id')
          var mess = event.data.params.fromNick + ' : ' + event.data.params.message
          that.message.push({ id: s, mess: mess })
          break
      }
    })
  },

  destroyed () {
    window.removeEventListener('message', this.handleMessage)
  }
}
