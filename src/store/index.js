/*
* @Author: hwaphon
* @Date:   2018-07-21 19:57:54
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 20:05:47
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  show_tabbar: true
}

const mutations = {
  TOGGLETABBAR (state, show) {
    state.show_tabbar = show
  }
}

const actions = {
  toggleTabbar (context, show) {
    context.commit('TOGGLETABBAR', show)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
