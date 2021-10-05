<template>
  <div class="container-table">
    <form @submit.prevent="ajouterRestaurant($event)">
      <label>
        Nom : <input name="name" type="text" required v-model="name" />
      </label>
      <label>
        Cuisine :
        <input name="cuisine" type="text" required v-model="cuisine" />
      </label>

      <button>Ajouter</button>
    </form>
    <h1>Nombre de restaurants : {{ nbRestaurant }}</h1>
    <p>
      Chercher par nom :
      <input
        @input="chercherRestaurant()"
        type="text"
        v-model="nomRestauRechercher"
      />
    </p>

    <div class="param-pagination">
      <md-button
        class="md-raised md-accent"
        :disabled="nbPage === 0"
        v-on:click="precedent()"
        >Précédent</md-button
      >
      <md-button class="md-raised md-primary" v-on:click="suivant()"
        >Suivant</md-button
      >
      <div class="range">
        <input
          type="range"
          name="Afficher"
          id="afficherPage"
          @change="nbParPageChange()"
          min="5"
          max="95"
          step="5"
          required
          v-model="taillePage"
        />
        <span>{{ taillePage }}</span>
      </div>
    </div>

    <md-table v-model="restaurants">
      <md-table-row
        @click="supprimerRestaurant(item)"
        slot="md-table-row"
        slot-scope="{ item, index }"
        :style="{ backgroundColor: getColor(index) }"
      >
        <md-table-cell md-label="Nom" md-sort-by="name">
          {{ item.name }}</md-table-cell>
        <md-table-cell md-label="Cuisine" md-sort-by="cuisine">
          {{ item.cuisine }}
        </md-table-cell>
        <md-table-cell md-label="Action">
          <router-link :to="'/restaurant/' + item._id">Détail du restaurant</router-link>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>


<script>
import _ from "lodash";
export default {
  name: "TableRestaurants",
  data: () => ({
    restaurants: [],
    name: "",
    cuisine: "",
    nbRestaurant: 0,
    nbPage: 1,
    taillePage: 10,
    nomRestauRechercher: "",
  }),
  methods: {
    supprimerRestaurant(r) {
      let url = "http://localhost:8080/api/restaurants/" + r._id;
      fetch(url, {
        method: "DELETE",
      })
        .then((responseJSON) => {
          responseJSON.json().then(() => {
            // Maintenant res est un vrai objet JavaScript
            this.getRestaurantsFromServer();
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    ajouterRestaurant(event) {
      // Récupération du formulaire. Pas besoin de document.querySelector
      // ou document.getElementById puisque c'est le formulaire qui a généré
      // l'événement
      let form = event.target;

      // Récupération des valeurs des champs du formulaire
      // en prévision d'un envoi multipart en ajax/fetch
      let donneesFormulaire = new FormData(form);

      let url = "http://localhost:8080/api/restaurants";

      fetch(url, {
        method: "POST",
        body: donneesFormulaire,
      })
        .then((responseJSON) => {
          responseJSON.json().then(() => {
            // Maintenant res est un vrai objet JavaScript
            this.getRestaurantsFromServer();
          });
        })
        .catch(function (err) {
          console.log(err);
        });
      this.name = "";
      this.cuisine = "";
    },
    getColor(index) {
      return index % 2 ? "#F5F5F5" : "#BDBDBD";
    },
    getRestaurantsFromServer() {
      let url = `http://localhost:8080/api/restaurants?page=${this.nbPage}&pagesize=${this.taillePage}&name=${this.nomRestauRechercher}`;

      fetch(url)
        .then((responseJSON) => {
          responseJSON.json().then((res) => {
            this.restaurants = res.data ?? [];
            this.nbRestaurant = res.count ?? 0;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    suivant() {
      this.nbPage++;
      this.getRestaurantsFromServer();
    },
    precedent() {
      if (this.nbPage > 0) {
        this.nbPage--;
        this.getRestaurantsFromServer();
      }
    },

    nbParPageChange() {
      this.getRestaurantsFromServer();
    },
    chercherRestaurant: _.debounce(function () {
      this.nbPage = 0;
      this.getRestaurantsFromServer();
    }, 300),
  },
  mounted() {
    console.log("AVANT RENDU HTML");
    this.getRestaurantsFromServer();
  },
};
</script>

<style scoped lang="css">

.param-pagination {
  display: flex;
  height: min-content;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.param-pagination > *:not(:last-child) {
    margin-right: 15px;
}

.range {
    display: flex;
    height: min-content;
    flex-direction: row;
    flex-wrap: nowrap;
    min-width: 100px;
    align-content: center;
}

.md-table {
  width: 100vw;
  max-width: 1000px;
  min-width: 150px;
  margin: 0 auto;
}
.md-table-head-label,
.md-table .md-table-cell .md-table-cell-container {
  width: max-content;
}

.md-table + .md-table {
  margin-top: 16px;
}
</style>
