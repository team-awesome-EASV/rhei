import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    id: name,
    name: '',
    email: '',
    password: '',
    access: false,
    userColor: {
      hex: '#8A8BFF',
      hsl: '239'
    },
    allMoodPositions: []
  },
  accentColor: {
    hex: '#8A8BFF',
    hsl: '239'
  },
  colors: [
    {
      hex: '#FFEA8D',
      hsl: '48'
    },
    {
      hex: '#FED891',
      hsl: '39'
    },
    {
      hex: '#FEB18D',
      hsl: '19'
    },
    {
      hex: '#FC9390',
      hsl: '1'
    },
    {
      hex: '#FF88F3',
      hsl: '306'
    },
    {
      hex: '#DE8DFF',
      hsl: '282'
    },
    {
      hex: '#8A8BFF',
      hsl: '239'
    },
    {
      hex: '#6CCCFF',
      hsl: '200'
    },
    {
      hex: '#21F8FD',
      hsl: '181'
    },
    {
      hex: '#00FFAF',
      hsl: '161'
    },
    {
      hex: '#00FF65',
      hsl: '143'
    },
    {
      hex: '#F7C544',
      hsl: '43'
    }
  ]
}

const getters = {
  allUser: state => state.users,
  allColors: state => state.colors,
  accentColor: state => state.accentColor
}

const actions = {
  setAccentColor({ commit }, color) {
    const response = color
    commit('setAccentColor', response)
  },
  grantAccess({ commit }, value) {
    const response = value
    commit('grantAccess', response)
  },
  updateMoodPositions({ commit }, area) {
    const response = area
    commit("updateMoodPositions", response)
  }
}
const mutations = {
  setAccentColor: (state, response) => (state.accentColor = response),
  setUserColor: (state, response) => (state.user.userColor = response),
  grantAccess: (state, response) => (state.user.access = response),
  updateMoodPositions: (state, response) => (state.user.allMoodPositions = response)
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
