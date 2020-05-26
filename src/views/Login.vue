<template>
  <div class="main-padding">
    <div class="main-view">
      <section class="top-nav flex-space-between">
        <logo></logo>
        <ul class="flex-space-around">
          <li>
            <div
              class="margin-right switch-text"
              to="/login"
              @click="userExists = true"
            >
              login
            </div>
          </li>
          <li>
            <div
              class="margin-right switch-text"
              to="/login"
              @click="userExists = false"
            >
              sign up
            </div>
          </li>
        </ul>
      </section>
      <section class="top-login-section">
        <h1 class="vertical-allign-bottom">
          Hello,
          <br />how are you?
        </h1>
      </section>
      <loginform v-if="userExists"></loginform>
      <signupform v-else></signupform>
    </div>
    <section class="bottom-login-section" v-if="userExists">
      <a href="#">Forgot Password?</a>
    </section>
  </div>
</template>

<script>
import logo from "@/components/Logo";
import loginform from "@/components/LoginForm";
import signupform from "../components/SignUpForm";
export default {
  components: {
    logo: logo,
    loginform: loginform,
    signupform: signupform
  },

  data() {
    return {
      userExists: true
    };
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
  height: 18vh;
  background: url("../assets/welcome illustration.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
}

.switch-text {
  font-size: 1.2rem;
  font-weight: 300;
  position: relative;

  &:after {
    content: "";
    height: 0.25em;
    width: 0%;
    background: var(--main-accent-color);
    position: absolute;
    left: 0;
    bottom: -0.3em;

    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
}
.bottom-login-section {
  height: 18vh;
  margin-top: 0.5rem;
  background: url("../assets/forgot pasword illustration.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>