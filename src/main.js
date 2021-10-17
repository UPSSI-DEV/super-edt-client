import Vue from 'vue'
import App from './App.vue'

// plugins
import vuetify from './plugins/vuetify'
import './plugins/feather'
import './plugins/env-read'


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
