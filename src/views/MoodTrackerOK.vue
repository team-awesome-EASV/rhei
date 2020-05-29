<template>
  <div class="mood-tracker-wrapper">
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
      if (this.$route.name === "TrigerPage")
        this.$router.push({ name: "ProgressPage" });
      else if (this.$route.name === "ProgressPage")
        this.$router.push({ name: "Home" });
      else this.$router.push({ name: "TrigerPage" });
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