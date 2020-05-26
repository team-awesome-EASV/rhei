<template>
  <div class="main-padding padding-bottom">
    <h1>How are your feeling today?</h1>
    <p>Take your time to pin-point how you are doing today.</p>
    <div class="mood-parent">
      <chooseMood class="put-on-top"></chooseMood>
      <div class="chose-mood-background">
        <p class="top-center">High energy</p>
        <p class="bottom-center">Low energy</p>
        <div class="mid-section">
          <p>Negative</p>
          <div class="line-container">
            <div class="line"></div>
          </div>
          <div class="line-container vertical">
            <div class="line"></div>
          </div>
          <p>Positive</p>
        </div>
      </div>
    </div>

    <autocomplete></autocomplete>
    <moodDisplay></moodDisplay>
  </div>
</template>

<script>
import autocomplete from "../components/Autocomplete";
import chooseMood from "../components/ChoseMood";
import moodDisplay from "../components/TheMoodDislpay";
export default {
  components: {
    autocomplete: autocomplete,
    chooseMood: chooseMood,
    moodDisplay: moodDisplay
  }
};
</script>

<style lang="scss" scoped>
.padding-bottom {
  padding-bottom: 20vh;
}
.mood-parent {
  position: relative;
  margin-bottom: 3rem;
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
  width: 70%;
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
</style>