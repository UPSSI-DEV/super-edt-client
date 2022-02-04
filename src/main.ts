import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueFeather from 'vue-feather'

Vue.config.productionTip = false

Vue.component(VueFeather.name, VueFeather);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
