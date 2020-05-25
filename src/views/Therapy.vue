<template>
  <div class="fullscreen main-padding">
    <div class="main-view">
      <h1>this is the premiun therapy page</h1>
      <router-link to="/"> home </router-link>
    </div>
    <TheCalmDown />
  </div>
</template>

<script>
import TheCalmDown from "../components/illustrations/TheCalmDown";
export default {
  components: {
    TheCalmDown
  }
};
</script>

<style>
</style>
