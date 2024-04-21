import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../views/mainPage'
import contactPage from '../views/contactPage'
import cennikPage from '../views/cennikPage'
import galeriaPage from '../views/galeriaPage.vue'
import teamPage from '../views/teamPage.vue'
//import -> ścieżka
const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: mainPage,
  },
  {
    path: '/kontakt',
    name: 'contactPage',
    component: contactPage,
  },
  {
    path: '/cennik',
    name: 'cennikPage',
    component: cennikPage,
  },
  {
    path: '/galeria',
    name: 'galeriaPage',
    component: galeriaPage,
  },
  {
    path: '/zespol',
    name: 'teamPage',
    component: teamPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition)
  {
    if (savedPosition)
    {
      return savedPosition
    }

    else
    {
      return { top: 0 }
    }
  },
})

export default router
