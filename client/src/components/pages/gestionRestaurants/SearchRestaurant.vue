<template>
  <section class="container-search-restaurants">
    <header>
      <v-text-field
        v-model="motsCle"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Rechercher des restaurants "
        @change="debounceSearch()"
      ></v-text-field>
    </header>
    <main>
      <AfficheRestaurant
        v-for="restaurant in restaurants"
        :key="restaurant"
        :restaurant="restaurant"
      ></AfficheRestaurant>
    </main>
  </section>
</template>

<script>
import { getRestaurants } from "../../../modules/api/RestaurantsAPI";
import AfficheRestaurant from "../../commun/AfficheRestaurant.vue";

import lodash from 'lodash';

export default {
  name: "",
  components: {
    AfficheRestaurant,
  },
  data: () => ({
    page: 0,
    nbParPage: 10,
    name: "",
    restaurants: [],
    motsCle = '',
  }),
  mounted() {
    this.searchRestaurants();
  },
  methods: {
    searchRestaurants() {
      getRestaurants({
        page: this.page,
        pagesize: this.nbParPage,
        name: this.name,
      })
        .then((res) => (this.restaurants = res.restaurants))
        .catch((err) => {
          console.log(err);
        });
    },
    debounceSearch: lodash.debounce(() => {
      this.page = 0,
      this.searchRestaurants();
    }, 300),
  },
};
</script>

<style>
.container-search-restaurants {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container-search-restaurants header {
  width: 100%;
}

.container-search-restaurants main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
</style>