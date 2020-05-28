<template>
  <div class=" ">
    <div class="">
      <h1>This is the premium therapy page</h1>
      <router-link to="/"> Home </router-link>
    </div>
    <div class="illu-wrap">
      <TheLogin />
      <ThePassword />
    </div>
    <div class="fill"></div>
  </div>
</template>

<script>
import TheLogin from "../components/illustrations/TheLogin";
import ThePassword from "../components/illustrations/ThePassword";
export default {
  components: {
    TheLogin,
    ThePassword
  }
};
</script>

<style scoped>
.fill {
  height: 200px;
}
.illu-wrap {
  width: 50%;
}
</style>
