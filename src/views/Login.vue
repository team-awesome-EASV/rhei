<template>
  <div class="main-padding">
    <div class="main-view">
      <section class="top-nav flex-space-between">
        <logo></logo>
        <ul class="flex-space-around">
          <li>
            <router-link class="margin-right" to="/login">login</router-link>
            <div class="border-bottom"></div>
          </li>
          <li>
            <router-link class="margin-right" to="/sign-up"
              >sign-up</router-link
            >
          </li>
        </ul>
      </section>
      <section class="top-login-section">
        <h1 class="vertical-allign-bottom">
          Hello,
          <br />how are you?
        </h1>
      </section>
      <loginform></loginform>
    </div>
    <section class="bottom-login-section">
      <a href="#">Forgot Password?</a>
    </section>
  </div>
</template>

<script>
import logo from "@/components/Logo";
import loginform from "@/components/LoginForm";
export default {
  components: {
    logo: logo,
    loginform: loginform
  }
};
</script>

<style lang="scss">
.top-nav {
  align-items: center;
}
.border-bottom {
  height: 4px;
  background-color: #444444;
  width: 80%;
  border-radius: 2px;
}
.top-login-section {
  height: 25vh;
  background: url("../assets/welcome illustration.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
}
.bottom-login-section {
  height: 20vh;
  background: url("../assets/forgot pasword illustration.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>