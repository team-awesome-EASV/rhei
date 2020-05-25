<template>
  <div>
    <!-- <div class="arrow-controls">
      <h1>Connect the Dogs dude</h1>
      <router-link to="animals-feature">
        <i class="fas fa-arrow-circle-right arrow-size"></i>
      </router-link>
    </div> -->
    <!-- <div class="main-view"> -->
    <TheDotGame />
    <!-- </div> -->
  </div>
</template>

<script>
import TheDotGame from "@/components/TheDotGame.vue";
export default {
  components: {
    TheDotGame
  }
};
</script>

<style lang="scss" scoped>
// .arrow-controls {
//   position: absolute;
// }
</style>