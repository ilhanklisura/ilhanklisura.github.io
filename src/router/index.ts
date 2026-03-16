import { createRouter, createWebHashHistory, type RouteRecordRaw, type RouteLocationNormalized } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: () => import('@/views/Projects.vue') },
  { path: '/blog', name: 'Blog', component: () => import('@/views/Blog.vue') },
  { path: '/blog/:slug', name: 'BlogPost', component: () => import('@/views/BlogPost.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  { path: '/resume', name: 'Resume', component: () => import('@/views/Resume.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to: RouteLocationNormalized, _from: RouteLocationNormalized, savedPosition: any) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
