import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import 'vue-popperjs/dist/vue-popper.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
