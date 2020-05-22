<template>
  <div>
    <h1>this is the Main screen page</h1>

    <p :style="{ color: loadUser.hex }">this must have the accent color</p>
    <TheCalmDown />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheCalmDown from "../components/illustrations/TheCalmDown";
export default {
  components: {
    TheCalmDown
  },
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
