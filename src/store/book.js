export default{
  state: {
    bookId: 0
  },
  mutations: {
    // 更新 账本ID
    updateBookID (state, id) {
      state.bookId = id
    }
  },
  actions: {
    // 更新 账本ID
    updateBookID ({commit}, id) {
      commit('updateBookID', id)
    }
  }
}
