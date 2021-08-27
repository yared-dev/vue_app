<template>
  <div class="notification-list">
    <NotificationMessage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "@/components/NotificationMessage";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    NotificationMessage,
  },
  computed: {
    ...mapGetters({ notifications: "getValue" }),
  },
};
</script>

<style scoped>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  margin-right: 2rem;
}
</style>
