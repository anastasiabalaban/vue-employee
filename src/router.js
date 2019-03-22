import Vue from 'vue'
import Router from 'vue-router'
import AllEmployees from './components/employees/index/AllEmployees'
import About from './components/About'
import Employee from './components/employees/show/Employee'
import NotFound from './components/NotFound'
import AllProjects from './components/projects/AllProjects'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active purple',
  routes: [
    { path: '/', component: AllEmployees },
    { path: '/projects', component: AllProjects },
    { path: '/about', component: About },
    { path: '/employees/:id', name: 'employees', component: Employee, props: true },
    { path: '*', component: NotFound }
  ]
})

