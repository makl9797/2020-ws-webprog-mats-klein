import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Auth0Plugin } from '@/auth'

const domain = require('../auth_config.json').domain
const clientId = require('../auth_config.json').clientId

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback (appState: { targetUrl: import('vue-router').RawLocation }) {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin

Vue.config.productionTip = false

// Axios
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://localhost:9000/'

// Masonry-Layout
Vue.use(VueMasonryPlugin)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
