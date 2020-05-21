<template>
  <div>
    <form class="form-style padding-all outer-shadow">
      <inputelement
        name="Username"
        place="your username"
        type="text"
      ></inputelement>
      <inputelement
        name="Password"
        place="your password"
        type="password"
      ></inputelement>
      <main-button type="submit" text="Sign in"></main-button>
    </form>
  </div>
</template>

<script>
import inputelement from "../components/Input-field";
import mainButton from "../components/Main-button";
export default {
  components: {
    inputelement: inputelement,
    "main-button": mainButton
  }
};
</script>

<style lang="scss" scoped>
.form-style {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
</style>