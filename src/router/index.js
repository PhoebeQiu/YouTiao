import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import AddAccount from '@/components/AddAccount'
import AddBudget from '@/components/AddBudget'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Book',
      component: Book
    },
    {
      path: 'MainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: 'AddAccount',
      name: 'AddAccount',
      component: AddAccount
    },
    {
      path: 'AddBudget',
      name: 'AddBudget',
      component: AddBudget
    }
  ]
})
