  export default {
  PUSH_NOTIFICATION(state, notification) {
    state.notification.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
    });
  },
  REMOVE_NOTIFICATION(state, removeNotification) {
    state.notification = state.notification.filter((notification) => {
      return notification.id != removeNotification.id;
    });
  },
};
