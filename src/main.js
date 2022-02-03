import InputPhone from './InputPhone.vue'

const plugin = {
  install (Vue, options) {
    Vue.component(InputPhone.name, InputPhone)
  }
}
InputPhone.install = plugin.install

export default InputPhone