import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: {},
    userName: ''
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    },
    setUserName(state, val) {
      state.userName = val;
    }
  },
  actions: {
    setPosition(state) {
      let val = ''
      api.getCurPosition().then(res => {
        val = res.data.data;
        state.commit('setPosition', val);
      })
    }
  }
})