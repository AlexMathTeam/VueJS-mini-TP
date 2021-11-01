import Vue from 'vue';
import App from './App.vue';

//Extentions VueJS
import VueRouter from "vue-router";
import store from './store'

//Packages
//->Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
//->Leaflet
import 'leaflet/dist/leaflet.css';

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
