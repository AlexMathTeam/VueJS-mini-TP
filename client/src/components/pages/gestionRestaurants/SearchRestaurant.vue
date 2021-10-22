<template>
  <section class="container-search-restaurants">
    <header></header>
    <main>
      <div class="options">
        <v-text-field
          v-model="motsCle"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Rechercher des restaurants "
          @input="debounceSearch()"
        ></v-text-field>
      </div>
      <div class="restaurants">
        <AfficheRestaurant
          v-for="restaurant in restaurants"
          :key="restaurant"
          :restaurant="restaurant"
        ></AfficheRestaurant>
      </div>
    </main>
  </section>
</template>

<script>
import { getRestaurants } from "../../../modules/api/RestaurantsAPI";
import AfficheRestaurant from "../../commun/AfficheRestaurant.vue";

import _ from "lodash";

export default {
  name: "",
  components: {
    AfficheRestaurant,
  },
  data: () => ({
    page: 0,
    nbParPage: 20,
    name: "",
    restaurants: [],
    motsCle: "",
  }),
  mounted() {
    this.searchRestaurants();
  },
  methods: {
    searchRestaurants() {
      getRestaurants({
        page: this.page,
        pagesize: this.nbParPage,
        name: this.motsCle ?? '',
      })
        .then((res) => (this.restaurants = res.restaurants))
        .catch((err) => {
          console.log(err);
        });
    },
    debounceSearch: _.debounce(function () {
      (this.page = 0), this.searchRestaurants();
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

.container-search-restaurants > main {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: hidden;
}

.container-search-restaurants > main > .options {
  display: flex;
  justify-content: flex-start;
  width: 20%;
  height: 100%;
}

.container-search-restaurants > main > .restaurants {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  height: 100%;
}
</style>