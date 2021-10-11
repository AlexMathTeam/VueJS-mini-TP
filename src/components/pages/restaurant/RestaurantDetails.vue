<template>
    <div class="container-restaurant-detail">

    </div>
</template>

<script>
import Restaurant from '../../../modules/modeles/Restaurant';

export default {
    name: 'Restaurant',
    props: {
        restaurant: Restaurant,
    },
    computed: {
        id: () => this.restaurant.id,
        name: () => this.restaurant.name,
        cuisine: () => this.restaurant.cuisine,
    }
}
</script>

<style>
    .container-restaurants-detail {
        display: flex;
    }
</style>