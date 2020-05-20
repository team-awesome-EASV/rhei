<template>
  <div>
    <label for="name">{{username}}</label>
    <input type="text" id="name" name="name" placeholder="{placeholder}" />
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    placeholder: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>