<template>
  <div>
    <h1>this is the Main screen page</h1>

    <p :style="{color : loadUser.hex}">this must have the accent color</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["accentColor"]),
    loadUser() {
      return this.$store.state.accentColor;
    }
  },
  created() {}
};
</script>

<style>
</style>
