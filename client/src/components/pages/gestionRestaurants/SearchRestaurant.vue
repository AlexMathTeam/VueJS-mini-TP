<template>
  <section class="container-search-restaurants">
    <header>
      <v-text-field
        v-model="motsCle"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Rechercher des restaurants "
        @input="debounceSearch()"
      ></v-text-field>
    </header>
    <main>
      <template v-if="!load">
        <div class="restaurants" v-if="msg === undefined">
          <AfficheRestaurant
            v-for="(restaurant, index) in restaurants"
            :key="index"
            :restaurant="restaurant"
          ></AfficheRestaurant>
        </div>
        <div class="msg" v-else>

        </div>
      </template>
      <template v-else>

      </template>
    </main>
  </section>
</template>

<script>
import { getRestaurants } from "../../../modules/api/RestaurantsAPI";
import AfficheRestaurant from "../../commun/AfficheRestaurant.vue";

import _ from "lodash";

export default {
  name: "",
  components: {
    AfficheRestaurant,
  },
  data: () => ({
    page: 0,
    nbParPage: 20,
    name: "",
    restaurants: [],
    count: 0,
    motsCle: "",
    load: false,
    msg: undefined,
  }),
  mounted() {
    this.searchRestaurants();
  },
  methods: {
    async searchRestaurants() {
      try {
        this.load = true;
        const res = await getRestaurants({
          page: this.page,
          pagesize: this.nbParPage,
          name: this.motsCle ?? "",
        });
        this.restaurants = res.restaurants;
        this.count = res.count;
        if (this.restaurants.length < 0) {
          this.msg = "Aucun restaurant trouvé";
        } else {
          this.msg = undefined;
        }
      } catch (exception) {
        this.restaurants = [];
        this.msg = "Une erreur est survenue";
      } finally {
        this.load = false;
      }
    },
    debounceSearch: _.debounce(function () {
      (this.page = 0), this.searchRestaurants();
    }, 300),
  },
};
</script>

<style>
.container-search-restaurants {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.container-search-restaurants header {
  width: 100%;
}

.container-search-restaurants > main {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: hidden;
}

.container-search-restaurants > main > .restaurants {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  height: 100%;
}
</style>