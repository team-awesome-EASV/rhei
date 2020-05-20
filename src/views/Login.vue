<template>
  <div>
    <div class="main-view">
      <section class="top-nav flex-space-between">
        <logo></logo>
        <ul class="flex-space-around">
          <li>
            <router-link class="margin-right" to="/login">login</router-link>
            <div class="border-bottom"></div>
          </li>
          <li>
            <router-link class="margin-right" to="/sign-up">sign-up</router-link>
          </li>
        </ul>
      </section>
      <loginform></loginform>
    </div>
    <h1>this is the login page</h1>
  </div>
</template>

<script>
import logo from "@/components/Logo";
import loginform from "@/components/Login-form";
export default {
  components: {
    logo: logo,
    loginform: loginform
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
.top-nav {
  align-items: center;
}
.border-bottom {
  height: 4px;
  background-color: #444444;
  width: 80%;
  border-radius: 2px;
}
</style>