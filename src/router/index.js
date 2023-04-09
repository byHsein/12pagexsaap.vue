import { createRouter, createWebHistory } from 'vue-router'
import HomeProduct from '../views/HomeProduct.vue'
import Company from '../views/HomeCompany.vue'
import About from '../views/About.vue'
import Prices from '../views/Prices.vue'
import Services from '../views/Services.vue'
import Cases from '../views/Cases.vue'
import CaseDetails from '../views/CaseDetails.vue'
import CasedetailTeam from '../views/CasedetailTeam.vue'
import Blog from '../views/Blog.vue'
import BlogSingle from '@/views/BlogSingle.vue'
import Faq from '@/views/Faq.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeProduct
  },
  {
    path: '/Company',
    name: 'company',
    component:Company
  
  },
  {
    path: '/About',
    name: 'About',
    component:About
  
  },
  {
    path: '/Prices',
    name: 'Prices',
    component:Prices
  
  },
  {
    path: '/Services',
    name: 'Services',
    component:Services
  
  },
  {
    path: '/Cases',
    name: 'Cases',
    component:Cases
  
  },
  {
    path: '/CaseDetails',
    name: 'CaseDetails',
    component:CaseDetails
  
  },
  {
    path: '/CasedetailTeam',
    name: 'CasedetailTeam',
    component:CasedetailTeam
  
  },
  {
    path: '/Blog',
    name: 'Blog',
    component:Blog
  
  },
  {
    path: '/BlogSingle',
    name: 'BlogSingle',
    component:BlogSingle
  
  },
  {
    path: '/Faq',
    name: 'Faq',
    component:Faq
  
  },
  {
    path: '/Contact',
    name: 'Contact',
    component:Contact
  
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
