/*
* @Author: hwaphon
* @Date:   2018-07-22 09:21:07
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 11:20:32
*/
export default {
  data () {
    return {
      menus: [
        { 
          title: '区域', 
          list: [
            "浦东新区", "闵行区", "宝山区", "徐汇区", "松江区",
            "嘉定区", "静安区", "普陀区", "杨浦区", "虹口区",
            "长宁区", "黄浦区", "青浦区", "金山区", "崇明区",
            "奉贤区"
          ],
          selected: -1
        },
        { 
          title: '价格',
          selected: -1
        },
        { 
          title: '户型',
          selected: -1
        },
        { 
          title: '面积',
          selected: -1
        }
      ],
      clickIndex: -1,
      menuContent: [],

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