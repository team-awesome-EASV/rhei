<template>
  <div class="main-padding">
    <!-- <h1>this is the Main screen page</h1>

    <p :style="{ color: loadUser.hex }">this must have the accent color</p>
    <h2 class="accent-color">
      this must alose be in accents color but with css var
    </h2>-->
    <div class="account-settings-banner">
      <UserSettingsWrapper />
    </div>
    <router-link id="videoPage" to="onboard-video"> Watch video </router-link>
    <div class="illuWrapper">
      <TheConnectIllu />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheConnectIllu from "../components/illustrations/TheConnectIllu";
import UserSettingsWrapper from "../components/UserSettingsWrapper";
export default {
  components: {
    TheConnectIllu,
    UserSettingsWrapper
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["accentColor"]),
    loadUser() {
      return this.$store.state.accentColor;
    }
  },
  created() {}
};
</script>

<style>
.illuWrapper {
  width: 100%;
}

.account-settings-banner {
  margin-bottom: 160px;
  width: 100%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
#videoPage {
  margin-left: 30%;
  margin-top: 15px;
}
</style>
