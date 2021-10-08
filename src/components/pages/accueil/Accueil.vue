<template>
  <div class="container-accueil">
    
      <spin>Une envie de restaurant ? </spin>
      <div class="recommendationAccueil" > 
    <Recommandation class="positionRecommandation" v-for="n in 4" v-bind:key="n"></Recommandation>    
    </div>
    <spin>Restaurant de la semaine</spin>
    <div class="recommendationAccueil" >
    <Recommandation class="positionRecommandation" v-for="n in 4" v-bind:key="n"></Recommandation>  
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
    n:1,
    restaurant: [
      {
      nom:'NomRestaurant1',
      cuisine:'Cuisine1'
    },
    {
      nom:'NomRestaurant2',
      cuisine:'Cuisine2'
    },
    {
      nom:'NomRestaurant3',
      cuisine:'Cuisine3'
    },
    {
      nom:'NomRestaurant4',
      cuisine:'Cuisine4'
    },
    {
      nom:'NomRestaurant5',
      cuisine:'Cuisine5'
    },
    {
      nom:'NomRestaurant6',
      cuisine:'Cuisine6'
    },
    {
      nom:'NomRestaurant7',
      cuisine:'Cuisine7'
    },
    {
      nom:'NomRestaurant8',
      cuisine:'Cuisine8'
    }
    ]}),

  mounted() { },
};
</script>

<style>
.recommendationAccueil{
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 80px;

}
.positionRecommandation{
    margin-right: 15px;
}

</style>