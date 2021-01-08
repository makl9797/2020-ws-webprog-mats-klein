import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// https://rathes.me/blog/de/vuex-einstieg/

export default new Vuex.Store({
  state: {
    tweetlist: []
  },
  mutations: {
    SET_TWEETLIST: (state, { tweetlist }) => {
      state.tweetlist = tweetlist
    }
  },
  actions: {
    FETCH_TWEETS: function ({ commit }) {
      fetch('http://localhost:9000/search/list?key=trump')
        .then((response) => {
          return response.json()
        }).then((data) => {
          commit('SET_TWEETLIST', { tweetlist: data })
        })
    }
  },
  modules: {}
})
