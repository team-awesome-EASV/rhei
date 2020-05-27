
<template>
  <div class="fullscreen main-padding">
    <!-- <div class="arrow-controls">
      <router-link to="connect-dots"> 
         <i class="fas fa-arrow-circle-left arrow-size"></i>
      </router-link>
    </div>-->
    <div class="background-container">
      <div class="circle large color-dark position-top"></div>
      <div class="circle medium color-light position-right"></div>
      <div class="circle small color-blue postion-left-middle"></div>
      <div class="circle small position-left-bottom color-dark"></div>
    </div>
    <div class="main-view">
      <h1>Wierd animals feature get sum</h1>
      <div class="container">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background-container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  background-color: hsl(201, 100%, 99%);
}
.postion-left-middle {
  position: absolute;
  bottom: 20vh;
  left: 5vh;
}
.position-top {
  position: absolute;
  top: -287vh;
  left: -120vh;
}
.position-right {
  position: absolute;
  top: 20vh;
  right: -5vh;
}
.position-left-bottom {
  position: absolute;
  bottom: 4vh;
  left: -3vh;
}
.circle {
  border-radius: 50%;
}
.small {
  height: 20vh;
  width: 20vh;
}
.medium {
  height: 50vh;
  width: 50vh;
}

.large {
  height: 300vh;
  width: 300vh;
}
.color-light {
  background-color: hsl(201, 100%, 96%);
}
.color-dark {
  background-color: hsl(201, 100%, 94%);
}
.color-blue {
  background-color: hsl(201, 100%, 92%);
}
.color-green {
  background-color: #00ff65;
}
</style>