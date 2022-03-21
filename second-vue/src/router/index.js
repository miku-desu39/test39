import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import JobSeeker from "../views/JobSeeker";
import Company from "../views/Company";
import JobList from "../views/JobList";
import ResumeList from "../views/ResumeList"
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: JobSeeker,
  },
  {
    path:'/JobSeeker',
    name:'JobSeeker',
    component: JobSeeker,
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
