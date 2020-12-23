import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'search',
    path: '/search',
    component: Home
  },
  {
    name: 'stream',
    path: '/stream',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
