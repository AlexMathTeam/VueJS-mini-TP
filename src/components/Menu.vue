<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense >
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

      <v-btn elevation="0" @click="goTo('/')">
        <v-icon>mdi-magnify</v-icon>
        <span>Accueil</span>
      </v-btn>

      <v-btn elevation="0" @click="goTo('/hello')">
        <v-icon>mdi-heart</v-icon>
        <span>Les restaurants</span>
      </v-btn>

      <v-btn elevation="0">
        <v-icon>mdi-dots-vertical</v-icon>
        <span>Autour de vous</span>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style>
  .theme--light.v-btn.v-btn--has-bg {
    background-color: #fff !important;
  }
</style>