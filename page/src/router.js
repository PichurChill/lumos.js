import Vue from 'vue'
import Router from 'vue-router'
const home = () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
const docIndex = () => import(/* webpackChunkName: "doc" */ '@/views/doc/index')
Vue.use(Router)

const routes = [
  {
      path: '/',
      name: 'home',
      component: home
  },
  {
    path: '/document',
    name: 'docIndex',
    component: docIndex
  },
]

const router = new Router({
  routes
})

export default router
