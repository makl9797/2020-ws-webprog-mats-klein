import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// https://rathes.me/blog/de/vuex-einstieg/

export default new Vuex.Store({
  strict: true,
  state: {
    tweetlist: [],
    tweetlistId: '',
    key: '',
    auth: '',
    userID: '',
    histories: ['Example'],
    historyIds: ['Empty'] // TODO Empty Listen klappen nicht
  },
  mutations: {
    SET_TWEETLIST: (state, tweetlist) => {
      state.tweetlist = tweetlist
    },
    SET_TWEETLISTID: (state, id) => {
      state.tweetlistId = id
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
    ID_TO_HISTORYID: (state) => {
      if (state.historyIds[0] === 'Empty') {
        console.log('Was Empty')
        console.log(state.historyIds)
        state.historyIds = [state.tweetlistId]
        console.log(state.historyIds)
      } else {
        state.historyIds.push(state.tweetlistId)
      }
    }
  },
  actions: {
    loadTweets ({ commit, state }) {
      Vue.axios.get(`tweetlist/byKey?key=${state.key}`)
        .then(result => {
          console.log(result.data)
          commit('SET_TWEETLIST', result.data)
          commit('SET_TWEETLISTID', result.data._id)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    saveHistory ({ commit, dispatch, state }) {
      commit('KEY_TO_HISTORY')
      dispatch('loadTweets')
      commit('ID_TO_HISTORYID')
      Vue.axios.post(`history?user=${state.userID}`, state.historyIds).then(r => console.log(r.data))
    }
  },
  modules: {}
})
