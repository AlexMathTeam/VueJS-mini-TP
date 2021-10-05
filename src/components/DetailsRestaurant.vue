<template>
  <div class="container-detail">
    <div>Détail restaurant {{ id }}</div>
    <ul v-if="restaurant !== undefined">
      <li>Nom: {{ restaurant.name }}</li>
      <li>Cuisine: {{ restaurant.cuisine }}</li>
      <li>Ville: {{ restaurant.borough }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailsRestaurant",
  data: () => ({
    restaurant: undefined,
  }),
  mounted() {
    console.log(`Création du componant Détail Restaurant ${this.id}`);
    const url = `http://localhost:8080/api/restaurants/${this.id}`;
    fetch(url).then(reponseJSON => {
      return reponseJSON.json();
    }).then(res => {
      this.restaurant = res.restaurant;
    }).catch(() => {
      this.restaurant = undefined;
    });
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
}
</script>

<style scoped>
  .container-detail * {
    width: max-content;
  }
</style>
