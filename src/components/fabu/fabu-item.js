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
    }
  }
}
