<template>
  <div>
    <TheDotGame @showPicture="illuShow = true" />
    <div class="absolute-instruction">
      <h1>
        Connect the dots<br />
        as they appear and see what shape they create.
      </h1>
    </div>
  </div>
</template>

<script>
import TheDotGame from "@/components/TheDotGame.vue";
export default {
  components: {
    TheDotGame
  },

  data() {
    return {
      illuShow: false
    };
  }
};
</script>

<style lang="scss" scoped>
.absolute-instruction {
  position: absolute;
  top: 70%;
  left: 0;
  h1 {
    margin: 0 auto;
    width: 80%;
    text-align: left;
  }
}

.absolute-illu {
  position: absolute;
  width: 80vh;
  top: 0%;
  left: 0%;

  transform: translate(10%, 10%);
}
</style>