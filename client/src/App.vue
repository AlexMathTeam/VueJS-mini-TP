<template>
  <div id="app">
    <Menu></Menu>
    <main class="app" :style="{ marginTop, height }">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Menu from "./components/header/menus/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
  watch: {
    $route(to) {
      this.marginTop = this.updateMarginTop(to.path);
    },
  },
  data() {
    return {
      marginTop: this.updateMarginTop(this.$route.path),
    };
  },
  computed: {
    height() {
      return `calc(100vw - ${this.marginTop})`;
    }
  },
  methods: {
    updateMarginTop(path) {
      switch (path) {
        case "/":
          return "120px";
        default:
          return "64px";
      }
    },
  },
};
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
  height: calc(100vh - 100px);
}
</style>
