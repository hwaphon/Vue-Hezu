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
      showLogin: true,
      sexList: ['男', '女'],
      sexResult: '男',
      rname: '',
      rpassword: '',
      rtel: '',
      lname: '',
      lpassword: ''
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
      console.log(this.lname, this.lpassword)
    },
    onRegisterClick () {
      this.showLogin = false
    },
    onLoginClick () {
      this.showLogin = true
    },
    register () {
      console.log(this.sexResult, this.rtel, this.rname, this.rpassword)
    }
  }
}