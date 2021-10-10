import Accueil from './components/pages/accueil/Accueil';
import GestionRestaurants from './components/pages/gestionRestaurants/GestionRestaurants';
import FindRestaurants from './components/pages/findRestaurants/FindRestaurants';
import RestaurantDetails from '../components/pages/restaurant/RestaurantDetails'

const { default: VueRouter } = require("vue-router");

const routes = new VueRouter({
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
            path: '/restaurant/:id',
            component: RestaurantDetails,
        },
        {
            path: '/trouver',
            component: FindRestaurants,
            /* children: [
                {
                    path: '/',
                    component: ,
                },
                {
                    path: '/:id',
                    component: ,
                },
                {
                    path: '*',
                    redirect: '/',
                }
            ] */
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    mode: 'history'
});

export default routes;