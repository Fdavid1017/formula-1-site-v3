export const state = () => ({
  show: false,
  text: ''
})

export const mutations = {
  show (state) {
    state.show = true
  },
  hide (state) {
    state.show = false
  },
  setText (state, text) {
    state.text = text
  }
}

export const actions = {
  show ({ commit }) {
    commit('show')
  },
  hide ({ commit }) {
    commit('hide')
  },
  setText ({ commit }, text) {
    commit('setText', text)
  }
}

export const getters = {
  getShow (state) {
    return state.show
  },
  getText (state) {
    return state.text
  }
}
