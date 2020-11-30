<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="relative max-w-sm w-full space-y-8 bg-white shadow p-4 rounded">
      <div>
        <img
          class="absolute top-0 h-24 w-24 -mt-12"
          src="../../assets/logo.png"
          alt="logo"
        />
      </div>
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
            type="submit"
            @click="login()"
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
  login() {
    this.$router.push("/accueil");
  }
}
</script>

<style></style>
