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
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

import { Component, Vue } from "vue-property-decorator";

@Component({ components: { Navbar } })
export default class App extends Vue {
  get isAuthenticated() {
    return this.$store.getters.isAuthenticated;
  }
  async mounted() {
    const user = localStorage.getItem("user");
    if (user) {
      this.$store.commit("setUser", JSON.parse(user));
      this.$store.commit("authenticate", true);

      const firebaseConfig = {
        apiKey: "AIzaSyBy0mf6sYtk5C3iaZyLOPkvDTpkKX6AmR0",
        authDomain: "crtapp-f7a6e.firebaseapp.com",
        projectId: "crtapp-f7a6e",
        storageBucket: "crtapp-f7a6e.appspot.com",
        messagingSenderId: "1035988667108",
        appId: "1:1035988667108:web:a7afcd94fca6cb8a90baf1",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // Initialize Firebase Cloud Messaging and get a reference to the service
      const messaging = getMessaging(app);

      getToken(messaging, {
        vapidKey:
          "BN4MONe9XMfpC-NWYXPSGnIzkb6uxYNyyRgz1cgmvMcyDLXvIlvUtJFpBOVYw7z0ATpOBJeF89op7lgW_3pIzMM",
      })
        .then((currentToken) => {
          if (currentToken) {
            fetch("/api/v1/push-notifications/subscription", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                currentToken,
                _id: JSON.parse(user)._id,
              }),
            });
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
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
