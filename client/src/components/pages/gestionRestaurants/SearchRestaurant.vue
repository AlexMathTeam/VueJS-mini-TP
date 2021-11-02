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
        style="max-width: 330px"
        @input="debounceReset()"
      ></v-text-field>
      <v-pagination
        v-model="page"
        :length="paginationLength"
        :total-visible="6"
        color="green darken-2"
        @input="paginationChange()"
        v-if="!load && msg === undefined"
      ></v-pagination>
      <v-select
        v-model="nbParPage"
        v-on:change="searchRestaurants"
        :items="itemsNbParPage"
        solo
        @input="paginationChange()"
        v-if="!load && msg === undefined"
      ></v-select>
    </header>
    <main v-bind:class="{ loader: load }">
      <div class="restaurants" v-if="!load && msg === undefined">
        <AfficheRestaurant
          v-for="(restaurant, index) in restaurants"
          :key="index"
          :restaurant="restaurant"
        ></AfficheRestaurant>
      </div>
      <div class="container-spinner" v-else-if="load">
        <v-progress-circular
          indeterminate
          color="green"
          :size="100"
        ></v-progress-circular>
      </div>
      <div class="msg" v-else></div>
    </main>
  </section>
</template>

<script>
import { getRestaurants } from "../../../modules/api/RestaurantsAPI";
import { timeout } from "../../../modules/api/Utils";
import AfficheRestaurant from "../../commun/AfficheRestaurant.vue";

import _ from "lodash";

export default {
  name: "SearchRestaurant",
  components: {
    AfficheRestaurant,
  },
  data: () => ({
    page: 1,
    nbParPage: 20,
    itemsNbParPage: [5, 10, 15, 20, 30],
    name: "",
    restaurants: [],
    count: 0,
    motsCle: "",
    load: false,
    msg: undefined,
  }),
  computed: {
    paginationLength() {
      return Math.ceil(this.count / this.nbParPage);
    },
  },
  mounted() {
    window.scroll(0, 0);
    this.$store.state.printMenuSearch = false;
    this.motsCle = this.$store.state.motsclesRestaurants;
    this.searchRestaurants();
    this.$store.state.motsclesRestaurants = "";
  },
  methods: {
    async searchRestaurants() {
      try {
        this.load = true;
        const page = this.page - 1;
        this.msg = undefined;
        await timeout(1000);
        const res = await getRestaurants({
          page: page >= 0 ? page : 0,
          pagesize: this.nbParPage,
          name: this.motsCle ?? "",
        });
        this.restaurants = res.restaurants;
        this.count = res.count;
        if (this.restaurants.length < 0) {
          this.msg = "Aucun restaurant trouvé";
        }
      } catch (exception) {
        this.restaurants = [];
        this.msg = "Une erreur est survenue";
      } finally {
        this.load = false;
      }
    },
    reset() {
      this.page = 1;
      this.searchRestaurants();
    },
    debounceSearch: _.debounce(function () {
      this.searchRestaurants();
    }, 300),
    debounceReset: _.debounce(function () {
      this.reset();
    }, 300),
    paginationChange() {
      this.load = true;
      this.debounceSearch();
    },
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
}

.container-search-restaurants header > .container-search-bar {
  width: 35%;
}

.container-search-restaurants header > .pagination {
  display: flex;
  flex-direction: row;
  width: 65%;
  justify-content: space-between;
}

.container-search-restaurants > main {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.container-search-restaurants > main.loader {
  align-items: flex-start;
  min-height: 200px;
  height: 50%;
}

.container-search-restaurants > main > .restaurants {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.container-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60%;
}
</style>