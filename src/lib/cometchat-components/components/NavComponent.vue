<template>
  <div class="ccl-left-panel-nav-list clearfix">
    <div class="ccl-left-panel-nav-listitem">
      <a
        id="contactlist"
        href="javascript:void(0);"
        v-on:click="tabClickHandler($event)"
        class="ccl-left-panel-nav-link active people "
      >
        <app-icon icon="people-grey-icon"></app-icon>
      </a>
    </div>

    <div class="ccl-left-panel-nav-listitem chat">
      <a
        id="chatlist"
        href="javascript:void(0);"
        v-on:click="tabClickHandler($event)"
        class="ccl-left-panel-nav-link chat "
      >
        <app-icon icon="chat-grey-icon"></app-icon
      ></a>
    </div>
    <div class="ccl-left-panel-nav-listitem">
      <a
        id="grouplist"
        href="javascript:void(0);"
        v-on:click="tabClickHandler($event)"
        class="ccl-left-panel-nav-link grp-chat"
        ><app-icon icon="group-chat-grey-icon"></app-icon
      ></a>
    </div>
    <div class="ccl-left-panel-nav-listitem">
      <a
        id="morelist"
        href="javascript:void(0);"
        v-on:click="tabClickHandler($event)"
        class="ccl-left-panel-nav-link more"
        ><app-icon icon="more-grey-icon"></app-icon
      ></a>
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";
export default {
  name: "Nav",
  components: { AppIcon },
  methods: {
    tabClickHandler(e) {
      e.preventDefault();

      let currEle = e.currentTarget;
      let currentTabName = currEle.getAttribute("id");
      let oldActive = document.querySelector(".active");
      oldActive.classList.remove("active");

      if (currentTabName == "contactlist") {
        currEle.classList.add("active");
        // this.activeTab = "contacts";
        this.$emit("activeTab", "contacts");
      } else if (currentTabName === "calllist") {
        currEle.classList.add("active");
        // this.activeTab = "call";
        this.$emit("activeTab", "call");
      } else if (currentTabName === "chatlist") {
        currEle.classList.add("active");
        // this.activeTab = "chat";
        this.$emit("activeTab", "chat");
      } else if (currentTabName === "grouplist") {
        currEle.classList.add("active");
        // this.activeTab = "groups";
        this.$emit("activeTab", "groups");
      } else {
        currEle.classList.add("active");
        // this.activeTab = "more";
        this.$emit("activeTab", "more");
      }
    }
  }
};
</script>


<style  lang="scss" scoped>
.active {
  filter: saturate(200%) drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
  transform: scale(1.2);
}
</style>
