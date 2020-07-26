import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod?api_key=D1xGcyFUyDNCRP3G4IhLACvobEmVFT6tlraP6exU'

const DEFAULT_PHOTO = 'https://apod.nasa.gov/apod/image/2007/NEOWISEBelowBigDipper-7-16-2020-TomMasterson1081.jpg'

//const APIKEY = 'D1xGcyFUyDNCRP3G4IhLACvobEmVFT6tlraP6exU'

export default new Vuex.Store({
  state: {
    apod:{}
  },
  mutations: {
    GET_APOD (state, apod) {state.apod = apod}
  },
  actions: {
    getApod({commit}, date = null ) {
      let queryDate = date ? date : new Date().toISOString().substr(0, 10)
      axios.get(`${APOD_ENDPOINT}&date=${queryDate}`)
      .then((response) =>{
        commit('GET_APOD', response.data)
      })
      .catch(() => {
        let backup = { url: `${DEFAULT_PHOTO}` }
        commit('GET_APOD', backup)
      })
    },

  },
  modules: {
  }
})
