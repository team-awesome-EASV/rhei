<template>
  <div class="nav-container">
    <div class="home-button">
      <router-link to="/">
        <i class="las la-house-damage"></i>
      </router-link>
    </div>
    <div class="nav-wrapper">
      <div class="icons-row">
        <li
          class="shuffle"
          v-for="(link, index) in navLinksLeft"
          v-bind:key="index"
        >
          <router-link :to="link.path">
            <div class="links-center">
              <app-icon class="actiwes" :icon="link.icon"></app-icon>
              <label class="nav-label">{{link.name}}</label>
            </div>
          </router-link>
        </li>
      </div>
      <div class="icons-row">
        <li
          class="shuffle"
          v-for="(link, index) in navLinksRight"
          v-bind:key="index"
        >
          <router-link :to="link.path">
            <div class="links-center">
              <app-icon :icon="link.icon"></app-icon>
               <label class="nav-label">{{link.name}}</label>
            </div>
          </router-link>
        </li>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0"
      height="0"
      viewBox="0 0 747.82 180.36"
    >
      <defs>
        <clipPath
          id="clipped"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.00133722018 0.00554446662)"
        >
          <path
            d="M747.8 62.7v91.8a25.9 25.9 0 0 1-25.9 25.9h-696A25.9 25.9 0 0 1 0 154.5V62.7A62.7 62.7 0 0 1 62.7 0H274.2a36.1 36.1 0 0 1 27.5 12.3c17.2 20 43.1 39.4 72.3 39.4S429 32.4 446.2 12.3A36.1 36.1 0 0 1 473.7 0H685.1A62.7 62.7 0 0 1 747.8 62.7Z"
            fill="none"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
import AppIcon from "../components/AppIcon.vue";

export default {
  components: {
    AppIcon
  },
  data() {
    return {
      navLinksLeft: [
        { name: "track mood", path: "/moodtracker", icon: "moodtracker" },
        { name: "chat", path: "/chat", icon: "chat" }
      ],
      navLinksRight: [
        { name: "calm down", path: "/calm-down", icon: "calm" },
        { name: "therapy", path: "/therapy", icon: "premium" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav li.router-link-active,
nav li.router-link-exact-active {
  fill: indianred;
  cursor: pointer;
}

.actiwes {
  fill: black;
}

.nav-container {
  width: 100%;
  height: 10%;
  filter: drop-shadow(5px -4px 32px #c2c1b9);
  -webkit-filter: drop-shadow(5px -4px 15px #c2c1b9);
  -moz-filter: drop-shadow(5px -4px 15px #c2c1b9);
  position: fixed;
  bottom: 0;
  z-index: 4;
}

.home-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--main-accent-color);
  position: absolute;
  top: 0%;
  left: 50%;
  -webkit-transform: translate(-50%, -80%);
  -ms-transform: translate(-50%, -80%);
  transform: translate(-50%, -80%);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-wrapper {
  clip-path: url(#clipped);
  background: #eeebeb;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icons-row {
  margin-top: 1rem;
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

li {
  list-style: none;
  display: flex;
}

.links-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-label{
  font-size:1.3rem;
  color:var( --main-accent-color);
}

p {
  font-size: 1.2rem;
}

.las {
  font-size: 3.4rem;
  color: #fcfbf0;
}
</style>
