<template>
  <div>
    <h1>this is the Chat page</h1>
    <TheChatContacts />
    <TheChatChat />
    <TheChatGroups />
    <TheChatSettings />
    <div class="fill"></div>
  </div>
</template>

<script>
import TheChatContacts from "../components/illustrations/TheChatContacts";
import TheChatChat from "../components/illustrations/TheChatChat";
import TheChatGroups from "../components/illustrations/TheChatGroups";
import TheChatSettings from "../components/illustrations/TheChatSettings";
export default {
  components: { TheChatContacts, TheChatChat, TheChatGroups, TheChatSettings }
};
</script>

<style>
.fill {
  height: 200px;
}
</style>