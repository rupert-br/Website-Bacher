import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Philosophie from '../views/Philosophie.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

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
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/philosophie',
    name: 'Philosophie',
    component: Philosophie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
