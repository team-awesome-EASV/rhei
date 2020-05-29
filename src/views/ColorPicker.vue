<template>
  <div class="main-padding">
    <div class="main-view">
      <logo class="logo-center"></logo>

      <section class="top-color-section">
        <h1 class="vertical-allign-bottom">
          Let's start, pick a color.
        </h1>
      </section>
      <colorPick></colorPick>
      <div class="button-section">
        <router-link to="/login">
          <button class="color-button padding-all" type="button">
            Go to login
          </button>
        </router-link>
        <p>You can change the chosen color later in the settings</p>
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
.button-section {
  p {
    margin: 1em 0;
    font-size: 1rem;
    font-weight: 100;
  }
}
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
.top-color-section {
  display: flex;
  align-items: center;
  justify-content: center;

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