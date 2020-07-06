# player

效果图：
![image](https://github.com/handsomeCMF/GKPlayer/blob/master/src/assets/r1.png)
![image](https://github.com/handsomeCMF/GKPlayer/blob/master/src/assets/r2.png)

<h2>
    <span class="header-link octicon octicon-link"></span>技术实现
</h2>
<ul class=" list-paddingleft-2">
    <li>
        <p>
            vue
        </p>
    </li>
    <ul class=" list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                vuex 状态管理框架
            </p>
        </li>
        <li>
            <p>
                Element-UI UI框框
            </p>
        </li>
        <li>
            <p>
                Ajax 请求后端数据
            </p>
        </li>
        <li>
            <p>
                postMessage - onMessage 跟直播界面通讯
            </p>
        </li>
        <ul class="custom_dash list-paddingleft-1">
            <li class="list-dash list-dash-paddingleft">
                <p>
                    直播状态显示
                </p>
            </li>
            <li class="list-dash list-dash-paddingleft">
                <p>
                    弹幕交互
                </p>
            </li>
            <li class="list-dash list-dash-paddingleft">
                <p>
                    用户身份校验
                </p>
            </li>
        </ul>
        <li>
            <p>
                WebAPI&nbsp;&nbsp;
            </p>
        </li>
        <ul class="custom_dash list-paddingleft-1">
            <li class="list-dash list-dash-paddingleft">
                <p>
                    requestFullscreen 手动全屏
                </p>
            </li>
            <li class="list-dash list-dash-paddingleft">
                <p>
                    lockOrientation 适配移动端的横屏看直播
                </p>
            </li>
        </ul>
    </ul>
    <li>
        <p>
            直播页面
        </p>
    </li>
    <ul class=" list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                webRTC 直播流传输
            </p>
        </li>
        <li>
            <p>
                socket.io 信令服务器
            </p>
        </li>
        <ul class="custom_dash list-paddingleft-1">
            <li class="list-dash list-dash-paddingleft">
                <p>
                    交换 webRTC 的 sdp 与 candidate
                </p>
            </li>
            <li class="list-dash list-dash-paddingleft">
                <p>
                    直播间状态交互
                </p>
            </li>
            <li class="list-dash list-dash-paddingleft">
                <p>
                    收/发弹幕消息
                </p>
            </li>
        </ul>
        <li>
            <p>
                web-API 的requestUserMedia 获取用户界面媒体流 (暂时只兼容Chrome)
            </p>
        </li>
    </ul>
</ul>
<h2>
    TODO
</h2>
<ul class=" list-paddingleft-2">
    <li>
        <p>
            vue-admin管理后台 用于对主播/直播间的管理
        </p>
    </li>
</ul>
