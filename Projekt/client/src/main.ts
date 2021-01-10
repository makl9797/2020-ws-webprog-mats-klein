import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMasonryPlugin)
Vue.axios.defaults.baseURL = 'http://localhost:9000/'

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
