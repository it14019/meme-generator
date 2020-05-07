<template>
  <div id="app">
    <div id="nav">
      <router-link id="home-spacing" to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/other">Vel viena</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: white;
  background-color: #28a745;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
}
#nav a:hover {
  background-color: green;
  text-decoration: none;
}

#home-spacing {
  margin-right: 30px;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
