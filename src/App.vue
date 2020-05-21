<template>
  <div id="app" class="fullscreen">
    <div class="main-view">
      <router-view />
    </div>
    <div id="nav">
      <Navigation></Navigation>
<!--      <router-link class="margin-right" to="/moodtracker">Mood</router-link>-->
<!--      <router-link class="margin-right" to="/breathing-exercise"-->
<!--        >Breath</router-link-->
<!--      >-->
<!--      <router-link class="margin-right" to="/">Home</router-link>-->
<!--      <router-link class="margin-right" to="/chat">Chat</router-link>-->
<!--      <router-link class="margin-right" to="/therapy">Therapy</router-link>-->
    </div>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation.vue";
  export default {
    components: {
      Navigation: Navigation
    }
  }
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  --main-accent-color: #0317ef;
  --secondary-background-color: #fcfbf0;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}

body{
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  /*padding: 3rem;*/
  overflow: hidden;
  width: 100vw;
  background-color: var(--secondary-background-color);
}

h1 {
  font-size: 3.2rem;
  font-weight: normal;
}
ul {
  list-style-type: none;
}
a {
  font-size: 1.4rem;
  text-decoration: none;
  margin-bottom: 5px;
  color: var(--main-accent-color);
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

.flex-space-between {
  display: flex;
  justify-content: space-between;
}
.padding-sides {
  padding: 0 2rem;
}
.padding-all {
  padding: 2rem;
}

.margin-right {
  margin-right: 1rem;
}
.vertical-allign-bottom {
  align-self: flex-end;
}

.outer-shadow {
  border-radius: 22px;
  box-shadow: 8px 8px 16px #d3d4db, -8px -8px 16px #ffffff;
}

.inner-shadow {
  border-radius: 10px;
  box-shadow: inset 8px 8px 16px #d3d4db, inset -8px -8px 16px #ffffff;
}
</style>
