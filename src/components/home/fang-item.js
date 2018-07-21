/*
* @Author: hwaphon
* @Date:   2018-07-21 10:46:03
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 15:08:23
*/
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
    image: String
  }
}