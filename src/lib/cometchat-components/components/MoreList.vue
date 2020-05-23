<template>
  <div>
    <!-- <div class="ccl-left-panel-head-wrap">
      <h4 class="ccl-left-panel-head-ttl">More</h4>
    </div> -->
    <div class="cc1-left-panel-user">
      <div class="cc1-left-panel-user-thumb">
        <img v-if="user.avatar" :src="user.avatar" width="100%" />
        <img v-else src="./../assets/images/people-2_2.jpg" width="100%" />
      </div>
      <div class="cc1-left-panel-user-name-wrap">
        <h6 class="cc1-left-panel-user-name">{{ user.name }}</h6>
        <button @click="logout()">Logout</button>
      </div>
    </div>

    <div class="cc1-left-panel-myacc-opts-wrap">
      <div class="cc1-left-panel-myacc-opts-list-ttl ccl-text-uppercase">
        Other
      </div>
      <div class="cc1-left-panel-myacc-opts-list">
        <a
          href="https://forum.cometchat.com/"
          target="_blank"
          class="cc1-left-panel-myacc-opt help ccl-semi-bold-text"
          ><span class="cc1-left-panel-myacc-optname"></span>Help</a
        >
        <a
          href="https://forum.cometchat.com/"
          target="_blank"
          class="cc1-left-panel-myacc-opt report ccl-semi-bold-text"
          ><span class="cc1-left-panel-myacc-optname"></span>Report a Problem</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";

export default {
  name: "MoreList",
  data() {
    return {
      user: CometChat.getLoggedinUser().then(usr => {
        if (usr) {
          this.user = usr;
          // console.log(this.loggedInUser, '++++');
        }
      })
    };
  },
  methods: {
    logout() {
      CometChat.logout().then(() => {
        this.$router.push({
          path: "/"
        });
      });
    }
  }
};
</script>
<style scoped lang='scss'>
.ccl-semi-bold-text {
  font-weight: 600;
}
.ccl-text-uppercase {
  text-transform: uppercase;
}
.ccl-blue-color {
  color: #39f;
}
.clearfix::after,
.clearfix::before {
  content: " ";
  display: table;
}
.clearfix,
.clearfix::after {
  clear: both;
}
.page-int-wrapper {
  display: flex;
  position: fixed;
  height: 100%;
  width: 100%;
}
.ccl-left-panel {
  width: 280px;
  border-right: 1px solid #eaeaea;
  height: 100vh;
  position: relative;
}
.ccl-left-panel-head-wrap,
.ccl-right-panel-head-wrap {
  padding: 20px 16px;
  position: relative;
}
.ccl-left-panel-head-ttl,
.ccl-right-panel-head-ttl {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
}
.ccl-left-panel-footer-wrap {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1;
}
/* .ccl-left-panel-nav-listitem{display:inline-block;width:20%;float:left;text-align:center} */
.ccl-left-panel-nav-link {
  display: inherit;
  padding: 32px 20px;
}

.cc1-left-panel-user {
  padding: 20px 16px;
}
.cc1-chat-win-user-thumb,
.cc1-left-panel-user-thumb {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  vertical-align: middle;
  border-radius: 24px;
  overflow: hidden;
}
.cc1-chat-win-user-name-wrap,
.cc1-left-panel-user-name-wrap {
  display: inline-block;
  vertical-align: middle;
}
.cc1-chat-win-user-name,
.cc1-left-panel-user-name {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.1px;
  line-height: 22px;
}
.cc1-chat-win-user-status,
.cc1-left-panel-user-status {
  font-size: 13px;
  letter-spacing: -0.1px;
  line-height: 20px;
}
.cc1-left-panel-myacc-opts-wrap {
  padding: 10px 0;
}
.cc1-left-panel-myacc-opts-list-ttl {
  color: #969696;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 20px;
  margin-bottom: 5px;
  padding: 0 16px;
}
.cc1-left-panel-myacc-opts-list {
  margin-bottom: 22px;
}
.cc1-left-panel-myacc-opt {
  display: block;
  padding: 15px 15px 15px 48px;
  position: relative;
}
.cc1-left-panel-myacc-opt.notifications {
  background: url(./../assets/images/svg/notification-black-icon.svg) 16px
    center no-repeat;
}
.cc1-left-panel-myacc-opt.privacy {
  background: url(./../assets/images/svg/privacy-black-icon.svg) 16px center
    no-repeat;
}
.cc1-left-panel-myacc-opt.chats {
  background: url(./../assets/images/svg/chat-black-icon.svg) 16px center
    no-repeat;
}
.cc1-left-panel-myacc-opt.help {
  background: url(./../assets/images/svg/help-black-icon.svg) 16px center
    no-repeat;
}
.cc1-left-panel-myacc-opt.report {
  background: url(./../assets/images/svg/report-black-icon.svg) 16px center
    no-repeat;
}
.cc1-left-panel-myacc-optname {
  display: block;
  position: relative;
}
.cc1-left-panel-myacc-optname::before {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: rgba(20, 20, 20, 0.1);
  left: 0;
  bottom: -33px;
  z-index: -1;
}
.dark-theme {
  background-color: #141414;
  color: #fff;
}
.dark-theme .ccl-left-panel {
  border-right: 1px solid #484848;
}
.dark-theme .ccl-left-panel-footer-wrap {
  background-color: #141414;
}
</style>