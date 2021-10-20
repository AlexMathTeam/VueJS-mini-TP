<template>
  <v-form v-model="valid">
    <v-container>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Nom du restaurant"
        required
      ></v-text-field>
      <v-text-field
        v-model="cuisine"
        :rules="nameRules"
        label="Type de cuisine"
        required
      ></v-text-field>
      <v-text-field
        v-model="borough"
        :rules="emailRules"
        label="Ville"
        required
      ></v-text-field>
      <v-text-field
        v-model="street"
        :rules="emailRules"
        label="Adresse"
        required
      ></v-text-field>
      <v-text-field
        v-model="coord"
        :rules="emailRules"
        label="Localision (0.000000, 0.00000)"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="validate">
        Validate
      </v-btn>
      <v-btn class="mr-4" @click="clear">
        Effacer
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { post } from '../../../modules/api/API';

export default {
  name: "AddRestaurant",

  data: () => ({
    name: "",
    cuisine: "",
    borough: "",
    street: "",
    coord: "",
  }),
  methods: {
    clear() {
      this.name = "";
      this.cuisine = "";
      this.borough = "";
      this.street = "";
      this.coord = "";
    },
    validate() {
        post('restaurants',{name:this.name,cusine:this.cuisine,borough: this.borough, street:this.street,coord:this.coord})
    },
  },
};
</script>

<style>
</style>