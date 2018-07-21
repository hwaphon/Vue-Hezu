/*
* @Author: hwaphon
* @Date:   2018-07-21 08:26:16
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 15:18:26
*/

import FangItem from '@/components/home/fang-item.vue'

export default {
  data () {
    return {
      list: [],
      // 首次进入时加载数据
      initLoading: true
    }
  },

  components: {
    'fang-item': FangItem
  },

  watch: {
  },

  methods: {
    getList (page = 0, pagesize = 0) {
      return this.$http.get('https://easy-mock.com/mock/5b52aae23c4696772e3978fe/list');
    }
  },

  created () {
    this.getList().then((res) => {
      this.list = res.data.data.list
      this.initLoading = false
    })
  }
}
