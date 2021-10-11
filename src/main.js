import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueFeather from 'vue-feather'

Vue.config.productionTip = false
Vue.use(VueFeather)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
