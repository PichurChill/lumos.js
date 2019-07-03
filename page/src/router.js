import Vue from 'vue'
import Router from 'vue-router'
const home = () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
Vue.use(Router)

const routes = [
  {
      path: '/',
      name: 'home',
      component: home
  },
]

const router = new Router({
  routes
})

export default router
