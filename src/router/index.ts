import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

import loginMiddleware from "./login";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/week",
    name: "Week",
    component: () => import("@/views/Week.vue"),
  },
  {
    path: "/modules",
    name: "Modules",
    component: () => import("@/views/exceptions/ComingSoon.vue"),
  },
  {
    path: "/exams",
    name: "Exams",
    component: () => import("@/views/Exams.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: () => import("@/views/Feedback.vue"),
  },

  /* 404 page */
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/exceptions/404NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach(loginMiddleware);

export default router;
