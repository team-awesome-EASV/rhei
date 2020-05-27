<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide outer-shadow-unactive">Slide 1</div>
      <div class="swiper-slide outer-shadow-unactive">Slide 2</div>
      <div class="swiper-slide outer-shadow-unactive">Slide 3</div>
      <div class="swiper-slide outer-shadow-unactive">Slide 4</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "timeline",
  data() {
    return {};
  },

  mounted() {
    new Swiper(".swiper-container", {
      //pagination: '.swiper-pagination',
      spaceBetween: 15,
      centeredSlides: true,
      slidesPerView: 1.4,

      autoplay: {
        delay: 3500,
        disableOnInteraction: true
      },
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
  text-align: center;
  font-size: 18px;
  border-radius:10px;

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
</style>