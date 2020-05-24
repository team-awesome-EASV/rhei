<template>
  <div class="container">
    <div @click="closeControls()" class="profile-controls-wrapper">
      <i
        :style="{ color: createShade('80', '40') }"
        class="las la-cog picture-cog"
      ></i>
    </div>

    <div
      :style="{ background: createShade('80', '90') }"
      class="profile-controls-popup"
    >
      <div class="controls-container">
        <i
          :style="{ color: createShade('80', '40') }"
          class="las la-cog popup-cog"
        ></i>
        <i class="las la-power-off"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { createShadeAccentColor } from "./mixins/createShadeAccentColor";
import { gsap } from "gsap";

export default {
  mixins: [createShadeAccentColor],
  data() {
    return {
      controlsAnim: gsap.timeline({ paused: true })
    };
  },

  methods: {
    closeControls: function() {
      this.controlsAnim.reversed(!this.controlsAnim.reversed());
    }
  },

  mounted() {
    this.controlsAnim
      .to(".picture-cog", {
        scale: 0,
        rotation: 360,
        transformOrigin: "10% 20%",
        ease: "back.in(3)"
      })
      .fromTo(
        ".profile-controls-popup",
        { transform: "scaleY(0)" },
        {
          transformOrigin: "0% 20%",
          transform: "scaleY(8vh)",
          scale: 1,
          duration: 0.2
        }
      )
      .fromTo(
        ".popup-cog",
        { scale: 0, rotation: 0, opacity: 0 },
        {
          scale: 1,
          rotation: 360,
          opacity: 1,
          duration:0.5,
          transformOrigin: "50% 50%",
          ease: "back.out(3)"
        }
      )
      .fromTo(
        ".la-power-off",
        { scale: 0 },
        {
          scale: 1,
          delay:0.25,
          ease: "back.out(3)"
        },
        "<"
      )

      .reverse();
  }
};
</script>



<style lang="scss" scoped>
.container {
}

.profile-controls-wrapper {
  width: 8vh;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--main-accent-color);
  background-image: url("../assets/photos/rick.png");
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}

.picture-cog {
  color: white;
  font-size: 30px;
  margin-top: 42px;
  margin-left: 50px;
}

.profile-controls-popup {
  height: 21vh;
  width: 8.01vh;
  border-radius: 40px;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  right: 0;
  z-index: 1;
}

.controls-container {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.popup-cog {
  font-size: 32px;
  color: whitesmoke;
}

.la-power-off {
  font-size: 32px;
  color: red;
}
</style>