import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store'

//Modules
import router from './modules/Router';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  store,
  router,
  render: h => h(App)
}).$mount('#app')
