/*
* @Author: hwaphon
* @Date:   2018-07-21 08:26:16
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-23 20:54:23
*/

import FangItem from '@/components/home/fang-item.vue'
import API from '@/const/api.js'
import { mapActions } from 'vuex'

import Menu from '@/components/common/menu.vue'
import MenuConfig from '@/const/menu-config.js'
import Sorting from '@/components/common/sort.vue'
import TabbarControl from '@/mixins/tabbar_show'

import { Toast } from 'vant'
export default {
  mixins: [TabbarControl],
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
      menus: MenuConfig.menus,
      // 0 默认排序，1 升序 2 降序
      order: 0,
      selectMenu: [-1, -1, -1, -1],
      params: ''
    }
  },

  components: {
    'fang-item': FangItem,
    'fang-menu': Menu,
    'fang-sort': Sorting
  },

  methods: {
    getList (page = 0) {
      let pagesize = this.pagesize
      this.page = page + 1
      let params = this.params
      if (params === '') {
        return this.$http.get(`${API.LIST}page=${page}&pagesize=${pagesize}&order=${this.order}`)
      }
      return this.$http.get(`${API.LIST}page=${page}&pagesize=${pagesize}${params}&order=${this.order}`)
    },
    onReachBottom () {
      this.loading = true

      this.getList(this.page).then((res) => {
        this.list = this.list.concat(res.data.data.list)
        this.loading = false
      })
    },
    onFangClick (id) {
      this.routerToFangDetail(id)
    },
    routerToFangDetail (id) {
      this.$router.push(`/detail/${id}`)
    },
    onSearch () {
      let value = this.search_value
      if (value === '') {
        this.$toast({
          message: '请输入搜索关键字'
        })
        return
      }
      this.searched = true
      this.setParams()
      this.initLoading = true
      this.getList().then((res) => {
        this.list = res.data.data.list
        this.initLoading = false
      })
    },
    onMenuSelect (params) {
      let index = params[0]
      let value = params[1]
      this.selectMenu[index] = value
      this.setParams()

      this.initLoading = true
      this.getList().then((res) => {
        this.list = res.data.data.list
        this.initLoading = false
      })
    },
    setParams () {
      let menus = this.selectMenu
      let params = ''
      if (this.search_value !== '') {
        params = '&text=' + this.search_value
      }
      let length = menus.length
      let val = ['regin', 'price', 'room', 'area']

      for (let i = 0; i < length; i++) {
        if (menus[i] !== -1) {
          params += '&' + val[i] + '=' + menus[i]
        }
      }
      this.params = params
    },
    clearSearchState () {
      if (!this.searched) {
        return
      }
      this.searched = !this.searched
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
    },
    sortClick () {
      let now = this.order
      now = now + 1
      if (now > 2) {
        now = 0
      }

      this.order = now

      let msg = ''
      if (now === 0) {
        msg = '当前数据为默认排序'
      } else if (now === 1) {
        msg = '当前数据按照时间升序排序'
      } else {
        msg = '当前数据按照时间降序排序'
      }

      this.initLoading = true
      this.getList().then((res) => {
        this.list = res.data.data.list
        this.initLoading = false
        this.$toast({
          message: msg
        })
      })
    }
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
