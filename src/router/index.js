import Vue from 'vue'
import VueRouter from 'vue-router'

import almaRoute from '@/modules/alma/router'
import alexRoute from '@/modules/alex/router'
import hugoRoute from '@/modules/hugo/router'
import loginForm from '@/modules/login/router'
import SuperAdmin from "@/modules/admin/router"
import Administrador from "@/modules/administrador/router"

Vue.use(VueRouter)

const routes = [
  {
    path:'/signin',
    ... loginForm
  },
  {
    path:'/',
    ... almaRoute
  },
  {
    path:'/',
    ... alexRoute
  },
  {
    path: '/Administrador',
    ...Administrador
  },
  {
    path:'/',
    ... hugoRoute
  },
  {
    path:'/superAdmin',
    ... SuperAdmin
  },
  {
    path: '**',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
