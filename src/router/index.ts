import { createRouter, createWebHistory } from 'vue-router'
import MyRequestView from '../views/MyRequestsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyRequestView,
    },
    {
      path: '/request/create',
      name: 'CreateRequest',
      component: () => import('@/views/CreateRequestForm.vue'),
    },
    {
      path: '/my-requests',
      component: MyRequestView,
      name: 'MyRequests',
    },
  ],
})

export default router
