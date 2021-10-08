<template>
  <v-toolbar dense>
    <v-avatar>
      <img src="../../../assets/logo.png" />
    </v-avatar>

    <v-spacer></v-spacer>

    <v-text-field
      v-model="search"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Rechercher des restaurants "
    ></v-text-field>

    <v-spacer></v-spacer>

    <template v-for="page in pages">
      <v-btn v-bind:key="page" elevation="0" @click="goTo(page.route)">
        <v-icon>{{ page.icon }}</v-icon>
        <span>{{ page.name }}</span>
      </v-btn>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    pages: [
      {
        route: "/",
        name: "Accueil",
        icon: "mdi-home",
      },
      {
        route: "/restaurants",
        name: "Restaurants",
        icon: "mdi-silverware-fork-knife",
      },
      {
        route: "/trouver",
        name: "Autour de vous",
        icon: "mdi-map-marker",
      },
    ],
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.theme--light.v-btn.v-btn--has-bg {
  background-color: #fff !important;
}

.v-toolbar {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  height: max-content !important;
  padding-bottom: 10px;
  padding-top: 5px;
  min-width: max-content;
}
</style>