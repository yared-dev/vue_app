import { AUTH_USER } from "../../mutation-types";

/**
 * The module's state mutators.
 *
 * @author Yared Galindo <yaredper@gmail.com>
 */
export default {
  /**
   * Add the given model(s) to the store.
   *
   * @param {Object} state
   * @return {void}
   */
  [AUTH_USER](state, bollean) {
    state.loggedIn = bollean;
  },
};
