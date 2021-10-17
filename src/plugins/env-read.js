import Vue from 'vue'

Vue.env = (varName) => process.env['VUE_APP_' + varName]
Vue.prototype.$env = (varName) => process.env['VUE_APP_' + varName]