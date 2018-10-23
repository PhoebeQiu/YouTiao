import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

// 引入模块
import AccountStore from './account'
import BudgetCartStore from './budget'

export default new vuex.Store({
  modules: {
    Account: AccountStore,
    Budget: BudgetCartStore
  }
})
