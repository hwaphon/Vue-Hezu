import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home.vue'
import FangDetail from '@/pages/detail/fang-detail.vue'
import Hezu from '@/pages/hezu/hezu.vue'
import Publish from '@/pages/publish/publish.vue'

import ShouCang from '@/pages/shoucang/shoucang.vue'
import User from '@/pages/user/user.vue'
import Login from '@/pages/user/login.vue'
import WoDeHeZu from '@/pages/wodehezu/wodehezu.vue'
import Applicants from '@/pages/wodehezu/list.vue'
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
      path: '/detail/:id',
      name: 'FangDetail',
      component: FangDetail
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shoucang',
      name: 'ShouCang',
      component: ShouCang
    },
    {
      path: '/applylist',
      name: 'Applicants',
      component: Applicants
    },
    {
      path: '/wodehezu',
      name: 'WoDeHeZu',
      component: WoDeHeZu
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
