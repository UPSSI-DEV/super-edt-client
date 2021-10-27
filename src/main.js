import Vue from 'vue'
import App from './App.vue'

// vue plugins
import vuetify from './plugins/vuetify'
import router from './plugins/router'

// custom plugins
import './plugins/feather'
import './plugins/env-read'
import './plugins/cookies'
import './registerServiceWorker'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
