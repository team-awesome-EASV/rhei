<template>
  <div class="fullscreen main-padding padding-all">
    <div class="main-view">
      <h1>Your mood progress</h1>
      <div class="mood-parent">
        <moodDisplay></moodDisplay>
        <div class="chose-mood-background">
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
    </div>
  </div>
</template>

<script>
import moodDisplay from "../components/TheMoodDislpay";

export default {
  components: {
    moodDisplay: moodDisplay
  }
};
</script>

<style lang="scss" scoped>
.mood-parent {
  position: relative;
  margin-bottom: 3rem;
}
.line {
  width: 60%;
  height: 1px;
  background-color: #cdcdcd;
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
</style>
