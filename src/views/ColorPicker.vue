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
          v-for="color in allColors"
          :key="color.hsl"
          :style="{ background: color.hex }"
          :title="color.hsl"
          class="color-element outer-shadow"
          @click="setAccentColor(color)"
        ></div>
      </section>
    </div>
  </div>
</template>

<script>
import logo from "@/components/Logo";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    logo: logo
  },
  computed: {
    ...mapGetters(["allColors", "accentColor"])
  },
  methods: {
    ...mapActions(["setAccentColor"])
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
</style>