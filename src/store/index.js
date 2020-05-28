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
      allMoodPositions: [],
      breathingTimes: {
        in: 4,
        hold: 1.5,
        out: 4,

      }
    },
    feelings: [
      "Sad",
      "Happy",
      "Joyfull",
      "Desperate",
      "Lonely",
      "Annoyed",
      "Agitated",
      "Frustrated",
      "Irritated",
      "Disgusted",
      "Timid",
      "Tense",
      "Insecure",
      "Worried",
      "Anxious",
      "Uncomfortable",
      "Lifeless",
      "Fragile",
      "Fascinated",
      "Determined",
      "Optimistic",
      "Whimsical",
      "Tender",
      "Amorous",
      "Cheerful"
    ],

    triggers: [
      "Divorce",
      "Loss",
      "Work",
      "School",
      "Deadines",
      "Illness",
      "Confusion",
      "Agresion",
      "Abuse",
      "Holliday",
      "Date",
      "Love",
    ],

    accentColor: {
      hex: '#8A8BFF',
      hsl: '239'
    },
    colors: [
      {
        hex: '#fed891',
        hsl: '38'
      },
      {
        hex: '#f4c06e',
        hsl: '36'
      },
      {
        hex: '#Feb18d',
        hsl: '18'
      },
      {
        hex: '#ea8181',
        hsl: '1'
      },
      {
        hex: '#ff88f3',
        hsl: '304'
      },
      {
        hex: '#de8dff',
        hsl: '282'
      },
      {
        hex: '#8a8bff',
        hsl: '238'
      },
      {
        hex: '#6187e5',
        hsl: '221'
      },
      {
        hex: '#6cccff',
        hsl: '200'
      },
      {
        hex: '#75eadc',
        hsl: '172'
      },
      {
        hex: '#45af7c',
        hsl: '151'
      },
      {
        hex: '#67e867',
        hsl: '120'
      }
    ]
  },
  getters: {
    allUser: state => state.user,
    allColors: state => state.colors,
    accentColor: state => state.accentColor,
    userColor: state => state.user.userColor,
    moodDotPosition: state => state.user.allMoodPositions,
    getFeelings: state => state.feelings,
    getBreathingTimes: state => state.user.breathingTimes
  },

  mutations: {
    setAccentColor: (state, response) => (state.accentColor = response),
    setUserColor: (state, response) => (state.user.userColor = response),
    grantAccess: (state, response) => (state.user.access = response),
    populateMood(state, element) {
      state.user.allMoodPositions.push(element);
    },
    setBreathingTimes: (state, response) => (state.user.breathingTimes = response)
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
    },
    setBreathingTimes({ commit }, breathingTimes) {
      const response = breathingTimes
      commit('setBreathingTimes', response)
    }


  },
  plugins: [new VuexPersistence({ storage: window.sessionStorage, reducer: (state) => ({ user: state.user }) }).plugin]
})







