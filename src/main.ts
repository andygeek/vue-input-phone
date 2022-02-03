import InputPhone from './components/InputPhone.vue'

const plugin = {
  install: Vue => {
    Vue.component(InputPhone.name, InputPhone)
  }
}

InputPhone.install = plugin.install

export default InputPhone