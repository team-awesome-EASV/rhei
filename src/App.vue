<template>
  <div id="app" class="fullscreen">
    <!-- <p>{{ colorGet }}</p> -->
    <div class="main-view">
      <!-- <router-link to="/color">Change color</router-link> -->
      <router-view v-on:hideNavigation="this.show = false" />
    </div>

    <transition @enter="showNav" @leave="hideNav">
      <Navigation v-show="show" id="theNavigation"></Navigation>
    </transition>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import { gsap } from "gsap";
import { mapGetters } from "vuex";

export default {
  components: {
    Navigation: Navigation
  },

  data() {
    return {
      show: true,
      access: true
    };
  },
  computed: {
    ...mapGetters(["userColor"]),
    colorGet() {
      return this.userColor;
    }
  },
  methods: {
    changeVariableColor() {
      let root = document.documentElement;
      root.style.setProperty("--main-accent-color", this.colorGet.hex);
    },
    checkAccess() {
      return this.access;
    },
    showNav: function(el, done) {
      let navAnim = gsap.timeline({ paused: true, onComplete: done });
      navAnim
        .set(el, {
          scale: 0,
          translateY: 170,
          opacity: 0,
          duration: 0.5,
          ease: "power4.out"
        })
        .to(el, {
          scale: 1,
          translateY: 0,
          opacity: 1,
          ease: "power4.out"
        });
      navAnim.play();
    },
    hideNav: function(el, done) {
      let navAnim = gsap.timeline({ paused: true, onComplete: done });
      navAnim
        .set(el, {
          scale: 1,
          translateY: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out"
        })
        .to(el, {
          scale: 0.2,
          translateY: 80,
          opacity: 0,
          duration: 1.3,
          ease: "power4.out"
        });
      navAnim.play();
    }
  },
  updated() {
    this.changeVariableColor();
  },

  beforeMount() {
    if (this.$store.state.user.access) {
      this.$router.push({
        name: "Home"
      });
    } else {
      this.$router.push({
        name: "VideoOnboard"
      });
    }
  },

  mounted() {
    this.changeVariableColor();
    // this.navAnim
    //   .to("#theNavigation", {
    //     scale: 0,
    //     translateY: 170,
    //     opacity: 0,
    //     duration: 0.5,
    //     ease: "power4.out"
    //   })
    //   .to("#theNavigation", {
    //     scale: 1,
    //     translateY: 0,
    //     opacity: 1,
    //     ease: "power4.out"
    //   });

    this.$root.$on("hideNavigation", () => {
      this.show = false;
    });

    this.$root.$on("showNavigation", () => {
      this.show = true;
    });
  },

  watch: {
    $route() {
      if (
        this.$route.name == "Login" ||
        this.$route.name == "SingUp" ||
        this.$route.name == "Color" ||
        this.$route.name == "Therapy" ||
        this.$route.path == "/connect-dots"
      ) {
        this.show = false;
      } else this.show = true;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  --main-accent-color: #8a8bff;
  --secondary-background-color: #fcfbf0;
  --background-element-color: #6cccff;
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

#app {
  position: relative;
  overflow: hidden;
  width: 100vw;
  background-color: var(--secondary-background-color);
}

.main-padding {
  padding: 3rem;
}

h1 {
  font-size: 3.2rem;
  font-weight: normal;
  margin-bottom: 2rem;
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

.accent-color {
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

.flex-space-around {
  display: flex;
  justify-content: space-around;
}
.flex-space-between {
  display: flex;
  justify-content: space-between;
}
.wrap {
  flex-wrap: wrap;
}
.flex-start {
  display: flex;
  justify-content: flex-start;
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
  background: linear-gradient(145deg, #e3e2d8, #ffffff);
  box-shadow: 8px 8px 16px #d3d4db, -8px -8px 16px #ffffff;
}

.inner-shadow {
  border-radius: 10px;
  background: linear-gradient(145deg, #e3e2d8, #ffffff);
  box-shadow: inset 8px 8px 16px #d3d4db, inset -8px -8px 16px #ffffff;
}

.arrow-size {
  font-size: 40px;
  color: var(--main-accent-color);
}

.arrow-controls {
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
