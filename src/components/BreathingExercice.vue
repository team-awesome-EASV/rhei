<template>
  <div class="container">
    <div class="indicator-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 600 600">
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="282.25"
            cy="292.86"
            r="144.32"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              :stop-color="this.loadColor.hex"
              stop-opacity="0.42"
            />
            <stop
              offset="0.53"
              :stop-color="this.loadColor.hex"
              stop-opacity="0.4"
            />
            <stop
              offset="0.73"
              :stop-color="this.loadColor.hex"
              stop-opacity="0.34"
            />
            <stop
              offset="0.86"
              :stop-color="this.loadColor.hex"
              stop-opacity="0.22"
            />
            <stop
              offset="0.97"
              :stop-color="this.loadColor.hex"
              stop-opacity="0.06"
            />
            <stop
              offset="1"
              :stop-color="this.loadColor.hex"
              stop-opacity="0"
            />
          </radialGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <circle
              id="circle-outer-stroke"
              cx="282.25"
              cy="292.86"
              r="281.75"
              fill="#fff"
              :stroke="createShade('100', '50')"
              stroke-miterlimit="10"
              opacity="0.36"
            />
            <circle
              id="circle-inner-stroke"
              cx="282.25"
              cy="292.86"
              r="252.24"
              fill="#fff"
              :stroke="createShade('100', '50')"
              stroke-miterlimit="10"
              opacity="0.17"
            />
            <circle
              id="circle-inner_fill"
              data-name="circle-inner fill"
              cx="282.25"
              cy="292.86"
              r="144.32"
              fill="url(#radial-gradient)"
            />
            <g id="clouds" opacity="0.15">
              <g id="cloud-bottom">
                <path
                  d="M242.81,196.67c0-7.88,19.56-9.55,27.29-9.55,15.68,0,16.72-9,29.74-9,11.44,0,17.26,9.26,27.92,9.26,22.87,0,28-26.34,50.2-26.34,22.64,0,21.48,27.5,42.54,27.5,10.71,0,75.05,2,75.05,8.11Z"
                  :fill="createShade('100', '50')"
                />
              </g>
              <g id="cloud-top">
                <path
                  d="M72.28,400.09c0-6.77,7.07-13.23,13.53-13.23,11.13,0,15.06,3.68,22.89,3.68,18.19,0,13.54-37.8,43.17-37.8,27.12,0,31.19,38.64,49,38.64,15.63,0,7.87-8.68,32.73-8.68,12.6,0,35.65,10.59,35.65,17.36Z"
                  :fill="createShade('100', '50')"
                />
              </g>
            </g>
            <g id="plant">
              <g opacity="0.31">
                <path
                  id="fill"
                  d="M473.53,260.26c13.62,2.15,25.15,26.48,24.92,34.26-.63,22-11.48,35-12.36,43.74-1.95,19.51,2.49,37.93-4.48,47.64-41.18,57.46-145.78,26.8-161.89,46.26-4.23,5.59-16.65,23.36-16.65,23.36-4.18-5.74-11.37-41.7-9.28-55s26.25-46.82,66.46-67.14C381.5,322.68,428.42,253.14,473.53,260.26Z"
                  :fill="createShade('100', '60')"
                />
              </g>
              <path
                class="branch"
                id="stroke-draw"
                d="M286.81,487.5C293,474.4,350.36,363,456.11,324.07"
                fill="none"
                :stroke="createShade('100', '95')"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                class="branch"
                id="stroke-draw-2"
                data-name="stroke-draw"
                d="M419,341.63c1.67-5.6,7.45-16.87,5.56-35.18"
                fill="none"
                :stroke="createShade('100', '95')"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                class="branch"
                id="stroke-draw-3"
                data-name="stroke-draw"
                d="M392,359.57c2.28-9.15,3.55-22.46,1.4-30.48"
                fill="none"
                :stroke="createShade('100', '95')"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                class="branch"
                id="stroke-draw-4"
                data-name="stroke-draw"
                d="M366.22,381.21a130.65,130.65,0,0,1,48.14,10.18"
                fill="none"
                :stroke="createShade('100', '95')"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </g>
            <g id="plant2">
              <g opacity="0.42">
                <path
                  id="fill-2"
                  data-name="fill"
                  d="M181.56,169c9.56,9.26,31.24,49.12,58.16,75.08,18.23,17.55,19.51,51.95,3.75,65.67C225.71,325.14,179,266.49,174,261.05c-11.61-12.67-42.26-25.93-54-38.59-7.35-7.93-20.34-50.68-3-69.89C133.79,133.89,169,156.8,181.56,169Z"
                  :fill="createShade('80', '60')"
                />
              </g>
              <path
                class="branch"
                id="stroke-draw-5"
                data-name="stroke-draw"
                d="M159.43,200C215.91,236,269,355.43,274.66,370.72"
                fill="none"
                :stroke="createShade('100', '95')"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="3"
              />
              <line
                class="branch"
                id="stroke-draw-6"
                data-name="stroke-draw"
                x1="176.32"
                y1="178.7"
                x2="181.52"
                y2="218.2"
                fill="none"
                :stroke="createShade('100', '95')"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="3"
              />
            </g>
            <circle
              id="phase-indicator-in-out"
              cx="282.31"
              cy="11.8"
              r="6.66"
              :fill="createShade('100', '70')"
            />
            <circle
              id="phase-indicator"
              cx="282.31"
              cy="11.8"
              r="11.3"
              fill="none"
              :stroke="createShade('100', '50')"
              stroke-miterlimit="10"
            />
            <circle
              id="phase-indicator-hold-end"
              cx="78.36"
              cy="487.5"
              r="6.66"
              :fill="createShade('100', '70')"
            />
            <circle
              id="phase-indicator-hold-start"
              cx="486.85"
              cy="487.5"
              r="6.66"
              :fill="createShade('100', '70')"
            />

            <g id="breathe-in-text">
              <text
                transform="translate(159.32 314.51)"
                font-size="48"
                font-family="Poppins-Regular, Poppins"
              >
                breathe in
              </text>
            </g>

            <g id="hold-text">
              <text
                transform="translate(214.28 314.51)"
                font-size="48"
                font-family="Poppins-Regular, Poppins"
              >
                hold...
              </text>
            </g>

            <g id="breathe-out-text">
              <text
                transform="translate(141.13 314.51)"
                font-size="48"
                font-family="Poppins-Regular, Poppins"
              >
                breathe out
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <!-- <h3>{{ animIteration }}</h3> -->
    <div class="controls-wrapper">
      <div class="cycles-controls">
        <button class="cycle-control outer-shadow" @click="decrementCycle()">
          -
        </button>
        <div class="cycle-view">
          <h3>{{ cycleCount + 1 + cycleLabel }}</h3>
        </div>
        <button class="cycle-control outer-shadow" @click="incrementCycle()">
          +
        </button>
      </div>

      <!-- <button class="cycle-control" @click="timelineTime()">duration</button> -->
      <div class="start-button-container">
        <button
          class="start-button"
          @click="
            animStop(), showInterface(), togglePlayState(false, 'buttonlog')
          "
          v-if="isPlaying"
        >
          STOP
        </button>
        <button
          class="start-button"
          @click="play(), hideInterface(), togglePlayState(true, 'buttonlog')"
          v-else
        >
          START
        </button>
      </div>

      <div class="cycles-controls">
        <!-- <button class="cycle-control outer-shadow">-</button> -->
        <div class="cycle-settings flex-space-around">
          <button class="cycle-control outer-shadow" @click="gotoSettings()">
            <i
              class="fas fa-cog popup-cog"
              :style="{ color: createShade('80', '90') }"
            ></i>
          </button>

          <p>
            Go to settings to adjust the time of breathe in, hold, and breathe
            out phases.
          </p>
        </div>
        <!-- <button class="cycle-control outer-shadow">+</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { createShadeAccentColor } from "./mixins/createShadeAccentColor";
