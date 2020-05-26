<template>
  <div class="main-view padding-all">
    <h1>this is user settings page</h1>

    <p>you can change your clor here:</p>
    <colorPick></colorPick>
  </div>
</template>

<script>
import colorPick from "../components/Color";

export default {
  name: "juansi",
  components: {
    colorPick: colorPick
  },

  data() {
    return {};
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