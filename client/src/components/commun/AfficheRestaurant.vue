<template>
  <div class="affichage-restaurant">
    <div class="container-aff-restau" @click="goToDetails()">
      <div class="container-image"></div>
      <div class="container-infos">
        <div class="header">{{ name }}</div>
        <div class="body">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Restaurant from "../../modules/modeles/Restaurant";
import Grade from "../../modules/modeles/Grade";

export default {
  name: "AfficheRestaurant",
  props: {
    restaurant: {
      type: Restaurant,
      required: true,
    },
  },
  computed: {
    id() {
      return this.restaurant.id ?? "";
    },
    name() {
      return this.restaurant.name ?? "";
    },
    cuisine() {
      return this.restaurant.cuisine ?? "";
    },
    grade() {
      return Array.from(this.restaurant.grades ?? []).reduce(
        (previous = new Grade(), current = new Grade()) =>
          (previous.score ?? 0) + (current.score ?? 0)
      );
    },
  },
  methods: {
    goToDetails() {
      if (this.restaurant) {
        this.$router.push({ path: `/restaurant/${this.id}`});
      }
    },
  },
};
</script>

<style>
.affichage-restaurant {
  width: calc(25% - 20px);
  height: 35%;
  min-width: 200px;
  min-height: 225px;
  max-width: 250px;
  max-height: 275px;
  padding: 0 10px 20px 10px;
}

.container-aff-restau {
  width: 100%;
  height: 100%;  
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 50%);
  z-index: 0;
  cursor: pointer;
}

.container-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url(../../assets/restaurant.jpg);
  background-position: top;
  background-size: 120%;
}

.container-image img {
  width: 100%;
  height: 100%;
}

.container-infos {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: translateY(70%);
  transform-origin: bottom;
  z-index: 2;
  background-color: #fff;
  color: #000;

  transition: background-color 0.2s ease, color 0.2s ease, transform 0.4s ease;
}

.container-infos > .header {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 100%;
    height: 30%;
    padding: 7px 0;
    font-size: 1em;
    font-weight: bold;
}

.container-infos > .body {
    display: flex;
    flex-direction: column;
    height: 70%;
    padding-bottom: 10px;
}

.container-aff-restau:hover .container-infos {
  background-color: rgba(0, 0, 0, 0.75);
  transform: translateY(0%);
  color: #fff;
}
</style>