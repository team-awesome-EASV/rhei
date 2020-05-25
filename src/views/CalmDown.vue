<template>
  <div class="calm-down-wrapper">
    <div class="arrow-container" @click="goToNext()">
      <!-- <router-link to="/calm-down/connect-dots">
        
      </router-link> -->
      <i class="fas fa-arrow-circle-right arrow-size"></i>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToNext() {
      if (this.$route.name === "connectTheDots")
        this.$router.push({ name: "AnimalsFeature" });
      else if (this.$route.name === "AnimalsFeature")
        this.$router.push({ name: "Home" });
      else this.$router.push({ name: "connectTheDots" });
    }
  }
};
</script>

<style lang="scss" scoped>
.calm-down-wrapper {
  position: relative;
}
.arrow-container {
  position: absolute;
  top: 10;
  right: 0;
  margin: 1.5rem;
  z-index: 9;
}
</style>