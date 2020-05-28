<template>
  <div class="main-view padding-all">
    <h1>Your settings</h1>
    <p>Change the lenght of breathing time:</p>
    <div class="outer-shadow-unactive padding-all parameters-wrapper">
      <div class="parameters-row">
        <div class="parameter-control">
          <div class="parameter-label">
            Breathe in
          </div>
          <div class="paramerer-buttons-wrapper">
            <button
              class="parameter-button outer-shadow"
              @click="--breathingTime.in"
            >
              <i class="fas fa-minus"></i>
            </button>
            <div class="parameter-time-text">{{ sendTimes.in }}s</div>
            <button
              class="parameter-button outer-shadow"
              @click="++breathingTime.in"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="parameter-control">
          <div class="parameter-label">
            Hold
          </div>
          <div class="paramerer-buttons-wrapper">
            <button
              class="parameter-button outer-shadow"
              @click="--breathingTime.hold"
            >
              <i class="fas fa-minus"></i>
            </button>
            <div class="parameter-time-text">{{ sendTimes.hold }}s</div>
            <button
              class="parameter-button outer-shadow"
              @click="++breathingTime.hold"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="parameter-control">
          <div class="parameter-label">
            Breathe out
          </div>
          <div class="paramerer-buttons-wrapper">
            <button
              class="parameter-button outer-shadow"
              @click="--breathingTime.out"
            >
              <i class="fas fa-minus"></i>
            </button>
            <div class="parameter-time-text">{{ sendTimes.out }}s</div>
            <button
              class="parameter-button outer-shadow"
              @click="++breathingTime.out"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="parameters-row">
        <button class="save-button" @click="saveUserTimes()">SAVE</button>
      </div>
    </div>
    <p>You can change your color here:</p>
    <div class="padding-bottom">
      <colorPick></colorPick>
    </div>
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
p {
  margin: 0.6em 0;
  text-align: center;
}

.parameter-control {
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  font-size: 2rem;
  font-weight: 200;
}

.save-button {
  width: 100%;
  border-radius: 50px;
  height: 5rem;
  border: none;
  background-color: var(--main-accent-color);
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 0.5em 0;
}

.paramerer-buttons-wrapper {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.parameter-button {
  i {
    padding: 0.7em;
  }
}

.parameter-time-text {
  letter-spacing: 0.1em;
  font-weight: 100;
  font-size: 1.8rem;
}

.parameter-label {
  padding-left: 0.2em;
}

.padding-bottom {
  padding-bottom: 35%;
}
</style>