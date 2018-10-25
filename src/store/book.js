export default{
  state: {
    books: []
  },
  mutations: {
    // 更新 所有账本
    updateBooks (state, arr) {
      state.books = arr
    }
  },
  actions: {
    // 更新 所有账本
    updateBooks ({commit}, {arr}) {
      commit('updateBooks', arr)
    }
  }
}
