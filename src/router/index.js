// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Signup from  '@/views/Signup.vue'

const routes = [
  { path:'/login',
    component: () => import('@/views/Login.vue'),
    name:'login'
  },
  { path:'/signup',
    component: () => import('@/views/Signup.vue'),
    name:'signup'
  },
  { 
    path:'/otp',
    component: () => import('@/views/Otp.vue'),
    name:'otp'
  },
  { 
    path:'/sendemail',
    component: () => import('@/views/Sendemail.vue'),
    name:'sendemail'
  },
  { 
    path:'/passwordchange',
    component: () => import('@/views/Passwordchange.vue'),
    name:'passwordchange'
  },
  { 
    path:'/processing',
    component: () => import('@/views/Loader1.vue'),
    name:'processing'
  },
  { 
    path:'/userprofile',
    component: () => import('@/views/Profile.vue'),
    name:'userprofile'
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