/*
* @Author: hwaphon
* @Date:   2018-07-23 20:30:56
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-23 20:49:17
*/
import Event from '@/const/event'

export default {
  methods: {
    onClick () {
      this.$emit(Event.CLICK)
    }
  }
}
