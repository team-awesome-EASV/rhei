<template>
  <div>
    <div class="rheiVideo">
      <lottie
        id="videoClip"
        :options="defaultOptions"
        v-on:animCreated="handleAnimation"
        @complete="goToColors"
      />
    </div>

    <div id="skipButton" @click="animStop()">
      Skip
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "@/assets/transparent_video.json";

export default {
  name: "juansi",
  components: {
    lottie: Lottie
  },

  data() {
    return {
      name: "juansi",
      defaultOptions: { animationData: animationData.default, loop: false },
      destroyed: false
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    goToColors() {
      console.log("hello");
    },

    animStop() {
      this.destroyed = true;
      console.log("animstop called");
      this.anim.destroy();
      this.$router.push({ name: "Color" });
    }
  },

  mounted() {
    this.anim.addEventListener("complete", () => {
      this.$router.push({ name: "Color" });
    });
  },

  beforeDestroy() {
    if (this.destroyed) this.anim.removeEventListener();
  }
};
</script>

<style lang="scss" scoped>
.rheiVideo {
  width: 90vw;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
}
#skipButton {
  justify-content: center;
  align-items: center;
  margin-left: 47%;
  padding-top: 50px;
}
</style>