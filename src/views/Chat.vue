<template>
  <div>
    <h1>this is the Chat page</h1>
    <TheChatContacts />
    <TheChatChat />
  </div>
</template>

<script>
import TheChatContacts from "../components/illustrations/TheChatContacts";
import TheChatChat from "../components/illustrations/TheChatChat";
export default {
  components: { TheChatContacts, TheChatChat }
};
</script>

<style>
</style>