import Vue from 'vue'
import VueRouter from 'vue-router'
import streamers from '../views/streamers.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Liverooms from '../views/Liverooms.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/streamers',
    name: 'streamers',
    component: streamers
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    name: 'home',
    path: '/Home',
    component: Home
  },
  {
    name: 'liveroom',
    path: '/Liveroom',
    component: Liverooms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
