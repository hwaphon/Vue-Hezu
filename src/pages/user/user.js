import TabbarControl from '@/mixins/tabbar_show'
import UserControl from '@/utils/user-control.js'
export default {
  mixins: [TabbarControl],
  created () {
  },
  data () {
    return {
      avatar: 'http://ojihaa8pb.bkt.clouddn.com/user.png'
    }
  },
  methods: {
    onLinkTouch (path) {
      this.$router.push(path)
    },
    onUserClick () {
      let isLogin = UserControl.isLogin()

      if (!isLogin) {
        this.$router.push('/login')
        return
      }
    }
  },
  components: {
  }
}
