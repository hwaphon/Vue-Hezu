import TabbarControl from '@/mixins/tabbar_show'
export default {
  mixins: [TabbarControl],
  created () {
  },
  data () {
    return {

    }
  },
  methods: {
    onLinkTouch (path) {
      this.$router.push(path)
    }
  },
  components: {
  }
}
