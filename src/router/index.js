import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/ProfileView.vue'
import Users from '../views/UsersView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'home',
      component: Profile
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }

  ]
})

export default router
