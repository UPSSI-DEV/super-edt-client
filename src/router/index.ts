import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/week",
  },
  {
    path: "/week",
    name: "Week",
    component: () => import("@/views/Week.vue"),
  },
  {
    path: "/modules",
    name: "Modules",
    component: () => import("@/views/Modules.vue"),
  },
  {
    path: "/exams",
    name: "Exams",
    component: () => import("@/views/exceptions/ComingSoon.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
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

export default router;
