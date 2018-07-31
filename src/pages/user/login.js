import TabbarControl from '@/mixins/tabbar_hidden'
import Back from '@/components/common/back.vue'
import { Toast } from 'vant'


export default {
  mixins: [TabbarControl],
  created () {
    console.log('CREATED')
  },
  data () {
    return {
      logining: false,
      showLogin: true
    }
  },
  components: {
    'back': Back
  },
  methods: {
    login () {
      Toast.loading({
        mask: true,
        message: '登录中...',
        duration: 0
      });

      setTimeout(() => {
        Toast.clear()
      }, 5000)
    },
    onRegisterClick () {
      this.showLogin = false
    },
    onLoginClick () {
      this.showLogin = true
    }
  }
}