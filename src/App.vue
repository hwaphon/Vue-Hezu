<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="selected" v-if="show_tabbar">
      <van-tabbar-item v-for="menu in menus" :key="menu.id" :to="menu.path">
        <span>{{ menu.title }}</span>
        <span slot="icon" :class="menu.icon"></span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      selected: 0,
      menus: [
        { id: 0, title: '首页', icon: 'fa fa-home', path: '/' },
        { id: 1, title: '求租', icon: 'fa fa-group', path: 'hezu' },
        { id: 2, title: '发布', icon: 'fa fa-edit', path: 'publish' },
        { id: 3, title: '我的', icon: 'fa fa-user-circle', path: 'user' }
      ]
    }
  },
  computed: {
    ...mapState([
      'show_tabbar'
    ])
  }
}
</script>

<style>
html {
  font-size: 62.5%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fa {
  font-size: 24px;
}

.tabbar-padding {
  padding-bottom: 50px;
}

.van-toast {
  font-size: 1.6rem;
}
</style>
