/*
* @Author: hwaphon
* @Date:   2018-07-21 16:23:37
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 08:14:16
*/
import API from '@/const/api.js'
import Vue from 'vue'
import { Lazyload } from 'vant'
import TabbarControl from '@/mixins/tabbar_hidden'
import Back from '@/components/common/back.vue'
import Contact from '@/components/detail/contact.vue'
import UserControl from '@/utils/user-control'

Vue.use(Lazyload, {})
export default {
  mixins: [TabbarControl],
  created () {
    let id = this.$route.params.id
    this.getDetail(id).then((res) => {
      this.detail = res.data.data
    })
    console.log('ONLOAD')
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
      if (!UserControl.isLogin()) {
        this.$router.push('/login')
        this.$toast({
          message: '请先登录',
          duration: 1500
        })
        return
      }

      if (params.hasOwnProperty('apply')) {
        let apply = params['apply']
        console.log(apply)
      }

      if (params.hasOwnProperty('collect')) {
        let collect = params['collect']
        console.log(collect)
      }
    }
  },
  components: {
    back: Back,
    contact: Contact
  }
}
