<template>
  <div class="container">
    <div class="main-padding">
      <h1 class="anim-test">This is the breathing page</h1>
    </div>

    <div class="indicator-wrapper">
      <div class="breath-indicator"></div>
      <div class="bubble-pulse"></div>
       <div class="bubble-pulse-umbe"></div>
    </div>
    <h3>{{ cycleCount + 1 }}</h3>
    <h3>{{ animIteration }}</h3>
    <h3>{{ this.breatheAnim.isActive() }}</h3>
    <h3>{{ isPlaying }}</h3>
    <!-- <main-button text="Start"></main-button> -->
    <div class="controls-wrapper">
      <button class="cycle-control" @click="incrementCycle()">+</button>
      <button class="cycle-control" @click="decrementCycle()">-</button>
      <button class="cycle-control" @click="timelineTime()">duration</button>

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
      cycleCount: 2,
      breatheAnim: gsap.timeline({
      paused: true,

      onRepeat: this.logthis,
      onRepeatParams: ["repeat"],
      onComplete: this.logthis,
      onCompleteParams: ["complete"]
      })
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

  watch: {
    cycleCount: function(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },

  methods: {
    breathIndicator() {
      // this.breatheAnim.restart();
      console.log("test");
      this.breatheAnim.repeat(this.cycleCount);
      this.breatheAnim.play();
      this.breatheAnim.restart();
    },

    timelineTime() {
      this.breatheAnim.repeat(this.cycleCount);
      this.breatheAnim.duration(1);
      this.breatheAnim.play();
      this.breatheAnim.restart();
    },

    animStop() {
      this.breatheAnim.pause();
      // this.breatheAnim.restart();
    },

    incrementCycle() {
      // this.breatheAnim.invalidate();
      ++this.cycleCount;
      // this.breatheAnim.repeat(this.cycleCount);
      // this.breatheAnim.play();
      // this.breatheAnim.restart();
    },

    decrementCycle() {
      // this.breatheAnim.invalidate();
      if (this.cycleCount >= 1) --this.cycleCount;
      // this.breatheAnim.repeat(this.cycleCount);
      // this.breatheAnim.play();
      // this.breatheAnim.restart();
    },

    logthis(param) {
      console.log(param);
    }
  },

  mounted() {
    this.breatheAnim
      .to(
        ".breath-indicator",
        {
          duration: 2.5,
          scale: 0.3,
          yoyo: true,
          rotation: 16,
         ease: "power1.out"
        }
      )
      .to(".breath-indicator", {
        scale:1.1,
        duration: 2.2,
        yoyo: true,
        rotation: '-=16',
        ease: "back.out(2)"
      })
      .to(
        ".bubble-pulse",
        {
        delay: 2,
        scale: 30,
        duration:1,
        ease: "power3.out",
        opacity:0.3
        },
        0
      )
      .to(
        ".bubble-pulse",
        {
        scale: 30,
        delay: 2,
        duration:1,
        ease: "power3.out",
        opacity:0.0
        },
        0
      )
      .to(
        ".bubble-pulse-umbe",
        {
        delay: 1.8,
        scale: 12,
        duration:1.2,
        ease: "power3.out",
        opacity:1
        },
      
      )
       .to(
        ".bubble-pulse-umbe",
        {
         scale: 12,
        delay: 1.6,
        duration:1.2,
        ease: "power3.out",
        opacity:0.0
        },
        0
      );
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
  background-color: blue;
}

.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 20px;
  width: 20px;
  background: blue;
  border-radius: 50%;
  opacity: 0.4;
  transform: scale(0);
}

.bubble-pulse-umbe{
   position: absolute;
  z-index: 1;
  height: 20px;
  width: 20px;
  background: blue;
  border-radius: 50%;
  opacity: 0.4;
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
