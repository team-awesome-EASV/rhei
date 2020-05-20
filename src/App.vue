<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/moodtracker">Moodtracker</router-link>
      <router-link to="/breathing-exercise">Breathing exercice</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/chat">Chat</router-link>
      <router-link to="/therapy">Therapy</router-link>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  font-size: 10px;
}

#app {
  min-height: 100vh;
  display: flex;
}

#nav {
  font-size: 2rem;
}
</style>
