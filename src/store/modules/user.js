
export default {
  namespaced: true,
  state: {
    userTooken: ''
  },
  mutations: {
    SET_USERTOOKEN: (state, tooken) => {
      state.userTooken = tooken
    }
  },
  actions: {
    login ({ commit }, userinfo) {
      commit('SET_USERTOOKEN', userinfo.tooken)
    }
  }
}
