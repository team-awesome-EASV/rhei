<template>
  <div class="fullscreen main-padding">
    <div class="main-view">
      <Therapy></Therapy>
      <TheCalmDown />
    </div>
  </div>
</template>

<script>
import TheCalmDown from "../components/illustrations/TheCalmDown";
import Therapy from "../components/TherapyPermiumUser";
export default {
  components: {
    TheCalmDown,
    Therapy
  }
};
</script>

<style>
</style>