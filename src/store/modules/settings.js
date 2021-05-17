import {
  isShowMenu, //是否显示侧边栏菜单
  navDirection,  // 侧边栏显示位置：left OR right
  isShowHeader,  //是否显示主体内容的头部信息
  isShowFooter,  //是否显示主体内容的尾部信息
} from '@/settings'

const state = {
  isShowMenu,
  navDirection,
  isShowHeader,
  isShowFooter,
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
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