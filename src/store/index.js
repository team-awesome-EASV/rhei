import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  users: [
    {
      id: name,
      name: "",
      email: "",
      password: "",
    }


  ],
  accentColor: {
    hex: "#FFEA8D",
    hsl: "48.95"
  },
  colors: [
    {
      hex: "#FFEA8D",
      hsl: "48.95"
    },
    {
      hex: "#FED891",
      hsl: "39.08"
    },
    {
      hex: "#FEB18D",
      hsl: "19.12"
    },
    {
      hex: "#FC9390",
      hsl: "1.67"
    },
    {
      hex: "#FF88F3",
      hsl: "306.05"
    },
    {
      hex: "#DE8DFF",
      hsl: "282.63"
    },
    {
      hex: "#8A8BFF",
      hsl: "239.49"
    },
    {
      hex: "#6CCCFF",
      hsl: "200.82"
    },
    {
      hex: "#21F8FD",
      hsl: "181.36"
    },
    {
      hex: "#00FFAF",
      hsl: "161.18"
    },
    {
      hex: "#00FF65",
      hsl: "143.76"
    },
    {
      hex: "#F7C544",
      hsl: "43.24"
    }
  ]
}

const getters = {
  allUser: state => state.users,
  allColors: state => state.colors,
  accentColor: state => state.accentColor
}

const actions = {

}
const mutations = {
  setAccentColor(state, color) {
    state.accentColor = color

  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
