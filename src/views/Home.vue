<template>
  <div class="main-screen-container"  v-show="wasHere">
    <div class="account-settings-banner">
      <div class="date-wrapper">
        <h1>Tues 11</h1>
      </div>
      <div class="account-settings-container">
        <UserSettingsWrapper />
      </div>
    </div>
    <!-- <router-link id="videoPage" to="onboard-video">
      Watch video {{ wasHere }}
    </router-link> -->
    <div class="user-activity-wrapper">

    </div>
    <div class="features-swiper-wrapper">
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

<style lang="scss" scoped >

.main-screen-container{
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top:2rem;
}

.date-wrapper{
  width:50% ;
  height:100%;
  display: flex;
  align-items:flex-start;
}

.account-settings-banner {
  margin-bottom: 1.4rem;
  width: 90%;
  height:20vh;
  display: flex;
  align-items: center;
  justify-content:space-between;
  position: relative;
  
}

.account-settings-container{
  width:10vh;
  height:100%;
}

.user-activity-wrapper{
  width:90%;
  height:12vh;
  background-color: darkgoldenrod ;
  margin-bottom: 1.4rem;
}

.features-swiper-wrapper{
  width:100%;
  height:40vh;
}

// .illuWrapper {
//   width: 100%;
// }


// #videoPage {
//   margin-left: 30%;
//   margin-top: 15px;
// }
</style>
