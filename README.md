# player

效果图：
![image](https://github.com/handsomeCMF/GKPlayer/blob/master/src/assets/r1.png)
![image](https://github.com/handsomeCMF/GKPlayer/blob/master/src/assets/r2.png)

# 技术实现
 vue
    vuex 状态管理框架
    Element-UI UI框框
    Ajax 请求后端数据
    postMessage - onMessage 跟直播界面通讯
        直播状态显示
        弹幕交互
        用户身份校验
# WebAPI
    requestFullscreen 手动全屏
    lockOrientation 适配移动端的横屏看直播
# 直播页面
    webRTC 直播流传输
    socket.io 信令服务器
    交换 webRTC 的 sdp 与 candidate
    直播间状态交互
    收/发弹幕消息
    web-API 的requestUserMedia 获取用户界面媒体流 (暂时只兼容Chrome)
# TODO
    vue-admin管理后台 用于对主播/直播间的管理
