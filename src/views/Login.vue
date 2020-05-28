<template>
  <div class="main-padding">
    <div class="main-view">
      <section class="top-nav flex-space-between">
        <logo></logo>
        <ul class="flex-space-around">
          <li>
            <div class="margin-right switch-text" @click="userExists = true">
              login
            </div>
          </li>
          <li>
            <div class="margin-right switch-text" @click="userExists = false">
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
      <transition mode="out-in" @enter="enter" @leave="leave" :css="false">
        <keep-alive>
          <component :is="activeComponent"></component>
        </keep-alive>
      </transition>
      <transition
        mode="in-out"
        @enter="enterSection"
        @after-enter="afterEnterSection"
        @leave="leaveSection"
        :css="false"
      >
        <div class="bottom-login-section" v-show="userExists">
          <a href="#">Forgot Password?</a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import logo from "@/components/Logo";
import loginform from "@/components/LoginForm";
import signupform from "../components/SignUpForm";
import { gsap } from "gsap";
export default {
  components: {
    logo: logo,
    loginform: loginform,
    signupform: signupform,
    positionHelper: null
  },

  data() {
    return {
      userExists: true
    };
  },

  computed: {
    activeComponent() {
      if (this.userExists) return "loginform";
      else return signupform;
    }
  },

  methods: {
    enter(el, done) {
      console.log("enter");
      gsap.fromTo(
        el,
        { x: "-150%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          onComplete: done
        }
      );
    },

    leave(el, done) {
      console.log("leave");
      gsap.to(el, {
        x: "150%",
        opacity: 1,
        duration: 0.5,
        ease: "back.in(1.7)",
        onComplete: done
      });
    },
    enterSection(el, done) {
      let enterAnim = gsap.timeline({ paused: true, onComplete: done });

      // enterAnim.set(el, { y: 100 });
      enterAnim.to(
        el,

        {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          onComplete: done
        }
      );

      enterAnim.play();
      this.positionHelper = gsap.getProperty(el, "y");
      console.log("enter section");
    },

    afterEnterSection(el) {
      gsap.set(el, { y: 0 });
      gsap.to(el, { opacity: 1 });
    },

    leaveSection(el, done) {
      console.log("leave section");
      gsap.fromTo(
        el,
        { y: 0, opacity: 1 },
        {
          y: "300%",
          opacity: 0,
          duration: 0.5,
          ease: "back.in(1.7)",
          onComplete: done
        }
      );
    }
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
  // background: url("../assets/welcome illustration.png");
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: right;
  display: flex;
  h1 {
    text-align: left;
  }
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
  // background: url("../assets/forgot pasword illustration.png");
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>