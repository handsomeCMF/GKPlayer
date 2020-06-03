<template>
    <div class="personlive">
        <div class="live">
            <div class="live-title">
                <div class="title-avator">
                    <img id="avator" shape="square" :src="(avatorImg===undefined || avatorImg === null)? '/img/73075882_p0.02bb4f94.png': avatorImg"/>
                </div>
                <div class="title-desc">
                    <div class="title-row">
                        <div class="title-col col-right ">
                            <div class="avator-attend">
                                <span>{{roomNum}}</span>
                                <div class="attend" v-if="isAttend" @click="attendAvator">
                                    <i class="el-icon-star-off "></i>
                                    <span>关注</span>
                                </div>
                                <div class="attend" v-else @click="attendAvator">
                                    <i class="el-icon-star-on " ></i>
                                    <span>已关注</span>
                                </div>
                            </div>
                        </div>
                        <div class="title-col">
                            <h3>霸哥：我是唯一的神</h3>
                        </div>
                    </div>
                    <div class="title-row">
                        <div class="title-col col-right">
                            <span>{{}}</span>
                        </div>
                        <div class="title-col avator-intro">
                            <span>最强王者</span>
                            <span>上单教父</span>
                            <span>gk认证的国服第一狗熊</span>
                            <span>霸王计划核心人物</span>
                        </div>
                        </div>
                    <div class="title-row">
                        <div class="title-col col-right avator-intro">
                            <span>分享</span>
                            <span>收藏</span>
                        </div>
                        <div class="title-col avator-intro">
                            <span>超级粉丝团 </span>
                        </div>
                        </div>
                </div>
            </div>
            <div class="live-video">
                <!-- <iframe class="video-iframe" ref="iframe" :src="liveUrl" @dblclick="FullScreenAction"></iframe> -->
                <iframe class="video-iframe" ref="iframe" src="/helloWorld" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe>
            </div>
        </div>
        <div class="contact">
            <div class="contact-message">
                <ul>
                    <li  v-for="item in message" :key="item.id">{{item.mess}}</li>
                </ul>
            </div>
            <div class="contact-talk">
                <textarea cols="35" rows="5" ></textarea>
                <button @click="postMessage">发送</button>
            </div>
        </div>
    </div>

</template>

<style src='@/resources/css/liveroom.css'></style>
<script type="text/javascript" src='@/resources/js/Liveroom.js'>
</script>
