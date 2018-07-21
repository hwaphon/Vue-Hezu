import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home.vue'
import FangDetail from '@/pages/detail/fang-detail.vue'
import Hezu from '@/pages/hezu/hezu.vue'
import Publish from '@/pages/publish/publish.vue'
import User from '@/pages/user/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hezu',
      name: 'Hezu',
      component: Hezu
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/detail/:id',
      name: 'FangDetail',
      component: FangDetail
    }
  ]
})
