<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide outer-shadow-unactive">
         <div class="text-container">
            <h1>Connect</h1>
              <p>
                Take a deep breath with 3 steeps
                mindfulness routine and get back to reality. 
               </p>
          </div>
        <div class="illu-container">
          <TheConnectIllu></TheConnectIllu>
        </div>
      </div>
      <div class="swiper-slide outer-shadow-unactive">
        <div class="text-container">
            <h1>Calm down</h1>
              <p>
                Take a deep breath with 3 steeps
                mindfulness routine and get back to reality. 
               </p>
          </div>
        <div class="illu-container">
          <TheCalmDown></TheCalmDown>
        </div>
      </div>
      <div class="swiper-slide outer-shadow-unactive">
         <div class="text-container">
            <h1>Moodtracker</h1>
              <p>
                Take a deep breath with 3 steeps
                mindfulness routine and get back to reality. 
               </p>
          </div>
        <div class="illu-container">
          <TheMoodTrackerIllu></TheMoodTrackerIllu>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import TheConnectIllu from "../components/illustrations/TheConnectIllu";
import TheMoodTrackerIllu from "../components/illustrations/TheMoodTrackerIllu";
import TheCalmDown from "../components/illustrations/TheCalmDown";

export default {
  components: {
    TheConnectIllu,
    TheMoodTrackerIllu,
    TheCalmDown
  },
  name: "timeline",
  data() {
    return {};
  },

  mounted() {
    new Swiper(".swiper-container", {
      //pagination: '.swiper-pagination',
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 1.13,

      autoplay: {
        delay: 3500,
        disableOnInteraction: true
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("../styles/_swiper.scss");

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  height: 95%;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  flex-direction: column;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.illu-container {
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  transform: translate(5.2rem,-1.8rem);
}

.change-position{
  transform: translate(10rem,0);
}

.text-container{
  z-index: 99;
  width:75%;
  height:15vh;
  display: flex;
  align-items:flex-start;
  flex-direction: column;
  justify-content:center;
  transform: translate(-3rem,7.2rem);
}

h1{
  margin:0.3rem;
  padding: 0;
}

p{
  margin:0;
  padding: 0;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0;
  left: 0;
  transform: translate(0rem,-2rem);
  width: 100%;
}
</style>