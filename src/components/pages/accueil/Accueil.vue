<template>
  <div class="container-accueil">
      <Recommandation></Recommandation>
      <span>{{ 'teste filtre vuejs' | titlecase }}</span>
  </div>
</template>

<script>
import Filtres from '../../../modules/Filtres';
import Recommandation from './Recommandation';

export default {
  components: { Recommandation },
  name: 'Accueil',
  filters: Filtres,
}
</script>

<style>

</style>