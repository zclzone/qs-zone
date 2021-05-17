const state = {
  isMenuActive: false,
}

const mutations = {
  TOGGLE_MENU(state) {
    state.isMenuActive = !state.isMenuActive
  },
  CLOSE_MENU(state) {
    state.isMenuActive = false
  }
}

const actions = {
  taggleMenu({ commit }) {
    commit('TOGGLE_MENU')
  },
  closeMenu({ commit }) {
    commit('CLOSE_MENU')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}