<template>
  <div class="flex">
    <h1 class="test" @mouseover="moveOnHover" @mouseleave="moveOnHover">
      Move me
    </h1>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  components: {},
  data() {
    return {
      mouseHover: gsap.timeline({ paused: true })
    };
  },
  methods: {
    moveOnHover: function() {
      this.mouseHover.reversed(!this.mouseHover.reversed());
    }
  },
  mounted() {
    this.mouseHover
      .to(".test", { id: "move", scale: 1.1, duration: 0.2 })
      .reverse();
  }
};
</script>

<style scoped>
</style>