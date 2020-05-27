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

    <router-link id="skipButton" to="/color">Skip</router-link>
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
      defaultOptions: { animationData: animationData.default, loop: false }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    goToColors() {
      console.log("hello");
    }
  },

  mounted() {
    this.anim.addEventListener("complete", () => {
      // console.log("enterFrame", this.anim.currentFrame);
      this.$router.push({ name: "Color" });
    });
  }
};
</script>

<style lang="scss" scoped>
.rheiVideo {
  width: 100vw;
}
#skipButton {
  justify-content: center;
  align-items: center;
  margin-left: 47%;
  padding-top: 50px;
}
</style>