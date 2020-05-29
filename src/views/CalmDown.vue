<template>
  <div class="calm-down-wrapper">
    <div class="arrow-container next" @click="goToNext()">
      <i class="fas fa-chevron-right arrow-size"></i>
      <p>NEXT</p>
    </div>
    <div class="arrow-container back" @click="goToPrev()">
      <i class="fas fa-chevron-left arrow-size"></i>
      <p>BACK</p>
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
    },

    goToPrev() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.calm-down-wrapper {
  position: relative;
}
.next {
  position: absolute;
  top: 10;
  right: 0;
  margin: 1.5rem;
  z-index: 9;
}

.back {
  position: absolute;
  top: 10;
  left: 0;
  margin: 1.5rem;
  z-index: 9;
}
</style>