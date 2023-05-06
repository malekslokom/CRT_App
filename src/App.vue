<template>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
  <div class="w-screen h-full overflow-x-hidden">
    <navbar v-if="isAuthenticated" @scroll="scroll" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/shared/Navbar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { Navbar } })
export default class App extends Vue {
  get isAuthenticated() {
    return this.$store.getters.isAuthenticated;
  }
  mounted() {
    const user = localStorage.getItem("user");
    if (user) {
      this.$store.commit("setUser", JSON.parse(user));
      this.$store.commit("authenticate", true);
      console.log(user);

      // Check if the user has granted permission to show notifications
      if (Notification.permission === "granted") {
        // Get the Service Worker registration
        navigator.serviceWorker.getRegistration().then((registration) => {
          // Subscribe the user to push notifications
          // @ts-ignore
          registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey:
                "BGrIYlt0V8yKAZ0-Eenr_8H6TVzH16hvpT1RypKVP7Jf446GrPmKAl-_JlLIlywYdTb6sU_iPRIFaeUNdJxhMJo",
            })
            .then((subscription) => {
              // Send the subscription object to your server to save it
              fetch("/api/v1/push-notifications/subscription", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  subscription,
                  _id: JSON.parse(user)._id,
                }),
              });
            })
            .catch((err) => {
              console.error(
                "Failed to subscribe the user to push notifications",
                err
              );
            });
        });
      } else if (Notification.permission !== "denied") {
        // Request permission to show notifications
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            // Subscribe the user to push notifications
            // (same code as above)
          }
        });
      }
    }
  }

  scroll() {
    console.log(this.$router.currentRoute.path);
    if (this.$router.currentRoute.path == "/accueil") {
      console.log(document.body.scrollHeight);
      window.scrollTo(3000, 3000);
    } else {
      this.$router.push({ name: "Accueil", params: { scrollb: "true" } });
    }
  }
}
</script>
