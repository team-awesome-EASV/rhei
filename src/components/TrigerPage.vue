<template>
  <div class="fullscreen main-padding padding-bottom padding-all">
    <div class="main-view flex-between">
      <h1>Tell us more</h1>
      <div class="autocomplete-container">
        <h3>
          Write down how you feel, or click the results that best suit your
          feelings:
        </h3>

        <!-- WOULD BE NICE IF IT WAS POSSIBLE TO REMOVE A FEELING THAT WE ONCE ADDED IF WE MADE A MISTAKE, also full array of feelings pops out at some point, and its weird. lets talk about that tomorrow. JUlia -->

        <autocomplete :feelingsCheck="true"></autocomplete>
      </div>
      <div class="autocomplete-container">
        <h3>
          Write down what made you feel like this, or click the results that
          best suit your situation:
        </h3>
        <autocomplete :feelingsCheck="false"></autocomplete>
      </div>
      <!--
     <div class="trigger-textarea">
        <label for="aboutTriger">
          <h3>Tell us more about what made you feel like this:</h3>
        </label>
        <textarea class="textarea-style inner-shadow" name="about" id="aboutTriger"></textarea>
      </div>
      -->
    </div>
    <button v-on:click="goToNext" class="main-button padding-all">See your progress</button>
  </div>
</template>
<script>
import autocomplete from "../components/Autocomplete";

export default {
  components: {
    autocomplete: autocomplete
  },
  methods: {
    goToNext() {
      if (this.$route.name === "TrigerPage")
        this.$router.push({ name: "ProgressPage" });
      else if (this.$route.name === "ProgressPage")
        this.$router.push({ name: "Home" });
      else this.$router.push({ name: "TrigerPage" });
    }
  }
};
</script>
<style lang="scss" scoped>
.textarea-style {
  width: 100%;
  min-height: 25vh;
  font-size: 1.4rem;
  padding: 1rem;
}
// .padding-bottom {
//   padding-bottom: 20vh;
// }
.trigger-textarea {
  margin-top: 2rem;
}
.autocomplete-container {
  margin-bottom: 1rem;
}

.flex-between {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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