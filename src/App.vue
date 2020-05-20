<template>
  <div id="app" class="fullscreen">
    <div class="main-view">
      <router-view />
    </div>
    <div id="nav" class="flex-space-around padding-sides">
      <router-link class="margin-right" to="/moodtracker">Mood</router-link>
      <router-link class="margin-right" to="/breathing-exercise">Breath</router-link>
      <router-link class="margin-right" to="/">Home</router-link>
      <router-link class="margin-right" to="/chat">Chat</router-link>
      <router-link class="margin-right" to="/therapy">Therapy</router-link>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  font-size: 10px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  padding: 3rem;
}

.main-view {
  flex-grow: 1;
  flex: 1;
}
.fullscreen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

#nav {
  width: 100%;
}
.flex-space-around {
  display: flex;
  justify-content: space-around;
}
.flex-space-between {
  display: flex;
  justify-content: space-between;
}
.padding-sides {
  padding: 0 2.5rem;
}
a {
  font-size: 2rem;
  text-decoration: none;
  margin-bottom: 5px;
}
.margin-right {
  margin-right: 1rem;
}
</style>
