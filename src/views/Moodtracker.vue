<template>
  <div class="main-padding padding-bottom">
    <chooseMood></chooseMood>
    <autocomplete></autocomplete>
    <moodDisplay></moodDisplay>
  </div>
</template>

<script>
import autocomplete from "../components/Autocomplete";
import chooseMood from "../components/ChoseMood";
import moodDisplay from "../components/TheMoodDislpay";
export default {
  components: {
    autocomplete: autocomplete,
    chooseMood: chooseMood,
    moodDisplay: moodDisplay
  }
};
</script>

<style lang="scss" scoped>
.padding-bottom {
  padding-bottom: 20vh;
}
</style>