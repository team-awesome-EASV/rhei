<template>
  <div class="main-padding">
    <div class="main-view">
      <section class="top-nav flex-space-between">
        <logo></logo>
        <ul class="flex-space-around">
          <li>
            <router-link class="margin-right" to="/login">login</router-link>
          </li>
          <li>
            <router-link class="margin-right" to="/sign-up"
              >sign-up</router-link
            >
            <div class="border-bottom"></div>
          </li>
        </ul>
      </section>
      <section class="top-sign-up-section">
        <h1 class="vertical-allign-bottom">
          Hello,
          <br />how are you?
        </h1>
      </section>
      <signupform></signupform>
    </div>
  </div>
</template>

<script>
import logo from "@/components/Logo";
import signupform from "../components/SignUpForm";

export default {
  components: {
    logo: logo,
    signupform: signupform
  }
};
</script>

<style lang="scss" scoped>
.top-sign-up-section {
  height: 25vh;
  background: url("../assets/welcome illustration.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
}
.border-bottom {
  height: 4px;
  background-color: #444444;
  width: 80%;
  border-radius: 2px;
}
</style>