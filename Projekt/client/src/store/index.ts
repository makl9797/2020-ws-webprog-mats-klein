import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// https://rathes.me/blog/de/vuex-einstieg/

export default new Vuex.Store({
  state: {
    tweetlist: [],
    key: '',
    auth: '',
    userID: '',
    histories: ['Example'],
    historyIds: ['']
  },
  mutations: {
    SET_TWEETLIST: (state, tweetlist) => {
      state.tweetlist = tweetlist
    },
    SET_KEYWORD: (state, key) => {
      state.key = key
    },
    SET_USERID: (state, user) => {
      state.userID = user.sub
    },
    KEY_TO_HISTORY: (state) => {
      state.histories.push(state.key)
    },
    ID_TO_HISTORYID: (state, id) => {
      console.log(id)
      state.historyIds.push(id)
    }
  },
  actions: {
    loadTweets ({ commit, state }) {
      Vue.axios.get(`tweetlist/byKey?key=${state.key}`)
        .then(result => {
          commit('SET_TWEETLIST', result.data)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    saveHistory ({ commit, dispatch, state }) {
      commit('KEY_TO_HISTORY')
      dispatch('loadTweets')
      commit('ID_TO_HISTORYID', state.tweetlist._id)
      Vue.axios.post(`history?user=${state.userID}`, state.historyIds).then(r => console.log(r.data))
    }
  },
  modules: {}
})
