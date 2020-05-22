<template>
  <div class="nav-container">
    <div class="home-button">
      <router-link to="/"><i class="las la-house-damage"></i></router-link>
    </div>
    <div class="nav-wrapper">
      <div class="icons-row">
        <li
          class="shuffle"
          v-for="(link, index) in navLinksLeft"
          v-bind:key="index"
        >
          <router-link :to="link.path">
            <app-icon :icon="link.icon"></app-icon>
            <p>
              {{ link.name }}
            </p>
          </router-link>
        </li>
        <!--          <app-icon icon="moodtracker"></app-icon>-->
        <!--          <app-icon icon="chat"></app-icon>-->
      </div>
      <div class="icons-row">
        <li
          class="shuffle"
          v-for="(link, index) in navLinksRight"
          v-bind:key="index"
        >
          <router-link :to="link.path">
            <app-icon :icon="link.icon"></app-icon>
            <p>
              {{ link.name }}
            </p>
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
      <!-- <g id="b8ec6711-bca7-48a6-94ad-687dd3b4dc70" data-name="Layer 2">
        <g id="a168547a-6da8-495a-87b3-35e558a4b4f5" data-name="Layer 1">
          <g clip-path="url(#bb3e86a6-e069-48a6-9cf1-6756cd92ebb8)">
            <rect width="750" height="184" fill="blue" />
          </g>
        </g>
      </g> -->
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
        { name: "MOODTRACKER", path: "/moodtracker", icon: "moodtracker" },
        { name: "CHAT", path: "/chat", icon: "chat" },
      ],
      navLinksRight: [
        { name: "CALM DOWN", path: "/breathing-exercise", icon: "calm" },
        { name: "PREMIUM", path: "/therapy", icon: "premium" }
      ]
    };
  }

  // ... rest of component
};
</script>

<style lang="scss" scoped>
.nav-container {
  width: 100%;
  height: 10%;
  filter: drop-shadow(5px -4px 32px rgba(0, 0, 0, 0.5));
  -webkit-filter: drop-shadow(5px -4px 32px rgba(0, 0, 0, 0.5));
  -moz-filter: drop-shadow(5px -4px 32px rgba(0, 0, 0, 0.5));
  position: fixed;
  bottom: 0;
}

.home-button {
  width: 65px;
  height: 65px;
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
  background: #fcfbf0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .las {
    font-size: 35px;
    color: var(--main-accent-color);
  }
}

li{
  list-style: none;
  display: flex;
}

p{
  font-size: 10px;
}

.icons-row {
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}


.las {
  font-size: 35px;
  color: #fcfbf0;
}
</style>
