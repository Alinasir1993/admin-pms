import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


export default new Vuex.Store({
  state:{
    testCount: 0
  },
  mutations: {
    increment (state, payload) {
      console.log(payload)
      return state.testCount = state.testCount + payload
    }
  },
  actions: {
    increment (context, payload) {
      context.commit("increment", payload)
    }
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]

})


