<template>
  <div class="container-recommandation" @click="goTo(route)">
    <div class="container-img">
      <img src="../../../assets/restaurant.png" />
    </div>
    <div class="container-details">
      <span>Restaurant Miam miam</span>
      <span>Cuisine Française</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommandation",
  data: () => ({
    route: "/restaurants",
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
  .container-recommandation {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100vw;
    min-width: 200px;
    max-width: 300px;
    height: 100vh;
    min-height: 350px;
    max-height: 400px;
    cursor: pointer;
  }

  .container-recommandation > .container-img {
    width: 100%;
  }

  .container-recommandation > .container-img > img {
    width: 100%;
  }
  img{
      border-radius: 5px;
  }

  .container-recommandation > .container-details {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: max-content;
  }

  .container-recommandation > .container-details > span {

  }
</style>