import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/week",
    name: "Week",
    component: () => import("../views/Week.vue"),
  },
  {
    path: "/modules",
    name: "Modules",
    component: () => import("../views/Modules.vue"),
  },
  {
    path: "/exams",
    name: "Exams",
    component: () => import("../views/exceptions/ComingSoon.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },

  /* 404 page */
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/exceptions/404NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
