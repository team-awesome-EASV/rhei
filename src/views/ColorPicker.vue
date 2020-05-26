<template>
  <div class="main-padding">
    <div class="main-view">
      <logo></logo>
      <!-- <section class="top-nav flex-space-between">
        <router-link to="/">
          
        </router-link>
        <ul class="flex-space-around">
          <li>
            <router-link class="margin-right" to="/login">login</router-link>
            <div class="border-bottom"></div>
          </li>
          <li>
            <router-link class="margin-right" to="/sign-up">sign-up</router-link>
          </li>
        </ul>
      </section> -->
      <section class="top-login-section">
        <h1 class="vertical-allign-bottom">
          Let's start, pick a color.
        </h1>
      </section>
      <colorPick></colorPick>
      <div>
        <router-link to="/login">
          <button class="color-button padding-all" type="button">
            Go to login
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/components/Logo";
import colorPick from "../components/Color";
export default {
  data() {
    return {};
  },
  components: {
    logo: logo,
    colorPick: colorPick
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  align-items: center;
}
.border-bottom {
  height: 4px;
  background-color: #444444;
  width: 80%;
  border-radius: 2px;
}
.top-login-section {
  height: 15vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
.color-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 2rem 0;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 100%;
}
</style>