<template>
  <div>
    <h1>this is the Main screen page</h1>

    <p :style="{ color: loadUser.hex }">this must have the accent color</p>
    <h2 class="accent-color">
      this must alose be in accents color but with css var
    </h2>
    <TheConnectIllu />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheConnectIllu from "../components/illustrations/TheConnectIllu";
export default {
  components: {
    TheConnectIllu
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
