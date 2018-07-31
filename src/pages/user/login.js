import TabbarControl from '@/mixins/tabbar_control'

export default {
    mixins: [TabbarControl],
    created () {
        console.log('CREATED')
    }
}