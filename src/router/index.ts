import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/views/EventView.vue')
    },
    {
      path: '/lokasi',
      name: 'lokasi',
      component: () => import('@/views/LokasiView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/GalleryView.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('@/views/ThanksView.vue')
    }
  ]
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router
