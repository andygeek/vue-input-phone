import InputPhone from './components/InputPhone.vue'

const plugin = {
  install (Vue: any, options: any) {
    Vue.component(InputPhone.name, InputPhone)
  }
}
export default InputPhone