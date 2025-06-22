import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '../views/ProjectsView.vue'
import ScriptBreakdown from '../views/ScriptBreakdown.vue'
import BudgetView from '../views/BudgetView.vue'
import LoginView from '../views/LoginView.vue'
import GuestAccessView from '../views/GuestAccessView.vue'
import { useProjectStore } from '../stores/projectStore'

const routes = [
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/', redirect: { name: 'ProjectsView' } },
  { path: '/projects', name: 'ProjectsView', component: ProjectsView },
  { path: '/breakdown', name: 'ScriptBreakdown', component: ScriptBreakdown },
  { path: '/budget', name: 'BudgetView', component: BudgetView },
  {
    path: '/new-project',
    name: 'NewProject',
    component: () => import('../views/NewProject.vue')
  },
  { path: '/guest', name: 'GuestAccess', component: GuestAccessView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
  // Use Pinia store if available, fallback to localStorage for reloads
  let isLoggedIn
  try {
    const store = useProjectStore()
    isLoggedIn = store.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true'
  } catch {
    isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  }
  if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'ProjectsView' }) // or your main page
  } else {
    next()
  }
})

export default router
