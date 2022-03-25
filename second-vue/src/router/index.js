import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import JobSeeker from "../views/JobSeeker";
import Company from "../views/Company";
import JobList from "../views/JobList";
import ResumeList from "../views/ResumeList";
import JobSeekerHome from '../component/JobSeekerHome';
import JobSeekerJobList from '../component/JobSeekerJobList'
import PersonalCenter from '../component/PersonalCenter'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: JobSeeker,
    redirect: to => {
      return { path: '/JobSeekerHome'}
    },
  },
  {
    path:'/JobSeeker',
    name:'JobSeeker',
    component: JobSeeker,
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
    ]
  },
  {
    path:'/Company',
    name:'/Company',
    component: Company,
    children:[
      {
        path: '/JobList',
        name: 'JobList',
        component: JobList
      },
      {
        path: '/ResumeList',
        name: 'ResumeList',
        component: ResumeList
      },
    ]
  },

  

]

const router = new VueRouter({
  routes
})

export default router
