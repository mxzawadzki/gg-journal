import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Quests from '../views/Quests.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'quests',
    component: Quests
  },
  {
    path: '/bestiary',
    name: 'bestiary',
    component: () => import('../views/Bestiary.vue')
  },
  {
    path: '/*',
    redirect: {
      name: 'quests'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
