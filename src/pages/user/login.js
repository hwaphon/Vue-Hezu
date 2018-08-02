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
      if (!this.lname || !this.lpassword) {
        this.$toast({
          message: '有必填信息未填写'
        })
        return
      }
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
      if (!this.rtel || !this.rname || !this.rpassword) {
        this.$toast({
          message: '有必填信息未填写'
        })
        return
      }

      if (this.checkPhone()) {
        console.log(this.sexResult, this.rtel, this.rname, this.rpassword)
        Toast.loading({
          mask: true,
          message: '注册中...',
          duration: 0
        });
      }
    },
    checkPhone () {
      if (!(/^1[34578]\d{9}$/.test(this.rtel))) { 
          this.$toast({
            message: '手机号格式不合法',
            duration: 1500
          })  
          return false
      }
      return true
    }
  }
}