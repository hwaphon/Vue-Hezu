/*
* @Author: hwaphon
* @Date:   2018-07-21 10:46:03
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 06:24:26
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
    id: Number | String
  },
  methods: {
    onClick () {
      this.$emit(Event.CLICK, this.id)
    },
    onTagClick () {
      this.$emit(Event.TAGCLICK)
    }
  }
}