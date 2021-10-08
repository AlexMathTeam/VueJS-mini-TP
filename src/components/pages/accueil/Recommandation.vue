<template>
  <v-card class="mx-auto" max-width="300" tile>
    <div @click="goTo(route)">
      <v-img
        max-height="250"
        max-width="300"
        :src="require('../../../assets/restaurant.png')"
      >
      </v-img>
      <span>Restaurant Miam Miam</span>
      <br />
      <span>Cuisine Française</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Recommandation",
  data: () => ({
    route: "/restaurants",
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
</style>