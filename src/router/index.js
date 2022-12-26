import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SymptomsView from '../views/SymptomsView.vue'
import PreventionView from '../views/PreventionView.vue'
import TreatmentView from '../views/TreatmentView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import NewsView from '../views/NewsView.vue'
import DoDonotView from '../views/DoDonotView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/symptoms',
      name: 'symptoms',
      component: SymptomsView
    },
    {
      path: '/prevention',
      name: 'prevention',
      component: PreventionView
    },
    {
      path: '/treatment',
      name: 'treatment',
      component: TreatmentView
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/do&donot',
      name: 'do&donot',
      component: DoDonotView
    },
  ]
})

export default router
