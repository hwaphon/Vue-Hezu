/*
* @Author: hwaphon
* @Date:   2018-07-21 16:23:37
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 20:52:11
*/
import API from '@/const/api.js'
import Vue from 'vue'
import { Lazyload } from 'vant'
import TabbarControl from '@/mixins/tabbar_control'
Vue.use(Lazyload, {})

export default {
  mixins: [TabbarControl],
  created () {
    let id = this.$route.params.id
    this.getDetail(id).then((res) => {
      this.detail = res.data.data
    })
  },
  data () {
    return {
      detail: {
        tags: [],
        house_type: {}
      }
    }
  },
  methods: {
    getDetail (id) {
      return this.$http(`${API.DETAIL}id=${id}`)
    }
  }
}
