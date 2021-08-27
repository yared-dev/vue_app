import axios from "axios";
import { AUTH_USER } from "@/store/mutation-types";
import router from "@/router/index";
export default {
  /**
   * Get all the posts.
   *
   * @param {Function} payload.commit
   * @return {void}
   */
  async auth({ commit, dispatch }, model) {
    
    axios
      .post("http://localhost:3000/auth/login", model)
      .then((response) => {
        commit(AUTH_USER, true);
        dispatch(
          "addNotification",
          {
            type: "success",
            message: "Usuario Correcto",
          },
          { root: true }
        );
        if (response.status === 201) {
          const token = response.data.data.accessToken;
          const name = response.data.data.user.name;
          localStorage.setItem("yared_token", token);
          localStorage.setItem("yared_name", name);
        }
        router.push({ path: "/" });
      })
      .catch((e) => {
        commit(AUTH_USER, false);
        console.log(e);
        localStorage.setItem("yared_token", "");
        localStorage.setItem("yared_name", "");
        dispatch(
          "addNotification",
          {
            type: "danger",
            message: "Usuario Incorrecto",
          },
          { root: true }
        );
      });
  },
};
