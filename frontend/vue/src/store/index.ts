import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
    isAuth(state) {
      return !!state.user
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
