/*
* @Author: hwaphon
* @Date:   2018-07-22 07:07:08
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 08:13:47
*/
import Event from '@/const/event'
export default {
  props: {
    collect: {
      type: Boolean,
      default: false
    },
    apply: {
      type: Boolean,
      default: false,
    },
    tel: {
      type: Number | String,
      default: '10086'
    }
  },

  data () {
    return {
      collectCopy: this.collect,
      applyCopy: this.apply
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
      this.$emit(Event.CHANGE, { collect: this.collectCopy })
    },

    onApplyClick () {
      this.applyCopy = !this.applyCopy
      if (this.applyCopy) {
        this.showToast('申请成功，请等待审核')
      } else {
        this.showToast('已取消申请')
      }
      this.$emit(Event.CHANGE, { apply: this.applyCopy })
    },

    showToast(msg) {
      this.$toast({
        message: msg
      })
    }
  }
}
