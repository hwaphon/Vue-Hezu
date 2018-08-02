import API from '@/const/api'

export default {
  created () {
    window.addEventListener('scroll', this.scrollHandler, false)
    this.getList().then((res) => {
      this.list = res.data.data.list
      this.initLoading = false
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler, false)
  },
  data () {
    return {
      list: [],
      initLoading: true,
      loading: false
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    getList (page = 0, pagesize = 10) {
      return this.$http.get(API.APPLICANTS)
    },
    getPhone (phone) {
      return 'tel:' + phone
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
    },
  }
}
