<template>
  <div id="app">
    <header>
      <div class=""></div>
      <div id="nav">
        <router-link to="/streamers">streamers</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">login</router-link>
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

<style>
header{
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position:  absolute;
  height: 60px;
}
header>#nav{
  background-color: lightcoral;
  z-index: 600;
  position: fixed;
  width: 100%;
  height: 60px;
}

aside{
  z-index: 600;
  position: fixed;
  background-color: #2d2e36;
  top: 60px;
  left: 0px;
  bottom: 0px;
  width: 100px;
}

.main-layout{
  position: relative;
  z-index: 500;
  padding-left: 100px;
  padding-top: 60px;
  background-color: rgb(242, 244, 245);
  min-width: 1500px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(242, 244, 245);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
