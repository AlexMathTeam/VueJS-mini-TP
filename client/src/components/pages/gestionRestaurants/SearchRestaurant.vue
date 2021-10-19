<template>
  <section class="container-search-restaurants">
    <header></header>
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
  width: 100%;
}
</style>