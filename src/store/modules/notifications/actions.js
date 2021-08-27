export default {
  addNotification({ commit }, notification) {
    commit("PUSH_NOTIFICATION", notification);
  },
  removeNotification({ commit }, removeNotification) {
    commit("REMOVE_NOTIFICATION", removeNotification);
  },
};
