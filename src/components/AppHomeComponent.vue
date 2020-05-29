<template>
  <div>
    <div
      style="text-align: center; display: flex;"
      v-if="!showloader"
      class="padding-all"
    >
      <div style="margin: auto;">
        <div style=" width: 150px; margin: auto;"></div>

        <p
          style="margin:auto; font-size: 42px; font-weight: 500;line-height: 54px;"
        >
          Rhei community
        </p>

        <p style="margin:auto; padding: 10px; text-align: justify;">
          Rhei prototype utilizes the trial version of
          <a href="https://www.cometchat.com/" target="_blank">Cometchat Pro</a>
          . Login with one of our sample users.
        </p>
        <div class="grid-container">
          <div class="userSelector">
            <img
              :src="require('../assets/avatars/rick-min.png')"
              style="margin: 5px; max-width: 41px;"
            />
            <p style="margin: auto;">
              <a href="javascript:;" v-on:click="login($event, 'superhero1')">
                Rick
              </a>
            </p>
          </div>
          <div class="userSelector">
            <img
              :src="require('../assets/avatars/morty-min.png')"
              style="margin: 5px; max-width: 41px;"
            />
            <p style="margin: auto;">
              <a href="javascript:;" v-on:click="login($event, 'superhero2')"
                >Morty</a
              >
            </p>
          </div>
          <div class="userSelector">
            <img
              :src="require('../assets/avatars/head-min.png')"
              style="margin: 5px; max-width: 41px;"
            />
            <p style="margin: auto;">
              <a href="javascript:;" v-on:click="login($event, 'superhero3')"
                >Head</a
              >
            </p>
          </div>
          <div class="userSelector">
            <img
              :src="require('../assets/avatars/meeseks-min.png')"
              style="margin: 5px; max-width: 41px;"
            />
            <p style="margin: auto;">
              <a href="javascript:;" v-on:click="login($event, 'superhero4')"
                >Mr Meeseeks</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else-if="showloader" />
  </div>
</template>
<script>
import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONSTANTS } from "../CONSTS";
import Loader from "./Loader";

export default {
  name: "AppHomeComponent",
  components: {
    Loader
  },
  data() {
    return {
      // showUi: false,
      showloader: false,
      uid: null
    };
  },
  methods: {
    login(event, uid) {
      this.showloader = true;
      if (event) {
        event.preventDefault();
      }

      if (uid) {
        this.uid = uid;
      }

      CometChat.login(this.uid, COMETCHAT_CONSTANTS.API_KEY).then(
        () => {
          this.$router.push({
            path: "/embeded-app"
          });
          console.log("login succes");
        },
        error => {
          this.showSpinner = false;
          alert(
            "Whops. Something went wrong. This commonly happens when you enter a username that doesn't exist. Check the console for more information"
          );
          console.log("Login failed with error:", error.code);
        }
      );

      // CometChat.login(this.uid, COMETCHAT_CONSTANTS.API_KEY).then(user =>  {
      //   console.log("current log : ", user);
      //   // location.href = "/embeded-app";
      //   this.showloader = false;
      // });
    }
  },
  created() {
    CometChat.getLoggedinUser().then(
      user => {
        if (user) {
          this.$router.push({
            path: "/embeded-app"
          });
          this.uid = user.getUid();
        } else {
          this.showloader = false;
        }
      },
      error => {
        console.log("yes here", error);
        this.showloader = false;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
.userSelector {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  font-weight: 600;

  border-radius: 22px;
  background: linear-gradient(
    145deg,
    var(--button-color-first),
    var(--button-color-second)
  );
  box-shadow: 8px 8px 16px #d3d4db, -8.8px -8.8px 30px -35px #d3d4db;
}

.userSelector:hover {
  cursor: pointer;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 2rem;
}

input {
  border: 2px solid #aaa;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  padding: 5px;
  font-weight: 550;
  color: #555;
}

.loginButton {
  width: 76px;
  height: 40px;
  border-radius: 10px;
  margin: auto;
  margin-top: 10px;
  color: white;
  padding: 10px;
  text-align: center;
  background: #333;
}

.loginButton:hover {
  cursor: pointer;
}
</style>