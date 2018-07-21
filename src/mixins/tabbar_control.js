/*
* @Author: hwaphon
* @Date:   2018-07-21 20:44:50
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 20:56:47
*/
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'toggleTabbar'
    ])
  },

  beforeDestroy () {
    this.toggleTabbar(true)
  },

  created () {
    this.toggleTabbar(false)
  }
}
