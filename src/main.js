import Vue from 'vue'
import App from './App.vue'

// plugins
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import './plugins/feather'
import './plugins/env-read'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
