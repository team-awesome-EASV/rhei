<template>
  <div class="main-padding">
    <div class="main-view">
      <logo class="logo-center"></logo>
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

.logo-center {
  margin: 0 auto;
}
.border-bottom {
  height: 4px;
  background-color: #444444;
  width: 80%;
  border-radius: 2px;
}
.top-login-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;

  h1 {
    font-weight: 200;
  }
}
.color-button {
  font-size: 1.6rem;
  font-weight: 400;
  border-radius: 10px;
  margin-top: 2rem;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 100%;
}
</style>