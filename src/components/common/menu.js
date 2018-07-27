/*
* @Author: hwaphon
* @Date:   2018-07-22 09:21:07
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 17:13:51
*/
import Event from '@/const/event'

export default {
  props: {
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      clickIndex: -1,
      menuContent: []
    }
  },
  methods: {
    onMenuClick (index) {
      if (this.clickIndex == index) {
        this.clickIndex = -1
        return
      }
      this.clickIndex = index
      this.menuContent = this.menus[index].list
    },
    selectIndex (index) {
      this.menus[this.clickIndex].selected = index
      this.$emit(Event.MENUSELECT, [this.clickIndex, index])
      this.closeMenu()
    },
    closeMenu () {
      this.clickIndex = -1
    }
  },
  computed: {
    selected (index) {
      return this.menus[index].selected
    }
  }
}