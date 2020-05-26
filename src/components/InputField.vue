<template>
  <div class="form-element-style">
    <label :for="name">{{ name }}</label>
    <input
      class="input-style inner-shadow"
      v-bind:type="type"
      :id="name"
      :name="name"
      :placeholder="place"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    place: String,
    type: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.form-element-style {
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  margin: 1rem 0;
  width: 100%;
  .input-style {
    padding: 1em 1em;
    font-size: 1em;
    margin-top: 5px;
    // background: inherit;
    &::placeholder {
      font-weight: 200;
    }
  }
  // label {
  //   font-size: 1.5rem;
  //   font-weight: 300;
  // }
}
</style>