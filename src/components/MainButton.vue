<template>
  <button class="main-button padding-all" @submit.prevent="grantAccess(true)" :type="type">{{text}}</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    type: String,
    text: String
  },
  methods: {
    ...mapActions(["grantAccess"])
  },
  mounted() {
    this.$emit("grantAccess", "true");
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 2rem 0;
  background-color: var(--main-accent-color);
  color: #ffffff;
}
</style>