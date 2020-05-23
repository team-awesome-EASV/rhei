<template>
  <div class="container">
    <div class="main-padding">
      <h1>this is the breathing page</h1>
    </div>


    <div class="indicator-wrapper">
      <div  class="breath-indicator" ref="bubble"></div>
      <div ref="bubblePulse" class="bubble-pulse"></div>
    </div>

    <!--    <main-button   text="Start"></main-button>-->
    <div class="controls-wrapper">
      <button>START</button>
    </div>

  </div>
</template>

<script>
  // import { TimelineLite, Back, Elastic, Expo } from "gsap"
  // import mainButton from "../components/MainButton";

  export default {
    components: {
      // "main-button": mainButton
    },

    data() {
      return {

      };
    },


    // // mounted() {
    // //   const { bubble, bubblePulse } = this.$refs
    // //   const timeline = new TimelineLite()
    // //
    // //   timeline.to(bubble, 1, {
    // //     scale: 5,
    // //     ease: Back.easeOut.config(1),
    // //
    // //   })
    // //   timeline.to(
    // //           bubblePulse,
    // //           0.1,
    // //           {
    // //             scale: 1,
    // //             opacity: 1.5,
    // //           },
    // //           '-=0.6'
    // //   )
    // //
    // //   this.timeline = new TimelineLite({
    // //     onComplete: () => this.timeline.restart()
    // //
    // //   })
    // //
    // //   this.timeline.to(bubble, 8, {
    // //     scale: 0.2,
    // //     ease: Elastic.easeOut.config(0.5, 0.5),
    // //   })
    // //   this.timeline.to(bubblePulse, 1.5,{
    // //             scale: 10,
    // //             opacity: 0,
    // //             ease: Expo.easeOut,
    // //           },
    // //           '-=1.2'
    // //   )
    // }
  };

</script>

<style lang="scss" scoped>

  .indicator-wrapper{
    width:100%;
    height:50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .breath-indicator{
    width:250px;
    height:250px;
    border-radius:50%;
    z-index: 99;
    background-color: #0008ff;

  }

  .bubble-pulse {
    position: absolute;
    z-index: 1;
    height: 20px;
    width: 20px;
    background: royalblue;
    border-radius: 50%;
    opacity: 0.2;
    transform: scale(0);
  }

  .controls-wrapper{
    width:100%;
    height:10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button{
    width:200px;
    height:50px;
    border-radius:10px;
    background-color: #0008ff;
    color: #fcfbf0;
    font-size: 20px;
  }
</style>
