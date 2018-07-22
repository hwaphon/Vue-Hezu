/*
* @Author: hwaphon
* @Date:   2018-07-22 15:45:38
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-22 16:08:20
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
    des: String
  }
}