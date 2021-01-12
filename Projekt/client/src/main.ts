import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ValidationProvider } from 'vee-validate'

const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin

Vue.config.productionTip = false

// Axios
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://localhost:9000/'

// Masonry-Layout
Vue.use(VueMasonryPlugin)

// Form-Validation (Vee-Validate)
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
