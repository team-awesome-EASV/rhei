<template>
  <div class="main-padding">
    <chooseMood></chooseMood>
    <autocomplete></autocomplete>
  </div>
</template>

<script>
import autocomplete from "../components/Autocomplete";
import chooseMood from "../components/ChoseMood";
export default {
  components: {
    autocomplete: autocomplete,
    chooseMood: chooseMood
  }
};
</script>

<style lang="scss" scoped>
</style>