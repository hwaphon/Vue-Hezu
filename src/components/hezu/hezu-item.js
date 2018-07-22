/*
* @Author: hwaphon
* @Date:   2018-07-22 15:45:38
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 16:59:04
*/

export default {
  props: {
    id: {
      type: Number | String,
      require: true
    },
    author: {
      type: Object,
      detault () {
        return {}
      }
    },
    update_time: String,
    date: String,
    budget: Number | String,
    address: String,
    des: String,
    tel: String,
    collect: Boolean
  },
  data () {
    return {
      collectCopy: this.collect
    }
  },
  computed: {
    toTel () {
      return `tel:${this.tel}`
    },
    collectType () {
      if (this.collectCopy) {
        return 'fa-star'
      }
      return 'fa-star-o'
    }
  },
  methods: {
    onCollectClick () {
      this.collectCopy = !this.collectCopy
      if (this.collectCopy) {
        this.showToast('收藏成功')
      } else {
        this.showToast('已取消收藏')
      }
    },
    showToast(msg) {
      this.$toast({
        message: msg
      })
    }
  }
}