import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export default {
  name: "breathingExercize",
  mixins: [createShadeAccentColor],
  data() {
    return {
      cycleCount: 2,
      breaheInDuration: 3,
      holdDuration: 1.5,
      breatheOutDuration: 3,
      isPlaying: false,

      masterTL: gsap.timeline({
        paused: true,
        repeat: this.cycleCount,
        onStart: this.togglePlayState,
        onStartParams: [true, " masterTL start"],
        onRepeat: this.togglePlayState,
        onRepeatParams: [true, "masterTL repeat"],
        onComplete: this.togglePlayState,
        onCompleteParams: [false, " masterTL complete"]
      })
    };
  },

  computed: {
    cycleLabel() {
      if (this.cycleCount === 0) return " cycle";
      else return " cycles";
    },
    ...mapGetters(["getBreathingTimes"]),
    sendTimes() {
      return this.getBreathingTimes;
    }
  },

  watch: {
    isPlaying(newValue) {
      if (!newValue) this.showInterface();
    }
  },

  methods: {
    gotoSettings() {
      this.$router.push({ name: "Settings" });
    },

    togglePlayState(state, log) {
      this.isPlaying = state;
      console.log(log);
    },

    hideInterface() {
      gsap.to(".cycles-controls", { opacity: 0, duration: 1 });
    },

    showInterface() {
      gsap.to(".cycles-controls", { opacity: 1, duration: 1 });
    },

    play() {
      this.masterTL.add(this.breatheIn());
      this.masterTL.add(this.hold());
      this.masterTL.add(this.breatheOut());
      this.masterTL.repeat(this.cycleCount);
      this.masterTL.play();
      this.masterTL.invalidate();
      this.isPlaying = false;
    },

    breatheIn() {
      let tl = gsap.timeline();
      tl.add(this.rotateIndicator(0, 134, this.breaheInDuration));
      tl.add(this.scaleIndicator(0.5, 1.8, this.breaheInDuration), 0);
      tl.add(this.breatheInText(), 0);
      tl.to(
        ".branch",

        {
          duration: this.breaheInDuration * 0.7,
          drawSVG: "0% 100%",
          stagger: this.breaheInDuration * 0.1,
          ease: "power1.out"
        },
        0
      );

      tl.to(
        ["#fill", "#fill-2"],

        {
          opacity: 1,
          scale: 1,
          stagger: this.breaheInDuration * 0.2,
          ease: "power1.out",
          duration: this.breaheInDuration * 0.7
        },
        "<0.5"
      );
      return tl;
    },

    hold() {
      let tl = gsap.timeline();
      tl.add(this.rotateIndicator(134, 227, this.holdDuration));
      tl.add(this.holdText(), 0);
      // tl.to("#hold-text", {
      //   opacity: 0,

      //   duration: this.holdDuration * 0.2,
      //   ease: "power1.out"
      // });
      return tl;
    },

    breatheOut() {
      let tl = gsap.timeline();
      tl.add(this.rotateIndicator(227, 360, this.breatheOutDuration));
      tl.add(this.scaleIndicator(1.8, 0.5, this.breatheOutDuration), 0);
      // tl.add(this.animatePlants(this.breaheOutDuration), 0);
      tl.add(this.breatheOutText(), 0);
      tl.to(
        ".branch",

        {
          duration: this.breatheOutDuration * 0.7,
          drawSVG: "0% 0%",
          stagger: this.breatheOutDuration * 0.1,
          ease: "power1.out"
        },
        0
      );

      tl.to(
        ["#fill", "#fill-2"],

        {
          opacity: 0,
          scale: 0,
          stagger: this.breatheOutDuration * 0.1,
          ease: "power1.out",
          duration: this.breatheOutDuration * 0.7
        },
        0
      );
      return tl;
    },

    breatheInText() {
      let tl = gsap.timeline();
      tl.to("#breathe-in-text", {
        opacity: 1,

        duration: this.breaheInDuration * 0.5,
        ease: "power4.out"
      });
      tl.to("#breathe-in-text", {
        opacity: 0,

        duration: this.breaheInDuration * 0.5,
        ease: "power4.in"
      });
      return tl;
    },

    holdText() {
      let tl = gsap.timeline();
      tl.to("#hold-text", {
        opacity: 1,
        duration: this.holdDuration * 0.5,
        ease: "power4.out"
      });
      tl.to("#hold-text", {
        opacity: 0,
        duration: this.holdDuration * 0.5,
        ease: "power4.in"
      });
      return tl;
    },

    breatheOutText() {
      let tl = gsap.timeline();

      tl.to("#breathe-out-text", {
        opacity: 1,

        duration: this.breatheOutDuration * 0.5,
        ease: "power4.out"
      });
      tl.to("#breathe-out-text", {
        opacity: 0,
        duration: this.breatheOutDuration * 0.5,
        ease: "power4.in"
      });
      return tl;
    },

    rotateIndicator(from, to, duration) {
      let tl = gsap.timeline();
      tl.fromTo(
        "#phase-indicator",
        { rotation: from },
        {
          duration: duration,
          rotation: to,
          svgOrigin: `${570 / 2} ${587 / 2}`,
          ease: "power1.inOut"
        }
      );
      return tl;
    },

    scaleIndicator(from, to, duration) {
      let tl = gsap.timeline();
      tl.fromTo(
        "#circle-inner_fill",
        { scale: from },
        { scale: to, duration: duration }
      );
      return tl;
    },

    animStop() {
      this.masterTL.pause();
    },

    incrementCycle() {
      ++this.cycleCount;
      console.log("increment");
    },

    decrementCycle() {
      if (this.cycleCount >= 1) --this.cycleCount;
      console.log("decrement");
    },

    cloudsAnim() {
      let tl = gsap.timeline();
      tl.to("#cloud-bottom", {
        scale: 1.2,
        x: 100,
        repeat: -1,
        yoyo: true,
        duration: 10,
        transformOrigin: "50% 50%",
        ease: "power1.inOut"
      });
      tl.to(
        "#cloud-top",
        {
          scale: 1.2,
          x: -50,
          repeat: -1,
          yoyo: true,
          duration: 10,
          transformOrigin: "50% 50%",
          ease: "power1.inOut"
        },
        "-=0.7"
      );
      tl.play();
      return tl;
    },

    asignValue() {
      // this.breathingTime = this.sendTimes;
      this.breaheInDuration = this.sendTimes.in;
      this.holdDuration = this.sendTimes.hold;
      this.breatheOutDuration = this.sendTimes.out;
    }
  },

  mounted() {
    this.asignValue();
    gsap.set("#circle-inner_fill", { transformOrigin: "50% 50%", scale: 0.5 });
    gsap.set(["#breathe-in-text", "#hold-text", "#breathe-out-text"], {
      opacity: 0
    });

    gsap.set(".branch", { drawSVG: "0% 0%" });

    gsap.set(["#fill", "#fill-2"], {
      opacity: 0,

      transformOrigin: "50% 50%"
    });

    this.cloudsAnim();
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.indicator-wrapper {
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
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

.controls-wrapper {
  width: 70%;
  height: 38vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cycles-controls {
  width: 100%;
  height: 7vh;
  display: flex;
  margin-top: 2em;

  p {
    font-weight: 100;
    text-align: justify;
    width: 80%;
    margin-left: 2em;
  }

  .fas {
    font-size: 2rem;
  }
}

.cycle-view {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cycle-control {
  width: 18%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--secondary-background-color);
  font-size: 20px;
}

.start-button-container {
  width: 100%;
  margin-top: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.start-button {
  width: 100%;
  border-radius: 50px;
  height: 5rem;
  border: none;
  background-color: var(--main-accent-color);
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
}

h3 {
  font-size: 2rem;
}
</style>
