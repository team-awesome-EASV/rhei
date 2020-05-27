<template>
  <div class="main-screen-container" v-show="wasHere">
    <div class="account-settings-banner">
      <div class="date-wrapper">
        <h1>Welcome back Rick!</h1>
        <h2>{{ getDate() }}</h2>
      </div>
      <div class="account-settings-container">
        <UserSettingsWrapper />
      </div>
    </div>
    <!-- <router-link id="videoPage" to="onboard-video">
      Watch video {{ wasHere }}
    </router-link> -->
    <div class="user-activity-wrapper outer-shadow-unactive"></div>
    <div class="features-swiper-wrapper">
      <FeaturesSwiper> </FeaturesSwiper>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserSettingsWrapper from "../components/UserSettingsWrapper";
import FeaturesSwiper from "../components/FeaturesSwiper";
export default {
  components: {
    UserSettingsWrapper,
    FeaturesSwiper
  },
  methods: {
    getDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      today =
        dd +
        " " +
        this.getMonthName(today.getMonth()) +
        ", " +
        this.getDayName(today.getDay());
      return today;
    },
    getMonthName(mm) {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const monthNumber = mm;
      return monthNames[monthNumber];
    },
    getDayName(dd) {
      var dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];
      const dayNumber = dd - 1;
      return dayNames[dayNumber];
    }
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
.main-screen-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
}

.date-wrapper {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: flex-start;
}

.account-settings-banner {
  margin-bottom: 1.4rem;
  width: 90%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.account-settings-container {
  width: 10vh;
  height: 100%;
}

.user-activity-wrapper {
  width: 90%;
  height: 12vh;
  margin-bottom: 1.4rem;
}

.features-swiper-wrapper {
  width: 100%;
  height: 40vh;
  box-sizing: border-box;
  padding: 1rem 0 1rem 0;
}

// .illuWrapper {
//   width: 100%;
// }

// #videoPage {
//   margin-left: 30%;
//   margin-top: 15px;
// }
</style>
