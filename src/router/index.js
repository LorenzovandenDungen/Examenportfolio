import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PackageSelectionView from '../views/PackageSelectionView.vue' // Importeer uw nieuwe view

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/packages',
    name: 'packages',
    component: PackageSelectionView // Voeg een nieuwe route toe
  }
  // Voeg meer routes toe indien nodig
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
