/*
* @Author: hwaphon
* @Date:   2018-07-21 20:44:50
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-07-21 20:51:55
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
    console.log('MIXIN CREATED')
    this.toggleTabbar(false)
  }
}
