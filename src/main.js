import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import HelloWord from "./components/HelloWorld";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HelloWord,
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
});

new Vue({
  router,
  el: '#app',
  vuetify: new Vuetify(),
  
  render: h => h(App),
}).$mount('#app')
