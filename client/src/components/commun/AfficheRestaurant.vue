<template>
  <div class="container-aff-restau">
      <div class="container-image">
          <!-- <img :src="urlPicture" :alt="alt"/> -->
      </div>
      <div class="container-infos">

      </div>
  </div>
</template>

<script>
import Restaurant from '../../modules/modeles/Restaurant';
import Grade from '../../modules/modeles/Grade';

export default {
    name: 'AfficheRestaurant',
    props: {
        restaurant: Restaurant,
        img: {
            url: String,
            alt: String
        }
    },
    computed: {
        id() {
            return this.restaurant.id ?? '';
        },
        name() {
            return this.restaurant.name ?? '';
        },
        cuisine() {
            return this.restaurant.cuisine ?? '';
        },
        grade() {
            return Array.from(this.restaurant.grades ?? []).reduce((previous = new Grade(), current = new Grade()) => (previous.score ?? 0) + (current.score ?? 0));
        },
    },
    methods: {
        goToDetails() {
            if (this.restaurant) {
                this.$router.push({name: 'restaurant', params: { id: this.id }});
            }
        }
    }
}
</script>

<style>
    .container-aff-restau {
        position: relative;
        width: 125px;
        height: 125px;
        border-radius: 5px;
        overflow: hidden;
        z-index: 0;
    }

    .container-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .container-infos {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        transform: translateY(75%);
        transform-origin: bottom;
        z-index: 2;
        background-color: #fff;
        color: #000;

        transition: background-color .2s ease, color .2s ease, transform .4s ease;

    }

    .container-aff-restau:hover .container-infos {
        background-color: rgba(0, 0, 0, .75);
        transform: translateY(0%);
        color: #fff;
    }
</style>