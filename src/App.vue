<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="selected">
      <van-tabbar-item v-for="menu in menus" :key="menu.id">
        <span>{{ menu.title }}</span>
        <span slot="icon" :class="menu.icon"></span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 0,
      menus: [
        { id: 0, title: '首页', icon: 'fa fa-home' },
        { id: 1, title: '合租', icon: 'fa fa-group' },
        { id: 2, title: '发布', icon: 'fa fa-edit' },
        { id: 3, title: '我的', icon: 'fa fa-user-circle' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fa {
  font-size: 24px;
}
</style>
