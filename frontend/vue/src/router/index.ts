import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isAuthenticated } from '@/helpers/auth'
import TopNavigation from '@/components/TopNavigation.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    components: {
      default: import(/* webpackChunkName: "main-view" */ '../views/MainView.vue'),
      TopNavigation
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: import(/* webpackChunkName: "auth-view" */ '../views/AuthView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'auth' && !isAuthenticated()) next({ name: 'auth' })
  else next()
})

export default router
