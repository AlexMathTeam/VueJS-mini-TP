<template>
  <div class="container-restaurant-detail">
    <article class="container-restaurant" v-if="restaurant !== undefined">
      <header v-bind:style="headerBackground">
        {{ restaurant.name | uppercase }}
      </header>
      <main>
        <div class="data">

        </div>
        <div class="adresse">
          <div class="data-adresse"></div>
          <div class="container-map-restaurant">
            <Map
              :center="restaurant.adresse.coord"
              :zoom="3"
              :restaurants="[restaurant]"
            ></Map>
          </div>
        </div>
      </main>
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
import Filtres from "../../../modules/Filtres";
import ObjIsNull from "../../../modules/ObjIsNull";
import Map from "../../commun/Map.vue";

export default {
  name: "Restaurant",
  components: {
    Map,
  },
  props: {
    image: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    id: "",
    restaurant: undefined,
    load: false,
    error: false,
  }),
  mounted() {
    //search Restaurant by id in url
    this.id = this.$route.params.id;
    this.searchRestaurant();
  },
  computed: {
    headerBackground() {
      console.log(this.image);
      return !ObjIsNull(this.image)
        ? {
            backgroundImage: `url("${this.image}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }
        : { background: "green" };
    },
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
    print(e) {
      console.log(e);
    },
  },
  filters: Filtres,
};
</script>

<style>
.container-restaurant-detail {
  width: 100%;
  height: 100%;
  display: flex;
}

.container-restaurant {
  width: 100%;
  height: 100%;
}

.container-restaurant > header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35%;
  min-height: 150px;
  max-height: 200px;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}

.container-restaurant > main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65%;
}

.data {
  display: flex;
  height: 50%;
  background: rgb(243, 243, 243);
}

.adresse {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
}

.data-adresse {
  width: 40%;
  height: 100%;
}

.container-map-restaurant {
  width: 60%;
  height: 100%;
}
</style>