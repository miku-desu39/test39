import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student'
import Home from "../views/Home";
import  Teacher from "../views/Teacher"
import Course from "../views/Course";
import MemberList from "../views/MemberList";
import StudentHomeworkList from "../views/StudentHomeworkList";
import TeacherHomeworkList from "../views/TeacherHomeworkList";
import TeacherHwDetail from "../views/TeacherHwDetail";
import JobSeeker from "../views/JobSeeker";
import Company from "../views/Company";
import JobList from "../views/JobList";
import ResumeList from "../views/ResumeList"
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
  {
    path:'/Teacher',
    name:'Teacher',
    component: Teacher
  },
  {
    path:'/Student',
    name:'Student',
    component: Student
  },

  {
    path:'/Course',
    name:'Course',
    component: Course,
    children:[
      {
        path: '/MemberList',
        name: 'MemberList',
        component: MemberList
      },
      {
        path: '/StudentHomeworkList',
        name: 'StudentHomeworkList',
        component: StudentHomeworkList
      },
      {
        path: '/TeacherHomeworkList',
        name: 'TeacherHomeworkList',
        component: TeacherHomeworkList
      },
      {
        path: '/TeacherHwDetail',
        name: 'TeacherHwDetail',
        component: TeacherHwDetail
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
