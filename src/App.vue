<template>
  <div id="app">
    <header>
      <div class="header-nav">
        <ul>
          <li><a>首页</a></li>
          <li><router-link to="/streamers" class="header-nav-chosen">直播</router-link></li>
          <li><a href="/" target="_blank">游戏</a></li>
          <li><a href="/" target="_blank">视频</a></li>
          <li><a href="/" target="_blank">分类</a></li>
          <li><a href="/" target="_blank">评论</a></li>
        </ul>
      </div>
      <div class="header-right">
          <router-link to="/login">登录</router-link>
          <router-link to="/register">注册</router-link>
      </div>
    </header>
    <aside>

    </aside>
    <div class="main-layout">
      <section></section>
      <router-view />
    </div>
  </div>
</template>

<style src='@/resources/css/app.css'>

</style>
