import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'toggleTabbar'
    ])
  },

  created () {
    this.toggleTabbar(false)
  }
}
