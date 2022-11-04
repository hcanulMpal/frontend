import Vue from 'vue'
import VueRouter from 'vue-router'

import almaRoute from '@/modules/alma/router'
import alexRoute from '@/modules/alex/router'
import hugoRoute from '@/modules/hugo/router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    ... almaRoute
  },
  {
    path:'/',
    ... alexRoute
  },
  {
    path:'/',
    ... hugoRoute
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