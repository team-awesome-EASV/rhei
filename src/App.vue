<template>
  <div id="app" class="fullscreen">
    <div class="main-view">
      <transition mode="out-in" @enter="enter" @leave="leave" :css="false">
        <router-view v-on:hideNavigation="this.show = false" />
      </transition>
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
      show: true
      // access: true
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
    // checkAccess() {
    //   return this.access;
    // },
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
    },

    enter(el, done) {
      console.log("enter");
      gsap.fromTo(
        el,
        { x: "-150%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "expo.out",
          onComplete: done
        }
      );
    },

    leave(el, done) {
      console.log("leave");
      gsap.to(el, {
        x: "150%",
        opacity: 1,
        duration: 0.5,
        ease: "expo.in",
        onComplete: done
      });
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

    this.$root.$on("hideNavigation", () => {
      this.show = false;
    });

    this.$root.$on("showNavigation", () => {
      this.show = true;
    });

    this.$root.$on("colorChanged", () => {
      this.changeVariableColor();
    });
  },

  watch: {
    $route() {
      if (
        this.$route.name == "Login" ||
        this.$route.name == "SingUp" ||
        this.$route.name == "Color" ||
        this.$route.name == "Therapy" ||
        this.$route.path == "/connect-dots" ||
        this.$route.name == "VideoOnboard" ||
        this.$route.name == "BreathingExercice" ||
        this.$route.name == "connectTheDots"
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
  --secondary-background-color: #f7f7f7;
  --button-color-first: #fdfcfc;
  --button-color-second: #fefbfb;
  --button-shadow-color: #d3d4db;
  --background-element-color: #6cccff;
  --text-color: #383838;
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
  color: var(--text-color);
  background-image: url("../src/assets/backgroud.svg");
  background-position: center;
  background-size: cover;
}

.main-padding {
  padding: 2.5rem 3rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 200;
  margin: 0.5em 0;
  text-align: center;
}
ul {
  list-style-type: none;
}
p {
  font-size: 1.4rem;
  font-weight: 300;
}
h3 {
  font-size: 1.6rem;
  font-weight: 300;
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
  padding: 2rem 2rem;
}

.margin-right {
  margin-right: 1rem;
}
.vertical-allign-bottom {
  align-self: flex-end;
}

.outer-shadow {
  border-radius: 22px;
  background: linear-gradient(
    145deg,
    var(--button-color-first),
    var(--button-color-second)
  );
  box-shadow: 8px 8px 16px #d3d4db, -8.8px -8.8px 30px -35px #d3d4db;
  transition: all 2s ease-in-out;

  &:active {
    border-radius: 10px;
    background: linear-gradient(145deg, #e3e2d8, #ffffff);
    box-shadow: inset 8px 8px 16px #d3d4db, inset -8px -8px 16px #ffffff;
  }
}

.outer-shadow-unactive {
  border-radius: 22px;
  background: linear-gradient(
    145deg,
    var(--button-color-first),
    var(--button-color-second)
  );
  box-shadow: 8px 8px 16px #d3d4db, -8.8px -8.8px 30px -35px #d3d4db;
}

.inner-shadow {
  border-radius: 10px;
  background: linear-gradient(145deg, #e3e2d8, var(--button-color-second));
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

.arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: darkgray;
    font-weight: 200;
  }
}

@media only screen and (max-width: 320px) {
  :root {
    font-size: 8px;
  }
}

@media only screen and (min-width: 768px) {
  :root {
    font-size: 12px;
  }
}
</style>
