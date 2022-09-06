import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { createPinia } from "pinia";

import VueFeather from "vue-feather";
import "./assets/theme.css";

import "./tools/date";

import { useRegisterSW } from "virtual:pwa-register/vue";

// pwa registration

const sw = useRegisterSW({
  onNeedRefresh() {
    console.log("New content available");
  },
  onOfflineReady() {
    console.log("Content is ready for offline use");
  },

  onRegistered(r) {
    console.log("Service worker registered");
  },
});

// Vue setup

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.use(router);
app.use(createPinia());

app.mount("#app");
