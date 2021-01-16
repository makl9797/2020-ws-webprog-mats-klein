import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// https://rathes.me/blog/de/vuex-einstieg/

export default new Vuex.Store({
  state: {
    tweetlist: [],
    key: '',
    auth: '',
    userToken: '',
    histories: ['Twitter']
  },
  mutations: {
    SET_TWEETLIST: (state, tweetlist) => {
      state.tweetlist = tweetlist
    },
    SET_KEYWORD: (state, key) => {
      state.key = key
    },
    SET_USERTOKEN: (state, user) => {
      state.userToken = user
    },
    SET_HISTORY: (state, history) => {
      state.histories = history
    },
    ADD_HISTORY: (state) => {
      if (state.key !== '') {
        state.histories.push(state.key)
      }
    }
  },
  actions: {
    loadTweets ({ commit, state }) {
      Vue.axios.get(`search/list?key=${state.key}`)
        .then(result => {
          commit('SET_TWEETLIST', result.data)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    loadHistory ({ commit, state }) {
      Vue.axios.get(`history?from=${state.userToken}`)
        .then(result => {
          commit('SET_HISTORY', result.data)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    saveHistory ({ state }) {
      Vue.axios.post(`history?from=${state.userToken}`, state.histories)
    },
    switchTweetlist ({ commit, state }, key) {
      commit('SET_KEYWORD', key)
      Vue.axios.get(`search/list?key=${key}`)
        .then(result => {
          commit('SET_TWEETLIST', result.data)
        })
    }
  },
  modules: {}
})
