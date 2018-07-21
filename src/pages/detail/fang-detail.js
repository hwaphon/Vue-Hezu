/*
* @Author: hwaphon
* @Date:   2018-07-21 16:23:37
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 17:01:05
*/
import API from '@/const/api.js'
import Vue from 'vue'
import { Lazyload } from 'vant'
Vue.use(Lazyload, {})

export default {
  created () {
    let id = this.$route.params.id
    this.getDetail(id).then((res) => {
      this.detail = res.data.data
    })
  },
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    getDetail (id) {
      return this.$http(`${API.DETAIL}id=${id}`)
    }
  }
}
