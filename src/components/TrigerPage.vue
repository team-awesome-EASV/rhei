<template>
  <div class="fullscreen main-padding padding-bottom padding-all">
    <div class="main-view">
      <h1>Triger Page</h1>
      <autocomplete></autocomplete>
      <div>
        <label for="aboutTriger">
          <h3>Tell us more about what mage you feel like this:</h3>
        </label>
        <textarea class="textarea-style inner-shadow" name="about" id="aboutTriger"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
import autocomplete from "../components/Autocomplete";

export default {
  components: {
    autocomplete: autocomplete
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
.padding-bottom {
  padding-bottom: 20vh;
}
</style>