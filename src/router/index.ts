import { createRouter, createWebHistory } from 'vue-router'
import DemoView from '../views/DemoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DemoView
    }
  ]
})

export default router
