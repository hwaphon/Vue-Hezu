/*
* @Author: hwaphon
* @Date:   2018-07-21 10:31:01
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 17:15:58
*/

import Menu from '@/components/common/menu.vue'
import HezuItem from '@/components/hezu/hezu-item.vue'
import MenuConfig from '@/const/menu-config.js'

import API from '@/const/api'

export default {
  data () {
    return {
      list: [],
      // 首次进入时加载数据
      initLoading: true,
      // 上拉刷新
      loading: false,
      pagesize: 10,
      page: 0,
      search_value: '',
      searched: false,
      menus: MenuConfig.hezu_menus
    }
  },
  methods: {
    onSearch () {
      let value = this.search_value
      if (value === '') {
        this.$toast({
          message: '请输入搜索关键字'
        })
        return
      }
      this.searched = true
    },
    clearSearchState () {
      if (!this.searched) {
        return
      }
      this.searched = !this.searched
    },
    getList (page = 0) {
      let pagesize = this.pagesize
      this.page = page + 1
      return this.$http.get(`${API.HEZU}page=${page}&pagesize=${pagesize}`, { timeout: 3000 })
    },
    onReachBottom () {
      this.loading = true

      this.getList(this.page).then((res) => {
        this.list = this.list.concat(res.data.data.list)
        this.loading = false
      })
    },
    scrollHandler () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
                 //滚动条到底部的条件
      if(scrollTop + windowHeight == scrollHeight) {
        if (!this.initLoading && !this.loading) {
          this.onReachBottom()
        }
      }
    }
  },
  components: {
    'fang-menu': Menu,
    'hezu-item': HezuItem
  },
  created () {
    this.getList().then((res) => {
      this.list = this.list.concat(res.data.data.list)
      this.initLoading = false
    })
    window.addEventListener('scroll', this.scrollHandler, false)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler, false)
  }
}