import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SecretView from '@/views/SecretView.vue'
import RegistroView from '@/views/RegistroView.vue'
import LoginView from '@/views/LoginView.vue'

import { getAuth } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/secret',
      name: 'secret',
      component: SecretView,
      meta: {requiresAuth: true}
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (to.meta.requiresAuth &&!user) {
    next('/login');
  } else {
    next();
  }
})

export default router
