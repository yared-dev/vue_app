import getters from "./getters";
import users from "./modules/users/index";
import notifications from "./modules/notifications/index";
/**
 * Export the vuex store configuration.
 *
 * @type {Object}
 */
export default {
  getters,
  modules: { users, notifications },
};
