<template>
  <div class="main-padding">
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
import TheConnectIllu from "../components/illustrations/TheConnectIllu";
import UserSettingsWrapper from "../components/UserSettingsWrapper";
export default {
  components: {
    TheConnectIllu,
    UserSettingsWrapper
  }
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
