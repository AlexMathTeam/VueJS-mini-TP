<template>
  <div class="container-accueil">
    <div class="div-photo-accueil">
      <div class="container-barre-recherche-accueil" ref="divPhotoAcceuil">
        <v-text-field
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Rechercher des restaurants "
          class="barre-recherche-accueil"
        ></v-text-field>
      </div>
    </div>
    <span class="span-accueil">Une envie de restaurant ? </span>
    <div class="recommendationAccueil">
      <Recommandation
        class="positionRecommandation"
        v-for="n in 4"
        v-bind:key="n"
      ></Recommandation>
    </div>
    <span class="span-accueil">Restaurant de la semaine</span>
    <div class="recommendationAccueil">
      <Recommandation
        class="positionRecommandation"
        v-for="n in 4"
        v-bind:key="n"
      ></Recommandation>
    </div>
    <span>{{ "teste filtre vuejs" | titlecase }}</span>
  </div>
</template>

<script>
import Filtres from "../../../modules/Filtres";
import Recommandation from "./Recommandation";

export default {
  components: { Recommandation },
  name: "Accueil",
  filters: Filtres,
  data: () => ({
    n: 1,
    restaurant: [
      {
        nom: "NomRestaurant1",
        cuisine: "Cuisine1",
      },
      {
        nom: "NomRestaurant2",
        cuisine: "Cuisine2",
      },
      {
        nom: "NomRestaurant3",
        cuisine: "Cuisine3",
      },
      {
        nom: "NomRestaurant4",
        cuisine: "Cuisine4",
      },
      {
        nom: "NomRestaurant5",
        cuisine: "Cuisine5",
      },
      {
        nom: "NomRestaurant6",
        cuisine: "Cuisine6",
      },
      {
        nom: "NomRestaurant7",
        cuisine: "Cuisine7",
      },
      {
        nom: "NomRestaurant8",
        cuisine: "Cuisine8",
      },
    ],
  }),
  mounted() {},
  created() {
    window.addEventListener("scroll", this.barSearchHidden);
    this.$store.state.hideMenuSearch= false;
  },
  destroyed() {
    window.removeEventListener("scroll", this.barSearchHidden);
     this.$store.state.hideMenuSearch= true;
  },
  methods: {
    barSearchHidden() {
      const rect = this.$refs.divPhotoAcceuil.getBoundingClientRect();
      this.$store.state.hideMenuSearch = rect.y + rect.height < 100 - rect.height;
    },
  },
};
</script>

<style>
.recommendationAccueil {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 80px;
}
.positionRecommandation {
  margin-right: 15px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
}

.div-photo-accueil {
  display: flex;
  background-image: url(../../../assets/table-restaurant.png);
  height: 350px;
  width: 100vw;
  min-width: 500px;
  max-width: 750px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.barre-recherche-accueil {
  border-radius: 30px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  background-color: white;
}
.barre-recherche-accueil.v-input {
  flex: none;
}
.container-barre-recherche-accueil{
  width: 90%;
  height: max-content;
}
</style>