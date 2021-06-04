import { isShowMenu } from '@/settings'

const state = {
  isShowMenu,
}

const mutations = {
  CHANGE_SETTING: (state, data) => {
    for (const key in data) {
      if (state.hasOwnProperty(key)) {
        state[key] = data[key]
      }
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}