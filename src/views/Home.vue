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
    </router-link>-->
    <div class="quote-day-wrapper outer-shadow-unactive">
      <div class="quoteDay">
        <component :is="view" :data-quote1="quote1" :data-quote2="quote2"></component>
      </div>
      <!--       <div class="panel-footer social">
        <ul>
           <button @click="newQuote">REFRESH</button>
        </ul>
      </div>-->
    </div>
    <div class="features-swiper-wrapper">
      <FeaturesSwiper></FeaturesSwiper>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserSettingsWrapper from "../components/UserSettingsWrapper";
import FeaturesSwiper from "../components/FeaturesSwiper";
import q1 from "@/components/q1.vue";
import q2 from "@/components/q2.vue";
export default {
  components: {
    UserSettingsWrapper,
    FeaturesSwiper,
    q1,
    q2
  },
  data() {
    return {
      toggle: 0,
      view: "q1",
      isVisible: true,
      quote1: "",
      quote2: "",
      quotes: [
        "“Give yourself the same care and attention that you give to others. And watch yourself bloom” -Plutarch",
        "“A great man shows his greatness by the way he treats little men“ ― Thomas Carlyle",
        "“What we achieve inwardly will change outer reality”  - Plutarch",
        "“Your present circumstances don’t determine where you can go. It merely determines where you start” - Nido Qubein",
        "“The journey of a thousand miles begins with a single step“ ― Laozi",
        "“Remember that failure is an event, not a person“ ― Zig Ziglar",
        "“The master has failed more times than the beginner has even tried“ ― Zig Ziglar",
        "“Your character should always be stronger than your circumstances“ ― Zig Ziglar",
        "“All our dreams can come true if we have the courage to pursue them“ ― Walt Disney",
        "“It is only in sorrow bad weather masters us. In joy we face the storm and defy it” - Amelia Barr",
        "“You, yourself, as much as anybody in the entire universe, deserves your love and affection” - The Buddha",
        "“Every day begins with an act of courage and hope: getting out of bed” - Mason Cooley",
        "“Not until we are lost, do we begin to understand ourselves” -Henry David Thoreau",
        "“The best way out is through” -Robert Frost",
        "“It is during our darkest moment that we must focus to see the light” - Aristotle",
        "“Out of suffering have emerged the strongest souls. The most massive characters are seared with scars” - Khalil Gibran",
        "“I can’t change the direction of the wind, but I can adjust my sails to always reach my destination” - Jimmy Dean",
        "“I think you have to try and fail, because failure gets you closer to what you’re good at” – Louis C.K.",
        "“Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky” – Rabindranath Tagore"
      ]
    };
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
    },
    newQuote: function() {
      var random_no = 0;
      this.toggle = !this.toggle;
      this.toggle == 0 ? (this.view = "q1") : (this.view = "q2");

      random_no = Math.floor(Math.random() * this.quotes.length);
      this.quote1 = this.quotes[random_no];
      random_no = Math.floor(Math.random() * this.quotes.length);
      this.quote2 = this.quotes[random_no];
    }
  },

  computed: {
    ...mapGetters(["allUser"]),
    wasHere() {
      return this.allUser.access;
    },
    urlQuote: function() {
      return encodeURI(this.quote1);
    }
  },

  mounted() {
    this.newQuote();
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
  margin-bottom: 0.2rem;
  width: 90%;
  height: 17vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.account-settings-container {
  width: 10vh;
  height: 100%;
}

.quote-day-wrapper {
  width: 88%;
  height: 12vh;
  margin-bottom: 0.3rem;
  margin-top: 1.1rem;
}

.quoteDay {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-top: 1rem;
  margin-right: 1rem;
  font-style: italic;
}

.features-swiper-wrapper {
  width: 100%;
  height: 50vh;
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
