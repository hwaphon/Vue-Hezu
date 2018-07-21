/*
* @Author: hwaphon
* @Date:   2018-07-21 10:46:03
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 16:35:01
*/

import Event from '@/const/event.js'

export default {
  props: {
    title: String,
    house_type: {
      type: Object,
      default () {
        return {}
      }
    },
    area: Number,
    regin: String,
    tags: {
      type: Array,
      default () {
        return []
      }
    },
    address: String,
    price: Number,
    image: String,
    id: Number
  },
  methods: {
    onClick () {
      this.$emit(Event.CLICK, this.id)
    }
  }
}