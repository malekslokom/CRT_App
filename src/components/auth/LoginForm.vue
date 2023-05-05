<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    @keyup.enter="login"
  >
    <div class="relative max-w-sm w-full space-y-8 bg-white shadow p-4 rounded">
      <div>
        <img
          class="absolute top-0 h-24 w-24 -mt-12 "
          src="../../assets/logo.png"
          alt="logo"
        />
      </div>
      <!-- Alert Error -->
      <div
        class="bg-red-200 px-4 py-2  w-full rounded-md text-lg flex items-center  xl:w-2/4"
        v-if="erreur"
      >
        <svg
          viewBox="0 0 24 24"
          class="text-red-700 w-5 h-5 sm:w-5 sm:h-5 mr-3"
        >
          <path
            fill="currentColor"
            d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
          ></path>
        </svg>
        <span class="text-red-800">
          L’e-mail ou le mot de passe entré ne correspond à aucun compte
        </span>
      </div>
      <!-- End Alert Error -->
      <form class=" space-y-4  " action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class=" shadow-sm ">
          <div>
            <label for="username">Nom d'utilisateur</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              class="input w-full"
              placeholder="Nom d'utilisateur"
              v-model="username"
            />
          </div>
          <div class="mt-4">
            <label for="password">Mot de passe</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              class="input w-full "
              placeholder="Mot de passe"
              v-model="pw"
            />
          </div>
        </div>

        <div class="flex items-center justify-end">
          <div class="text-sm">
            <a href="#" class="font-medium text-red-600 hover:text-red-500">
              Mot de passe oublié?
            </a>
          </div>
        </div>

        <div>
          <button
            @click.prevent="login"
            class="group relative btn btn-primary w-full flex justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: lock-closed -->
              <svg
                class="h-5 w-5 text-white group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Se Connecter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  @Prop()
  erreur!: boolean;
  username = "";

  pw = "";
  login() {
    console.log(this.username);
    this.$emit("login", this.username, this.pw);

    //this.$router.push("/accueil");
  }
  // get user() {
  //return this.$store.getters.getUser;
  //}
}
</script>

<style></style>
