import Vue from 'vue'
import vuex from 'vuex'

// 引入模块
import AccountStore from './account'
import Budgetstore from './budget'
import BookStore from './book'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    Account: AccountStore,
    Budget: Budgetstore,
    Book: BookStore
  }
})
