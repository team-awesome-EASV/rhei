<template>
  <div>
    <div class="ccl-left-panel-head-wrap">
      <!-- <h4 class="ccl-left-panel-head-ttl">
        {{ activeTab.charAt(0).toUpperCase() + activeTab.slice(1) }}
      </h4> -->
      <div class="illu-wrapper">
        <TheChatContacts class="illustration" v-if="activeTab === 'contacts'" />
        <TheChatChat class="illustration" v-if="activeTab === 'chat'" />
        <TheChatGroups class="illustration" v-if="activeTab === 'groups'" />
        <TheChatSettings class="illustration" v-if="activeTab === 'more'" />
      </div>
    </div>
  </div>
</template>

<script>
import TheChatContacts from "@/components/illustrations/TheChatContacts.vue";
import TheChatChat from "@/components/illustrations/TheChatChat.vue";
import TheChatGroups from "@/components/illustrations/TheChatGroups.vue";
import TheChatSettings from "@/components/illustrations/TheChatSettings.vue";

export default {
  name: "SidebarHeader",
  props: ["activeTab"],
  components: {
    TheChatContacts,
    TheChatChat,
    TheChatGroups,
    TheChatSettings
  }
};
</script>

<style>
.headerContainer {
  width: 100%;
}

.illu-wrapper {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration {
  width: 70%;
}
</style>
