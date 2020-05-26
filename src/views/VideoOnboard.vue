<template>
  <div>
      <div class="item">
        <lottie
          :options="defaultOptions"

          
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
  height: 375px;
  width: 375px;
}
#skipButton {
  justify-content: center;
  align-items: center;
  margin-left: 47%;
  padding-top: 50px;
}
</style>