import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ClientesView from '@/views/ClientesView.vue'
import ContactoView from '@/views/ContactoView.vue'
import EmpresaView from '@/views/EmpresaView.vue'

const routes = [
  { path: '/', component: LoginView },
  { 
    path: '/dashboard', 
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      { path: 'productos', component: ProductCardComponent, meta: { requiresAuth: true } },
      { path: 'clientes', component: ClientesView, meta: { requiresAuth: true } },
      { path: 'contacto', component: ContactoView, meta: { requiresAuth: true } },
      { path: 'empresa', component: EmpresaView, meta: { requiresAuth: true } }
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