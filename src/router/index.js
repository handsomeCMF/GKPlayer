import Vue from 'vue'
import VueRouter from 'vue-router'
import streamers from '../views/streamers.vue'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Liverooms from '../views/Liverooms.vue'
import Liveroom from '../views/Liveroom.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/streamers',
        name: 'streamers',
        component:
          streamers
      }, {
        name: 'liverooms',
        path: '/Liverooms',
        component:
          Liverooms
      },
      {
        name: 'liveroom',
        path: '/Liveroom/:id/:avatorImg',
        component: Liveroom
      }
    ]
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
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld
  },
  {
    name: 'home',
    path: '/Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
