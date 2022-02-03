import InputPhone from './InputPhone.vue'

const VueInputPhone = {
  install (Vue, options) {
    Vue.component(InputPhone.name, InputPhone)
  }
}
export default VueInputPhone

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueInputPhone)
}