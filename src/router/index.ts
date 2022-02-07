import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/week',
    name: 'Week',
    component: () => import('../views/Week.vue')
  },
  {
    path: '/modules',
    name: 'Modules',
    component: () => import('../views/ComingSoon.vue')
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('../views/ComingSoon.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/ComingSoon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
