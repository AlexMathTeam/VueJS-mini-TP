<template>
  <div class="divBarreMenu">
    <ul>
      <li><v-icon medium class="titleBarreMenu">Gestion restaurant</v-icon></li>
      <li class="liBarreMenu">
        <v-icon>mdi-silverware-fork-knife</v-icon>
        <button class="buttonBarreMenu">Liste des restaurants</button>
      </li>
      <li class="liBarreMenu">
        <v-icon>mdi-silverware-fork-knife</v-icon
        ><button class="buttonBarreMenu">Ajouter un restaurant</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "BarreMenu",
  data: () => ({
    inset: true,
    items: [
      {
        action: "mdi-label",
        title: "List item 1",
        route: "/restaurants",
      },
      {
        divider: true,
      },
      {
        action: "mdi-label",
        title: "List item 2",
        route: "/",
      },
    ],
    methods: {
      goTo(route) {
        this.$router.push(route);
      },
    },
  }),
};
</script>
<style>
.divBarreMenu {
  position: fixed;
  justify-content: left;
  width: 100vw;
  max-width: 20%;
  min-width: 130px;
  height: 100vw;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  padding-top: 30px;
}

@media screen and (max-width: 700px) {
  .liBarreMenu{
    padding:5px 15px !important;
  }
}

.liBarreMenu {
  border-radius: 30px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
  background-color: white;
  margin: 10px;
  padding: 15px 25px;
}

.theme--light.v-icon {
  color: rgb(0, 0, 0);
}

.titleBarreMenu{
  font-size: 1em;
}
</style>