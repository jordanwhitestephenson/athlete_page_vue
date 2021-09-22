<template>
  <div id="app" class="container">
    <b-nav type="dark" variant="info" tabs align="center">
      <b-nav-item> <router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item> <router-link to="/add">Add Athlete</router-link></b-nav-item>
      <b-nav-item>
        <router-link to="/delete">Delete Athlete</router-link></b-nav-item
      >
      <b-nav-item>
        <router-link to="/edit">Edit Athlete</router-link></b-nav-item
      >
    </b-nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {
  //   AddAthlete,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
