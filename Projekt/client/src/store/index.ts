import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// https://rathes.me/blog/de/vuex-einstieg/

export default new Vuex.Store({
  state: {
    tweetlist: [],
    key: '',
    auth: '',
    user: ''
  },
  mutations: {
    SET_TWEETLIST: (state, tweetlist) => {
      state.tweetlist = tweetlist
    },
    SET_KEYWORD: (state, key) => {
      state.key = key
    },
    SET_USER: (state, user) => {
      state.user = user
      console.log(user)
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
    }
  },
  modules: {}
})
