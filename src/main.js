import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

//Components
import Accueil from './components/pages/accueil/Accueil';
import GestionRestaurants from './components/pages/gestionRestaurants/GestionRestaurants';
import FindRestaurants from './components/pages/findRestaurants/FindRestaurants';
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Accueil,
    },
    {
      path: '/restaurants',
      component: GestionRestaurants,
    },
    {
      path: '/trouver',
      component: FindRestaurants,
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
  store,
  render: h => h(App)
}).$mount('#app')
