<template>
  <div class="clickContainer">
    <div class="clickArea" ref="moodArea">
      <div
        v-for="(dot, index) in sendMood"
        :key="index"
        class="clickPoint"
        v-bind:style="{
          top: dot.top + '%',
          left: dot.left + '%',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { createShadeAccentColor } from "@/components/mixins/createShadeAccentColor";

export default {
  name: "MoodDislpay",
  mixins: [createShadeAccentColor],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["moodDotPosition"]),
    sendMood() {
      return this.moodDotPosition;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #5082a4;
}
.clickContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.clickArea {
  width: 80vw;
  height: 60vh;
  position: relative;
  border: 1px solid black;
}
.clickPoint {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: var(--main-accent-color);
  position: absolute;
}
</style>
