import { RouteLocationNormalized as Route } from "vue-router";
import { currentClass } from "@/stores/app-state";

// Exports

export default loginMiddleware;

// Methods

function loginMiddleware(to: Route, from: Route) {
  // Small function that redirects to login if the user hasn't selected a class

  if (currentClass.value === "" && to.path != "/") return { path: "/" };
  if (currentClass.value !== "" && to.path == "/") return { path: "/week" };
}
