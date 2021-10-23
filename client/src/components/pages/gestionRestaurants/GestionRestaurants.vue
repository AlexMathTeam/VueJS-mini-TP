<template>
  <div class="container-gestion-restaurants">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'GestionRestaurants',
}
</script>

<style>
.container-gestion-restaurants {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
}
</style>