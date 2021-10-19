<template>
  <div id="app">
    <Menu></Menu>
    <main class="app">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Menu from './components/header/menus/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

main.app {
  margin-top: 100px;
}

</style>
