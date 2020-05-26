<template>
  <div>
      <div class="item">
        <lottie
          :options="defaultOptions"
          :height="350"
          :width="350"
          
          v-on:animCreated="handleAnimation"

        />
      </div>

        <router-link id="skipButton" to="/"
              >Skip</router-link>
  </div>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "@/assets/video.json";

export default {
  name: 'juansi',
    components: {
    lottie: Lottie
      },

  data() {
    return {
      name: 'juansi',
      defaultOptions: { animationData: animationData.default },
      };
    },
    methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    },
  }
</script>

<style lang="scss" scoped>
.item {
  justify-content: center;
  padding-top: 30px;
}
#skipButton {
  justify-content: right;
  margin-left: 50%;
  margin-top: 40px;
}
</style>