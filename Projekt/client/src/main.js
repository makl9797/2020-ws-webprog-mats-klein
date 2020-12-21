import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin;
Vue.config.productionTip = false;
Vue.use(VueMasonryPlugin);
new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map