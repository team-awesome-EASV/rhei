<template>
  <div class="fullscreen main-padding padding-all padding-bottom">
    <div class="main-view">
      <h1>Your mood progress</h1>
      <p class="progress-lead">
        See how your feelings were changing over the last months. Think about
        what happend and talk with others friends about it.
      </p>
      <div class="mood-parent outer-shadow-unactive">
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
      <router-link to="/chat">
        <button class="main-button padding-all">Chat with someone</button>
      </router-link>
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
  margin-top: 2rem;
  width: 100%;
  height: 60vh;
}
// .padding-bottom {
//   padding-bottom: 20vh;
// }

.progress-lead {
  text-align: justify;
}
.line {
  width: 50%;
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
