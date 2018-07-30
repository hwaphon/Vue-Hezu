import FangItem from '@/components/home/fang-item.vue'
import API from '@/const/api.js'
import {
  mapActions
} from 'vuex'

import Menu from '@/components/common/menu.vue'
import MenuConfig from '@/const/menu-config.js'

import {
  Toast
} from 'vant'
export default {
  data() {
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
      menus: MenuConfig.menus
    }
  },

  components: {
    'fang-item': FangItem,
    'fang-menu': Menu
  },

  methods: {
    back() {
      this.$router.back()
    },
    getList(page = 0) {
      let pagesize = this.pagesize
      this.page = page + 1
      return this.$http.get(`${API.LIST}page=${page}&pagesize=${pagesize}`, {
        timeout: 3000
      })
    },
    onReachBottom() {
      this.loading = true

      this.getList(this.page).then((res) => {
        this.list = this.list.concat(res.data.data.list)
        this.loading = false
      })
    },
    onFangClick(id) {
      this.routerToFangDetail(id)
    },
    routerToFangDetail(id) {
      this.$router.push(`/detail/${id}`)
    },
    onSearch() {
      let value = this.search_value
      if (value === '') {
        this.$toast({
          message: '请输入搜索关键字'
        })
        return
      }
      this.searched = true
    },
    clearSearchState() {
      if (!this.searched) {
        return
      }
      this.searched = !this.searched
    },
    scrollHandler() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        if (!this.initLoading && !this.loading) {
          this.onReachBottom()
        }
      }
    }
  },
  created() {
    this.getList().then((res) => {
      this.list = this.list.concat(res.data.data.list)
      this.initLoading = false
    })
    window.addEventListener('scroll', this.scrollHandler, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler, false)
  }
}