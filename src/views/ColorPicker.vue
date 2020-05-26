<template>
  <div class="main-padding">
    <div class="main-view">
      <section class="top-nav flex-space-between">
        <router-link to="/">
          <logo></logo>
        </router-link>
        <ul class="flex-space-around">
          <li>
            <router-link class="margin-right" to="/login">login</router-link>
            <div class="border-bottom"></div>
          </li>
          <li>
            <router-link class="margin-right" to="/sign-up"
              >sign-up</router-link
            >
          </li>
        </ul>
      </section>
      <section class="top-login-section">
        <h1 class="vertical-allign-bottom">
          Let's start,
          <br />pick a color.
        </h1>
      </section>
      <section class="color-picker-container padding-all outer-shadow">
        <div
          v-for="(color, index) in allColors"
          :key="index"
          :style="{ background: color.hex }"
          :title="color.hsl"
          class="color-element outer-shadow"
          @click="setAccentColor(color), setUserColor(color)"
        ></div>
      </section>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: false
    };
  },
  components: {
    logo: logo
  },
  computed: {
    ...mapGetters(["allColors", "accentColor"])
  },
  methods: {
    ...mapActions(["setAccentColor", "setUserColor"])
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
  height: 25vh;
  background: url("../assets/welcome illustration.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
}
.color-picker-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  margin-top: 1rem;
}
.color-element {
  height: 70px;
  width: 70px;
}
.no-shadow {
  box-shadow: 1px 1px 2px #d3d4db, -1px -1px 2px #ffffff;
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