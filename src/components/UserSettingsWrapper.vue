<template>
  <div class="container">
    <div @click="closeControls()" class="profile-controls-wrapper">
      <div class="user-active-wrapper"></div>
      <i
        class="fas fa-cog picture-cog"
        :style="{ color: createShade('80', '40') }"
      ></i>
    </div>

    <div
      :style="{ background: createShade('80', '90') }"
      class="profile-controls-popup"
    >
      <div class="controls-container">
        <router-link to="/settings">
          <i
            class="fas fa-cog popup-cog"
            :style="{ color: createShade('80', '40') }"
          ></i>
        </router-link>
        <router-link to="/login">
          <i class="las la-power-off"></i>
        </router-link>
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
        rotation: 280,
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
          duration: 0.5,
          transformOrigin: "50% 50%",
          ease: "back.out(3)"
        }
      )
      .fromTo(
        ".la-power-off",
        { scale: 0 },
        {
          scale: 1,
          delay: 0.25,
          ease: "back.out(3)"
        },
        "<"
      )

      .reverse();
  }
};
</script>



<style lang="scss" scoped>
.profile-controls-wrapper {
  width: 7vh;
  height: 7vh;
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

.user-active-wrapper {
  width: 10px;
  height: 10px;
  z-index: 99;
  position: absolute;
  border-radius: 50%;
  transform: translate(-18px, -16px);
  background-color: #1cf292;
}

.picture-cog {
  color: white;
  font-size: 24px;
  margin-top: 2.8rem;
  margin-left: 2.9rem;
}

.profile-controls-popup {
  height: 18vh;
  width: 7vh;
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
  font-size: 26px;
  color: whitesmoke;
}

.la-power-off {
  font-size: 26px;
  color: red;
}
</style>