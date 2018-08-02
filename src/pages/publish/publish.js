import Vue from 'vue'
import MenuConfig from '@/const/menu-config.js'
import TabbarControl from '@/mixins/tabbar_show'
import {
  Toast
} from 'vant';
export default {
  mixins: [TabbarControl],
  data() {
    return {
      showAreaSelect: false,
      actions: [],
      menus: MenuConfig.publish_menus,
      menusIndex: 0,
      title: '',
      currentDate: '',
      showDate: false,
      formateDate: '',
      tags: '',
      area: '',
      price: '',
      des: '',
      address: ''
    }
  },
  methods: {
    showArea(index) {
      this.showAreaSelect = true
      this.actions = this.menus[index].list.map(item => ({
        name: item,
        callback: this.selectedCallback
      }))
      this.menusIndex = index
    },
    selectedCallback(e) {
      this.menus[this.menusIndex].selected = this.actions.indexOf(e)
      this.showAreaSelect = false
    },
    submit() {
      // api
      let result = this.checkForm()
      if (!result) {
        this.$toast({
          message: '有必填信息未填写',
          duration: 1500
        })
      }
    },
    confirmDate (date) {
      let d = new Date(date)

      let year = d.getFullYear()
      let month = d.getMonth() + 1
      month = month > 9 ? month : '0' + month
      let day = d.getDate()
      day = day > 9 ? day : '0' + day

      this.formateDate = `${year}-${month}-${day}`
      this.showDate = false
    },
    checkForm () {
      let menus = this.menus
      let selected = []
      let result = false
      menus.forEach((item) => {
        result = item.selected === -1 ? false : true
        selected.push(item.selected)
      })
      if (!result) {
        return result
      }
      result = this.title && this.currentDate &&
               this.tags && this.area && this.price &&
               this.des

      return result
    }
  },
  components: {}
}