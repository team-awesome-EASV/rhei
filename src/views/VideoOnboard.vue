<template>
  <div>
      <div class="item">
        <lottie
          :options="defaultOptions"
          :height="250"
          :width="250"
          v-on:animCreated="handleAnimation"

        />
      </div>
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
#bkgrdVideo {
  width: 60vw;
  height: 60vw;
}

.item {
  position: absolute,
}
</style>