<template>
  <div class="container-gestion-restaurants">
    GestionRestaurants PRET!!!
  </div>
</template>

<script>
import { getRestaurants } from '../../../modules/api/RestaurantsAPI';

export default {
  name: 'GestionRestaurants',
  data: () => ({
    page: 0,
    nbParPage: 20,
    name: undefined,
    restaurants: [],
  }),
  mounted() {
    this.searchRestaurants();
  },
  methods: {
    searchRestaurants() {
      getRestaurants({page: this.page, pageSize: this.nbParPage, name: this.name}).then(
        res => this.restaurants = res
      ).catch(err => {
        console.log(err)
      });
    }
  }
}
</script>

<style>

</style>