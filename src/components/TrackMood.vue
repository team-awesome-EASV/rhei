<template>
  <div class="mood-tracker-container">
    <div class="text-container">
        <h1>How are you today?</h1>
        <p>Take your time to pin-point how you are doing today.</p>
    </div>
    <div class="mood-parent">
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
  </div>
      <div class="chose-mood-background">
        <div class="illu-container">
          <TrackMoodIllu></TrackMoodIllu>
        </div>
      </div>
    </div>
    <div class="controls-wrapper">
      <transition @enter="showButtons" @leave="hideButtons">
        <div v-show="showModal" class="click-modal">
          <button
            class="main-button outer-shadow"
            @click="registerSelections(), showModal = false ">
              <i class="fas fa-check"></i>
          </button>
          <button @click="deleteSelection(), showModal = false" class="main-button outer-shadow">
            <i class="fas fa-backspace"></i>
          </button>
        </div>
      </transition>
      <button v-on:click="goToNext" class="proceed-button">Go to next page</button>
    </div>
    <div class="map-key-wrapper">
      <div class="icons-wrapper">
        <div class="icon-container">
          <app-icon icon="happiness"></app-icon>
          <p>Feeling happy </p>
        </div>
        <div class="icon-container">
          <app-icon icon="sad"></app-icon>
          <p>Feeling sad</p>
        </div>
      </div>
       <div class="icons-wrapper">
        <div class="icon-container">
           <app-icon icon="HIenergy"></app-icon>
          <p>High Energy</p>
        </div>
        <div class="icon-container">
           <app-icon icon="LOenergy"></app-icon>
          <p>Low Energy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrackMoodIllu from "../components/illustrations/TrackMoodIllu.vue"
import AppIcon from "../components/AppIcon.vue";
import { gsap } from "gsap";
import { mapActions } from "vuex";

export default {
  components: {
    TrackMoodIllu,
     AppIcon
  },
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
    goToNext() {
      if (this.$route.name === "TrigerPage")
        this.$router.push({ name: "ProgressPage" });
      else if (this.$route.name === "ProgressPage")
        this.$router.push({ name: "Home" });
      else this.$router.push({ name: "TrigerPage" });
    },
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
    },
    showButtons: function(el, done) {
      let modalAnim = gsap.timeline({ paused: true, onComplete: done });
      modalAnim
        .set(el, {
          scale:0,
          opacity:0
        })
        .to(el, {
          scale:1,
          opacity:1,
          duration:0.5,
          ease: "bounce.out",
        });
      modalAnim.play();
    },
    hideButtons: function(el, done) {
      let modalAnim = gsap.timeline({ paused: true, onComplete: done });
      modalAnim
        .set(el, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out"
        })
        .to(el, {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "power4.out"
        });
      modalAnim.play();
    },
     repulseAnim: function(el, done) {
      let repulseAnim = gsap.timeline({ paused: true, onComplete: done });
      repulseAnim
        .set(el, {
          scale:0,
          opacity:0
        })
        .to(el, {
          scale:3,
          opacity:1,
          duration:3,
          ease: "bounce.out",
        });
      repulseAnim.play();
    },
  },

  computed: {
    // updateMoodPositions(allPositions)
  },

  mounted() {
    this.boxLocation.left = this.$refs.moodArea.getBoundingClientRect().left;
    this.boxLocation.top = this.$refs.moodArea.getBoundingClientRect().top;
    this.boxLocation.width = this.$refs.moodArea.getBoundingClientRect().width;
    this.boxLocation.height = this.$refs.moodArea.getBoundingClientRect().height;

    this.$refs.buttons
    
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
  height: 70%;
  z-index: 99;
  width:    70%;
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
  border-radius: 10px;
  margin-top: 1.5rem;
  background-color: var(--main-accent-color);
  width: 45%;
  height:8vh;
  padding: 1rem 1rem;
}

.fas{
  font-size:2.5rem;
}

.click-modal {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  width:40vh;
  height:10vh;
}

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
  margin:0.4rem;
  color:var(--text-color);
}

p{
  margin:0.5rem;
  font-size:1.2rem;
}
.mood-parent {
  position: relative;
  width: 100%;
  height: 52vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.mood-chosen-repulse{
  position: absolute;
  transform:translate(0.8rem,-1.3rem);
  background-color: blueviolet;
}

.proceed-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 40vh;
  height:9vh;
  margin-bottom:2rem;
  margin-top:1rem;
}

.controls-wrapper{
  width:100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.map-key-wrapper{
  width:100%;
  height:15vh;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
}

.icons-wrapper{
  display: flex;
  width:75%;
  height:100%;
  align-items: center;
  justify-content: center;
}

.icon-container{
  display: flex;
  align-items: center;
  justify-content:flex-start;
  width:50%;
  margin-left:1.3rem;
  margin-bottom:1rem;
}
</style>