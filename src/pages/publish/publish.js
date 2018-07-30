import Vue from 'vue'
import MenuConfig from '@/const/menu-config.js'
import {
  Toast
} from 'vant';
export default {
  created() {},
  data() {
    return {
      showAreaSelect: false,
      actions: [],
      menus: MenuConfig.publish_menus,
      menusIndex: 0,
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
      console.log(this.menus)
      this.showAreaSelect = false
    },
    submit() {
      // api
      Toast.success('提交成功');
    }
  },
  components: {}
}