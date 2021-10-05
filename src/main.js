import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import TableRestaurants from "./components/TableRestaurants";
import DetailsRestaurant from "./components/DetailsRestaurant";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: TableRestaurants,
    },
    {
      path: '/restaurant/:id',
      component: DetailsRestaurant
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
  render: h => h(App),
}).$mount('#app')
