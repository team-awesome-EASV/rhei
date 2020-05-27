<template>
  <div class="main-padding padding-bottom">
    <h1>How are you feeling, today?</h1>
    <h3>Take your time to pin-point how you are doing today.</h3>
    <div class="mood-parent outer-shadow-unactive">
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
  </div>
</template>

<script>
import chooseMood from "../components/ChoseMood";

export default {
  components: {
    chooseMood: chooseMood
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
  width: 100%;
  height: 60vh;
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
</style>