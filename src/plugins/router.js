import Vue from 'vue'
import VueRouter from 'vue-router'

// component imports
import Home from '@/containers/Home'
import Week from '@/containers/Week'

const routes = [
    { path: '/', component: Home },
    { path: '/week', component: Week }
]

Vue.use(VueRouter)
const router = new VueRouter({ routes })
export default router