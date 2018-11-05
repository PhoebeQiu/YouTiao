export default{
  state: {
    inComeList: [],
    outComeList: [],
    inCome: 0,
    outCome: 0,
    allInCome: 0
  },
  mutations: {
    // 更新 账本的所有记账信息
    updateAccounts (state, arr) {
      state.inComeList = arr.InComeList
      state.outComeList = arr.OutComeList
      state.inCome = arr.InCome
      state.outCome = arr.OutCome
      state.allInCome = arr.AllIncome
    }
  },
  actions: {
    // 更新 账本的所有记账信息
    updateAccounts ({commit}, {arr}) {
      commit('updateAccounts', arr)
    }
  }
}
