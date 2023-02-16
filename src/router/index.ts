import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import History from '@/views/History.vue'
import NLux from '@/views/NLux.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/nlux',
    name: 'NLux',
    component: NLux
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes
})

export default router
