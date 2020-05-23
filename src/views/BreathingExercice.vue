<template>
  <div class="container">
    <div class="main-padding">
      <h1 class="anim-test">This is the breathing page</h1>
    </div>

    <div class="indicator-wrapper">
      <div class="breath-indicator"></div>
      <div class="bubble-pulse"></div>
    </div>
    <h3>{{ cycleCount }}</h3>
    <h3>{{ animIteration }}</h3>
    <h3>{{ this.breatheAnim.isActive() }}</h3>
    <h3>{{ isPlaying }}</h3>
    <!--    <main-button   text="Start"></main-button>-->
    <div class="controls-wrapper">
      <button class="cycle-control" @click="++cycleCount">+</button>
      <button class="cycle-control" @click="--cycleCount">-</button>

      <button @click="animStop()" v-if="isPlaying">
        STOP
      </button>
      <button @click="breathIndicator()" v-if="!isPlaying">
        START
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
// import { TimelineLite, Back, Elastic, Expo } from "gsap"
// import mainButton from "../components/MainButton";

export default {
  components: {
    // "main-button": mainButton
  },

  data() {
    return {
      breatheAnim: new gsap.timeline({
        paused: true
      }),

      cycleCount: 2
    };
  },

  computed: {
    isPlaying: {
      get: function() {
        return this.breatheAnim.isActive();
      },
      set: function() {
        return this.breatheAnim.isActive();
      }
    },

    animIteration: function() {
      return this.breatheAnim.iteration();
    }
  },

  // watch: {
  //   cycleCount: function(newValue, oldValue) {
  //     console.log(newValue, oldValue);
  //   }
  // },

  methods: {
    breathIndicator() {
      this.breatheAnim.restart();
      console.log("test");
      this.breatheAnim
        .to(".breath-indicator", {
          scale: 0.1,
          duration: 1,
          yoyo: true,
          repeat: this.cycleCount, // number of repeats (-1 for infinite),
          onRepeat: console.log("breathe tween repeat")
        })
        .to(
          ".bubble-pulse",
          {
            scale: 10,
            duration: 1,
            repeat: this.cycleCount
          },
          "<"
        );

      this.breatheAnim.play();
    },

    animStop() {
      this.breatheAnim.pause();
      this.breatheAnim.restart();
    }
  }
};
</script>

<style lang="scss" scoped>
.indicator-wrapper {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.breath-indicator {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  z-index: 99;
  background-color: #6cccff;
}

.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 20px;
  width: 20px;
  background: royalblue;
  border-radius: 50%;
  opacity: 0.2;
  transform: scale(0);
}

.controls-wrapper {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #6cccff;
  color: #fcfbf0;
  font-size: 20px;
}
</style>
