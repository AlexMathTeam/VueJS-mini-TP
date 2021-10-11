<template>
  <div class="container-aff-restau">

  </div>
</template>

<script>
import Restaurant from '../../modules/modeles/Restaurant'

export default {
    name: 'AfficheRestaurant',
    props: {
        restaurant: Restaurant,
    },
    methods: {
        goToDetails() {
            if (!!this.restaurant) {
                this.$router.push({name: 'restaurant', params: {id: this.restaurant.id}});
            }
        }
    }
}
</script>

<style>
    .container-aff-restau {
        display: flex;
    }
</style>