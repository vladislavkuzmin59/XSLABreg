import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/modules/middleware'

import HomeView from '../views/HomeView.vue'
import Registration from '@/views/RegistrationView.vue'
import myCourses from '@/views/MyCoursesView.vue'
import cours from '@/views/CoursView.vue'

import auth from './middleware/auth'
import guest from './middleware/guest'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      middleware : [
        guest
      ]
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/myCourses',
    name: 'myCourses',
    component: myCourses,
    meta: {
      middleware : [
        auth
      ]
    }
  },
  {
    path: '/cours',
    name: 'cours',
    component: cours
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
   if(!to.meta.middleware){
    return next()
   }
   const middleware = to.meta.middleware

   const context ={
      to,
      from,
      next,
      store
   }
   return middleware[0]({
    ...context
   })
})

export default router
