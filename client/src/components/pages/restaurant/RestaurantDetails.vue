<template>
  <div class="container-restaurant-detail">
      <div v-if="restaurant !== undefined">{{ name }}</div>
  </div>
</template>

<script>
import { getRestaurantById } from "../../../modules/api/RestaurantsAPI";
import ObjIsNull from '../../../modules/ObjIsNull';

export default {
  name: "Restaurant",
  data: () => ({
    id: "",
    restaurant: undefined,
    load: false,
    msg: undefined,
  }),
  mounted() {
    this.id = this.$route.params.id;
    this.getRestaurant();
  },
  computed: {
    name() { return this.restaurant.name ?? ""; },
    cuisine() { return this.restaurant.cuisine ?? ""; },
  },
  methods: {
    async getRestaurant() {
      try {
        this.load = true;
        this.restaurant = await getRestaurantById(this.id);
        this.msg = ObjIsNull(this.restaurant) ? "Le restaurant que vous cherchez n'existe pas" : undefined;
      } catch (exception) {
        this.msg = "Une erreur est sur venue";
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