/*
* @Author: hwaphon
* @Date:   2018-07-21 08:26:16
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 16:18:08
*/

import FangItem from '@/components/home/fang-item.vue'
import API from '@/const/api.js'

export default {
  data () {
    return {
      list: [],
      // 首次进入时加载数据
      initLoading: true,
      // 上拉刷新
      loading: false,
      pagesize: 10,
      page: 0
    }
  },

  components: {
    'fang-item': FangItem
  },

  watch: {
  },

  methods: {
    getList (page = 0) {
      let pagesize = this.pagesize
      this.page = page + 1
      return this.$http.get(`${API.LIST}page=${page}&pagesize=${pagesize}`)
    },
    onReachBottom () {
      this.loading = true

      this.getList(this.page).then((res) => {
        this.list = this.list.concat(res.data.data.list)
        this.loading = false
      })
    }
  },

  created () {
    this.getList().then((res) => {
      this.list = res.data.data.list
      this.initLoading = false
    })

    window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
                 //滚动条到底部的条件
      if(scrollTop + windowHeight == scrollHeight) {
        if (!this.loading) {
          console.log('bottom');
          this.onReachBottom()
        }
      }   
   }
  }
}
