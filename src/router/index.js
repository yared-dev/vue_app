import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tabla",
    name: "tabla",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Table.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/productos",
    name: "productos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Productos.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/formulario",
    name: "formulario",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Form.vue"),
    meta: { requireAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  base: "/",
});
if (!localStorage.getItem("yared_token")) {
  router.push({ name: "formulario" });
} else {
  store.state.users.loggedIn = true;
}
router.beforeEach((to, from, next) => {
  console.log("antes de crear las routes");
  if (to.matched.some((route) => route.meta.requireAuth)) {
    if (!store.state.users.loggedIn) {
      console.log("mandando al formulario ");
      next({ name: "formulario" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
