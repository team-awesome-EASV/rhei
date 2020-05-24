<template>
  <div class="container">
      <div @click="showControls = !showControls" class="profile-controls-wrapper">
        <i class="las la-cog picture-cog"></i>
      </div>
      <div v-if="showControls" class="profile-controls-popup">
          <!-- <i class="las la-cog popup-cog"></i>
          <i class="las la-power-off"></i> -->
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
          showControls: false
    }
  }
}
</script>



<style lang="scss" scoped>

.container{
  position:static;
}
 
.profile-controls-wrapper{
  width:10vh;
  height:10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
  background-color: var(--main-accent-color); 
  background-image:url("../assets/photos/rick.png");
  background-size:100% 100%;
   position:absolute;
}

.la-cog{
  color:blue;
  font-size:40px;
  margin-top:40px;
  margin-left:60px;
}

.profile-controls-popup{
  height:25vh;
  width:10vh;
  border-radius:40px;
  overflow: hidden;
  background-color: brown;
}

</style>