import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tablet/:page',
    name: 'tablet-view',
    component: () => import('../views/TabletView.vue'),
    props: true
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/PerfilView.vue')
  },
  {
    path: '/compra-finalizada',
    name: 'compra-finalizada',
    component: () => import('../views/CompraFinalizadaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
