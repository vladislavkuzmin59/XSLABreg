import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from '@/views/RegistrationView.vue'
import myCourses from '@/views/MyCoursesView.vue'
import cours from '@/views/CoursView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/myCourses',
    name: 'myCourses',
    component: myCourses
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

export default router
