// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vant from 'vant'
import './assets/vant-css/theme-base.css'
import './assets/vant-css/pull-refresh.css'
import './assets/vant-css/search.css'
import './assets/vant-css/tabbar.css'
import './assets/vant-css/loading.css'
import './assets/vant-css/toast.css'
import './assets/vant-css/field.css'
import './assets/vant-css/swipe.css'


import 'font-awesome/css/font-awesome.css'
import _ from 'underscore'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.util = _

Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
