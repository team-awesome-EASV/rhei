<template>
  <div class="fullscreen">
    <div class="animals-title">
      <h1>Drag animals to the box</h1>
    </div>
    <TheAnimalGame />
  </div>
</template>

<script>
import TheAnimalGame from "@/components/TheAnimalGame.vue";
export default {
  components: {
    TheAnimalGame
  }
};
</script>

<style lang="scss" scoped>
.animals-title {
  position: absolute;
  z-index: 5;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
