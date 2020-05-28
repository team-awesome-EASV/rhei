<template>
  <div class="mood-tracker-container">
    <div class="text-container">
        <h1>How are you today?</h1>
        <p>Take your time to pin-point how you are doing today.</p>
    </div>
    <div class="mood-parent">
        <chooseMood class="put-on-top"></chooseMood>
      <div class="chose-mood-background">
        <div class="illu-container">
          <TrackMoodIllu></TrackMoodIllu>
        </div>
      </div>
    </div>
    <div class="controls-wrapper">
         <button v-on:click="goToNext" class="main-button padding-all">Go to next page</button>
    </div>
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
    },
  }
};
</script>

<style lang="scss" scoped>


.text-container{
  width:100%;
  height:12%;
  margin-bottom:0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1{
  margin:0.2rem;
}

p{
  margin:0.5rem;
  font-size:1.2rem;
}
.mood-parent {
  position: relative;
  width: 100%;
  height: 52vh;
}


.put-on-top {
  z-index: 1;
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

.illu-container{
  width:100%;
  height: 100%;
}

.main-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 3rem;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 70%;
}

.controls-wrapper{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>