<template>
  <div>
    <form class="form-style padding-all outer-shadow">
      <inputelement name="Username" place="your username" type="text"></inputelement>
      <inputelement name="Password" place="your password" type="password"></inputelement>
      <router-link to="/">
        <button @click="grantAccess(true)" class="main-button padding-all" type="submit">Go to login</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import inputelement from "../components/InputField";
import { mapActions } from "vuex";
export default {
  components: {
    inputelement: inputelement
  },
  methods: {
    ...mapActions(["grantAccess"])
  }
};
</script>

<style lang="scss" scoped>
.form-style {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
.main-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 2rem 0;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 100%;
}
</style>