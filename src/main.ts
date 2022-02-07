import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueFeather from 'vue-feather'
import './assets/tailwind.css'
import store from './store'

Vue.config.productionTip = false

Vue.component(VueFeather.name, VueFeather);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
