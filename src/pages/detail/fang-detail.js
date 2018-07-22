/*
* @Author: hwaphon
* @Date:   2018-07-21 16:23:37
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 08:14:16
*/
import API from '@/const/api.js'
import Vue from 'vue'
import { Lazyload } from 'vant'
import TabbarControl from '@/mixins/tabbar_control'
Vue.use(Lazyload, {})

import Back from '@/components/common/back.vue'
import Contact from '@/components/detail/contact.vue'

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
      },
      contact: {
        collect: false,
        apply: false
      }
    }
  },
  methods: {
    getDetail (id) {
      return this.$http(`${API.DETAIL}id=${id}`)
    },
    onContactChange (params) {
      console.log('CONATCT INFO', params)
    }
  },
  components: {
    back: Back,
    contact: Contact
  }
}
