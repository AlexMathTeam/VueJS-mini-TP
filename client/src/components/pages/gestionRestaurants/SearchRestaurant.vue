<template>
  <section class="container-search-restaurants">
    <header>
      <div class="container-search-bar">
        <v-text-field
          v-model="motsCle"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Rechercher des restaurants "
          @input="debounceReset()"
        ></v-text-field>
      </div>
      <div class="pagination">
        <div class="number-page">
          <v-pagination
            v-model="page"
            :length="paginationLength"
            :total-visible="6"
            @input="paginationChange()"
          ></v-pagination>
        </div>
        <div class="nb-el-page">
          <v-select
            v-model="nbParPage"
            v-on:change="searchRestaurants"
            :items="itemsNbParPage"
            @input="paginationChange()"
          ></v-select>
        </div>
      </div>
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
  name: "",
  components: {
    AfficheRestaurant,
  },
  data: () => ({
    page: 1,
    nbParPage: 20,
    itemsNbParPage: Array(4)
      .fill(0)
      .map((x, index) => 5 * (index + 1)),
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
    this.searchRestaurants();
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
  height: 100%;
}

.container-search-restaurants header {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.container-search-restaurants header > .container-search-bar {
  width: 25%;
}

.container-search-restaurants header > .pagination {
  display: flex;
  flex-direction: row;
  width: 75%;
}

.container-search-restaurants > main {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100%;
}

.container-search-restaurants > main.loader {
  align-items: flex-start;
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