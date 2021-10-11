import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

//Modules
import Router from './modules/Router';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router: Router,
  render: h => h(App),
}).$mount('#app');
