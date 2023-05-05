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
import { Component, Prop, Vue } from "vue-property-decorator";
import Navbar from "@/components/shared/Navbar.vue";
import axios from "axios";

@Component({ components: { Navbar } })
export default class App extends Vue {
  get isAuthenticated() {
    return this.$store.getters.isAuthenticated;
  }
  mounted() {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      this.$store.commit("setUser", JSON.parse(user));
      this.$store.commit("authenticate", true);
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
