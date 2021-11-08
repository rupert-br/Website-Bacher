import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Philosophie from '../views/Philosophie.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projekte',
    name: 'projekte',
    component: Projects,
    props: route => ({ name: route.query.name })
  },
  {
    path: '/projekte/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/philosophie',
    name: 'Philosophie',
    component: Philosophie
  },
  {
    // will match everything
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 100)
    })
  }
})

export default router
