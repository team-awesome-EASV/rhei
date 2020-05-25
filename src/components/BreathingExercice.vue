<template>
  <div class="container">
    <div class="indicator-wrapper">
      <div class="breath-indicator"></div>
      <div class="bubble-pulse"></div>
    </div>
<!-- <h3>{{ animIteration }}</h3> -->
    <div class="controls-wrapper">
      <div class="cycles-controls">
         <button class="cycle-control outer-shadow" @click="incrementCycle()">+</button>
          <div class="cycle-view">
              <h3>{{ cycleCount + 3 +" Cycles " }}</h3>
          </div>
        <button class="cycle-control outer-shadow" @click="decrementCycle()">-</button>
      </div>
      
       <div class="cycles-controls">
         <button class="cycle-control outer-shadow">+</button>
          <div class="cycle-view">
              <h3>{{ "fasterfaster" }}</h3>
          </div>
        <button class="cycle-control outer-shadow">-</button>
      </div>
      
      <!-- <button class="cycle-control" @click="timelineTime()">duration</button> -->
      <div class="start-button-container">
         <button class="start-button" @click="animStop()" v-if="isPlaying">
            STOP
         </button>
         <button class="start-button" @click="breathIndicator()" v-if="!isPlaying">
            START
         </button>
      </div>
     
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
// import { TimelineLite, Back, Elastic, Expo } from "gsap"

export default {

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

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
}
.indicator-wrapper {
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:48px;
}

.breath-indicator {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  z-index: 99;
  background-color: var(--main-accent-color);
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
  width:70%;
  height:38vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}

.cycles-controls{
  width:100%;
  height:7vh;
  display: flex;
  margin-top:13px;
}

.cycle-view{
  width:70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.cycle-control{
  width: 18%;
  height: 100%;
  border-radius: 10px;
  background-color: #ecece3;
  font-size: 20px;
}

.start-button-container{
  width:100%;
  height:15vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

.start-button{
  width:100%;
  border-radius:50px;
  height:50px;
  border:none;
  background-color: var(--main-accent-color);
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
}

h3{
  font-size:2rem;
}

</style>
