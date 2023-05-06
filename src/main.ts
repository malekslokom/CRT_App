import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import "vue-popperjs/dist/vue-popper.css";
import App from "./App.vue";
import "./assets/styles/index.css";
import router from "./router";
import store from "./store";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service worker registered", registration);
      })
      .catch((error) => {
        console.log("Service worker registration failed", error);
      });
  });
}

Vue.config.productionTip = false;

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // Your Firebase configuration goes here
};

const app = initializeApp(firebaseConfig);

export default app;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
