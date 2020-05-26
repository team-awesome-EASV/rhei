import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

export default new Vuex.Store({
  state: {
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
  },
  getters: {
    allUser: state => state.user,
    allColors: state => state.colors,
    accentColor: state => state.accentColor,
    userColor: state => state.user.userColor,
    moodDotPosition: state => state.user.allMoodPositions
  },
  mutations: {
    setAccentColor: (state, response) => (state.accentColor = response),
    setUserColor: (state, response) => (state.user.userColor = response),
    grantAccess: (state, response) => (state.user.access = response),
    populateMood(state, element) {
      state.user.allMoodPositions.push(element);
    },
    // saveUser: (state) => sessionStorage.setItem(state, JSON.stringify(state)),
    // initaliseStore: (state) => sessionStorage.getItem(state, JSON.parse.state)

  },
  actions: {
    setAccentColor({ commit }, color) {
      const response = color
      commit('setAccentColor', response)
    },

    setUserColor({ commit }, color) {
      const response = color
      commit('setUserColor', response)
    },

    grantAccess({ commit }, value) {
      const response = value
      commit('grantAccess', response)
    },
    populateMood({ commit }, mood) {
      const element = mood
      commit('populateMood', element)
    },
    saveUser({ commit }, state) {
      commit('saveUser', state)
    }


  },
  plugins: [new VuexPersistence({ storage: window.sessionStorage, reducer: (state) => ({ user: state.user }) }).plugin]
})







