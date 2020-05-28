<template>
  <div class="clickContainer">
    <div class="clickArea" ref="moodArea" @click="clickRecorder">
      <div
        class="clickPoint"
        v-bind:style="{
          top: positionElement.top + '%',
          left: positionElement.left + '%'
        }"
      ></div>
    </div>
    <div v-show="showModal" class="click-modal">
      <button
        class="main-button"
        @click="registerSelections(), showModal = false "
      >Resister selection</button>
      <button
        @click="deleteSelection(), showModal = false"
        class="main-button delete"
      >Delete selection</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MoodPosition",
  data() {
    return {
      coordX: 0,
      coordY: 0,
      showModal: false,
      boxLocation: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      },
      positionOneElement: {
        date: 0,
        top: 0,
        left: 0
      },
      allPositions: [],
      positionElement: {
        top: 0,
        left: 0
      }
    };
  },
  methods: {
    ...mapActions([
      "populateMood", // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      "this.positionOneElement" // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    populateArray() {
      this.allPositions.push(
        new this.createObjectElement(
          this.positionOneElement.date,
          this.positionOneElement.left,
          this.positionOneElement.top
        )
      );
      this.populateMood(
        new this.createObjectElement(
          this.positionOneElement.date,
          this.positionOneElement.left,
          this.positionOneElement.top
        )
      );
    },
    createPositionElement() {
      this.positionOneElement.date = new Date();
      this.positionOneElement.left =
        (this.coordX / this.boxLocation.width) * 100;
      this.positionOneElement.top =
        (this.coordY / this.boxLocation.height) * 100;
    },
    createObjectElement(date, left, top) {
      this.date = date;
      this.left = left;
      this.top = top;
    },

    positionStyle() {
      this.positionElement.left = (this.coordX / this.boxLocation.width) * 100;
      this.positionElement.top = (this.coordY / this.boxLocation.height) * 100;
    },

    clickRecorder(event) {
      // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      this.coordX = event.offsetX; // x coordinate
      this.coordY = event.offsetY; // y coordinate
      this.positionStyle();
      this.showModal = true;
    },
    deleteSelection() {
      this.positionElement.left = 0;
      this.positionElement.top = 0;
    },
    registerSelections() {
      this.createPositionElement();
      this.populateArray();
    }
  },

  computed: {
    // updateMoodPositions(allPositions)
  },

  mounted() {
    this.boxLocation.left = this.$refs.moodArea.getBoundingClientRect().left;
    this.boxLocation.top = this.$refs.moodArea.getBoundingClientRect().top;
    this.boxLocation.width = this.$refs.moodArea.getBoundingClientRect().width;
    this.boxLocation.height = this.$refs.moodArea.getBoundingClientRect().height;
  }

  // mounted() {
  //   this.boxLocation.left = this.$refs.moodArea.getBoundingClientRect().left;
  //   this.boxLocation.top = this.$refs.moodArea.getBoundingClientRect().top;
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
  height: 100%;
  width: 100%;
}
.clickArea {
  width: 100%;
  height: 100%;
  position: relative;
}
.clickPoint {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: var(--main-accent-color);
  position: absolute;
}
.main-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 1.5rem;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 60%;
  padding: 1rem 1rem;
}
.delete {
  background-color: #681c1c;
}
.click-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 40px;
}
</style>
