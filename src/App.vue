<template>
  <div id="app">
    <Menu></Menu>
    <main>
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

.menu {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: black;
  border-bottom: 1px black solid;
  
}

.menu > button {
  background: transparent;
  border: 0;
  padding: 15px 20px;
  cursor: pointer;
  color: white;
  transition: all .5s;
}

.menu > button:hover {
  background: #2c3e50;
}

main {
  margin-top: 90px;
}

</style>
