<template>
  <div class="main-padding" v-show="wasHere">
    <div class="account-settings-banner">
      <UserSettingsWrapper />
    </div>
    <!-- <router-link id="videoPage" to="onboard-video">
      Watch video {{ wasHere }}
    </router-link> -->
    <div class="illuWrapper">
      <!-- <TheConnectIllu /> -->
       <FeaturesSwiper>   </FeaturesSwiper>  
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import TheConnectIllu from "../components/illustrations/TheConnectIllu";
import UserSettingsWrapper from "../components/UserSettingsWrapper";
import FeaturesSwiper from "../components/FeaturesSwiper";
export default {
  components: {
    // TheConnectIllu,
    UserSettingsWrapper,
    FeaturesSwiper
  },
  computed: {
    ...mapGetters(["allUser"]),
    wasHere() {
      return this.allUser.access;
    }
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
