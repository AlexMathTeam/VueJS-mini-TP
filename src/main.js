import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

//Modules
import Routes from './modules/Routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  Routes,
  el: '#app',
  vuetify: new Vuetify(),
  
  render: h => h(App),
}).$mount('#app');
