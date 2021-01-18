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
    histories: {
      ids: [],
      names: []
    }
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      state.histories.names.push(state.key)
    },
    ID_TO_HISTORYID: (state) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      state.histories.ids.push(state.tweetlistId)
    },
    LOAD_HISTORY: (state, history) => {
      state.histories.ids = history.tweetLists
      state.histories.names = history.keywords
    }
  },
  actions: {
    loadTweets ({ commit, state }) {
      Vue.axios.get(`tweetlist/byKey?key=${state.key}`)
        .then(result => {
          commit('SET_TWEETLIST', result.data)
          commit('SET_TWEETLISTID', result.data._id)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    async saveHistory ({ commit, dispatch, state }) {
      commit('KEY_TO_HISTORY')
      await dispatch('loadTweets')
      commit('ID_TO_HISTORYID')
      Vue.axios.post(`history?user=${state.userID}`, state.histories).then(r => console.log(r.data))
    },
    loadHistory ({ state, commit }) {
      Vue.axios.get(`history?user=${state.userID}`)
        .then(result => {
          commit('LOAD_HISTORY', result)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    }
  },
  modules: {}
})
