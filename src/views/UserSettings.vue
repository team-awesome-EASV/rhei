<template>
  <div class="main-view padding-all">
    <h1>Your settings</h1>

    <div class="outer-shadow-unactive">
      <div>
        <button @click="--breathingTime.in">-</button> {{ sendTimes.in }}in Time
        <button @click="++breathingTime.in">+</button>
      </div>
      <div>
        <button @click="--breathingTime.hold">-</button>
        {{ sendTimes.hold }}hold Time
        <button @click="++breathingTime.hold">+</button>
      </div>

      <div>
        <button @click="--breathingTime.out">-</button> {{ sendTimes.out }}out
        Time <button @click="++breathingTime.out">+</button>
      </div>

      <button @click="saveUserTimes()">SAVE</button>

      <p>{{ sendTimes }}</p>
    </div>
    <p>you can change your color here:</p>
    <colorPick></colorPick>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import colorPick from "../components/Color";

export default {
  name: "settings",
  components: {
    colorPick: colorPick
  },

  data() {
    return {
      breathingTime: {
        in: 0,
        hold: 0,
        out: 0
      }
    };
  },

  computed: {
    ...mapGetters(["getBreathingTimes"]),
    sendTimes() {
      return this.getBreathingTimes;
    }
  },

  methods: {
    ...mapActions(["setBreathingTimes"]),

    saveUserTimes() {
      this.setBreathingTimes(this.breathingTime);
    },
    asignValue() {
      this.breathingTime = this.sendTimes;
    }
  },

  mounted() {
    // this.saveUserTimes();
    this.asignValue();
  }
};
</script>

<style lang="scss" scoped>
#bkgrdVideo {
  width: 60vw;
  height: 60vw;
}

.item {
  position: absolute;
}
</style>