import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import VueFeather from "vue-feather";
import "./assets/tailwind.css";

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.use(router);
app.use(store);

app.mount("#app");
