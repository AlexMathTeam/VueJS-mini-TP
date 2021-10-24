<template>
  <div class="container-restaurant-detail">
    <article class="container-restaurant" v-if="restaurant !== undefined">
      <header></header>
      <main></main>
    </article>
    <div class="container-loader" v-else-if="load">
      <div class="container-spinner">
        <v-progress-circular
          indeterminate
          color="green"
          :size="100"
        ></v-progress-circular>
      </div>
    </div>
    <div class="container-msg-error" v-else></div>
  </div>
</template>

<script>
import { getRestaurantById } from "../../../modules/api/RestaurantsAPI";

export default {
  name: "Restaurant",
  data: () => ({
    id: "",
    restaurant: undefined,
    load: false,
    error: false,
  }),
  mounted() {
    this.id = this.$route.params.id;
    this.searchRestaurant();
  },
  methods: {
    async searchRestaurant() {
      try {
        this.load = true;
        this.error = false;
        this.restaurant = await getRestaurantById(this.id);
      } catch (exception) {
        this.error = true;
      } finally {
        this.load = false;
      }
    },
  },
};
</script>

<style>
.container-restaurants-detail {
  display: flex;
}
</style>