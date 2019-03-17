import Vue from 'vue'
import Router from 'vue-router'
import AllEmployees from './components/AllEmployees'
import About from './components/About'
import Employee from './components/Employee'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active purple',
  routes: [
    { path: '/', component: AllEmployees },
    { path: '/about', component: About },
    { path: '/employees/:id', name: 'employees', component: Employee, props: true },
    { path: '*', component: NotFound }
  ]
})

