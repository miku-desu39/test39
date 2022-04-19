import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import JobSeeker from "../views/JobSeeker";
import Company from "../views/Company";
import JobList from "../views/JobList";

import JobSeekerHome from '../component/JobSeekerHome';
import JobSeekerJobList from '../component/JobSeekerJobList'
import PersonalCenter from '../component/PersonalCenter'
import JobDetail from '../component/JobDetail'
import CompanyCenter from '../component/CompanyCenter'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },

  {
    path:'/JobSeeker',
    name:'JobSeeker',
    component: JobSeeker,
    redirect: to => {
      return { path: '/JobSeekerHome'}
    },
    children:[
      {
        path: '/JobSeekerHome',
        name: 'JobSeekerHome',
        component: JobSeekerHome
      },
      {
        path: '/JobSeekerJobList',
        name: 'JobSeekerJobList',
        component: JobSeekerJobList
      },
      {
        path: '/PersonalCenter',
        name: 'PersonalCenter',
        component: PersonalCenter
      },
      {
        path: '/JobDetail',
        name: 'JobDetail',
        component: JobDetail
      },
      
    ]
  },
  {
    path:'/Company',
    name:'/Company',
    component: Company,
    redirect: to => {
      return { path: '/CompanyCenter'}
    },
    children:[
      {
        path: '/CompanyCenter',
        name: 'CompanyCenter',
        component: CompanyCenter
      },
      
      
    ]
  },

  

]

const router = new VueRouter({
  routes
})

export default router
