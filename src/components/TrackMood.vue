<template>
  <div class="main-padding padding-bottom flex-between">
    <h1>How are you today?</h1>
    <p>Take your time to pin-point how you are doing today.</p>
    <p />
    <div class="mood-parent outer-shadow-unactive">
      <chooseMood class="put-on-top"></chooseMood>
      <div class="chose-mood-background">
          <TrackMoodIllu></TrackMoodIllu>
      </div>
    </div>
    <button v-on:click="goToNext" class="main-button padding-all">Go to next page</button>
  </div>
</template>

<script>
import chooseMood from "../components/ChoseMood";
import TrackMoodIllu from "../components/illustrations/TrackMoodIllu.vue"

export default {
  components: {
    chooseMood: chooseMood,
    TrackMoodIllu
  },
  methods: {
    goToNext() {
      if (this.$route.name === "TrigerPage")
        this.$router.push({ name: "ProgressPage" });
      else if (this.$route.name === "ProgressPage")
        this.$router.push({ name: "Home" });
      else this.$router.push({ name: "TrigerPage" });
    }
  }
};
</script>

<style lang="scss" scoped>
// .padding-bottom {
//   padding-bottom: 20vh;
// }
.mood-parent {
  position: relative;
  margin: 3rem 0 3rem 0;
  width: 100%;
  height: 33vh;
}
.put-on-top {
  z-index: 10;
}
.chose-mood-background {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.line {
  width: 50%;
  height: 1px;
  background-color: #cdcdcd;
}
.top-center {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
}

.bottom-center {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center;
}
.mid-section {
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.line-container {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vertical {
  transform: rotateZ(90deg);
}

.flex-between {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.main-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 1.5rem;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 100%;
}
</style>