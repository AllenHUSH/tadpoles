<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="star-o">动态</van-tabbar-item>
      <van-tabbar-item to="/list" icon="apps-o">物品</van-tabbar-item>
      <van-tabbar-item to="/map" icon="location-o">地图</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
