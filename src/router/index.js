// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'

const routes = [
  { path:'/login',
    component: () => import('@/views/Login.vue'),
    name:'login'
  },
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router


// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '',
//         name: 'Home',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
//       },
//     ],
//   },
// ]