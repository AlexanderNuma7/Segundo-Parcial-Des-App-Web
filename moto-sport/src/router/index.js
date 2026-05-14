import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'

const routes = [
  { path: '/', component: LoginView },
  { 
    path: '/dashboard', 
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      { path: 'productos', component: ProductCardComponent, meta: { requiresAuth: true } }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Proteger rutas
router.beforeEach((to, from, next) => {
  const logueado = localStorage.getItem('logueado')
  if (to.meta.requiresAuth && !logueado) {
    next('/')
  } else {
    next()
  }
})

export default router