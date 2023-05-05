<template>
  <!--
  <div class="flex h-10 w-full  bg-red-700 px-8 items-center justify-center">
    <img src="../../assets/logo.png" class="h-10 w-10 "/>
    <nav class="w-full">
      <ul class="h-full w-full list-none space-x-4 flex items-center justify-end">
        <li><router-link to="/accueil" class="p-4 rounded-full transition duration-500 ease-in-out focus:outline-none bg-white-500 text-black hover:text-opacity-50 transform hover:-translate-y-1 hover:scale-110"> Accueil </router-link></li>
        <li ><router-link to="/calendar" class="p-4 rounded-full transition duration-500 ease-in-out focus:outline-none bg-white-500 text-black hover:text-opacity-50 transform hover:-translate-y-1 hover:scale-110">Calendrier</router-link></li>
        <li ><button class="p-4 rounded-full transition duration-500 ease-in-out focus:outline-none bg-white-500 text-black hover:text-opacity-50 transform hover:-translate-y-1 hover:scale-110">Notre équipe</button></li>
        <li><button class="p-4 rounded-full transition duration-500 ease-in-out focus:outline-none bg-white-500 text-black hover:text-opacity-50 transform hover:-translate-y-1 hover:scale-110">Déconnexion</button></li>
         
      </ul>
    </nav>
    </div>-->
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-red-700">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-12">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            v-on:click.prevent="showDropDown = !showDropDown"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --></button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-10 w-auto"
              src="../../assets/logo.png"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-10 w-auto"
              src="../../assets/logo.png"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-if="vol"
                to="/accueil"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
                >Accueil</router-link
              >
              <router-link
                to="/responsables"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
                >Responsables</router-link
              >
              <router-link
                v-if="respJaune"
                to="/volontaires"
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
                >Volontaires</router-link
              >
              <!-- <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
                >Aide sociale</a
              >
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
                >Stock</a
              >-->
              <router-link
                to="/calendar"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white capitalize"
                >évènements</router-link
              >
              <!--<router-link  :to="{name:'Accueil',params: { scrollb:true }}"  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white " >Contact</router-link>-->
              <button
                @click="scroll()"
                v-if="vol"
                class="px-3 py-2 border-none rounded-md text-sm font-medium text-gray-300 focus:outline-none hover:text-white "
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <a
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
          >
            {{ user.prenom }} {{ user.nom }}
          </a>
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
                v-on:click.prevent="showDropDownuser = !showDropDownuser"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
            <transition
              enter-active-class="transition-all duration-300 ease-in-out "
              enter-class="h-0 "
              enter-to-class="h-24"
              leave-active-class="transition-all duration-300 ease-in-out "
              leave-class="h-24 "
              leave-to-class="h-0"
            >
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 z-10  rounded-b-md shadow-lg bg-red-700 ring-1 ring-black ring-opacity-5  overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                v-if="showDropDownuser"
              >
                <button
                  href="#"
                  class="block px-3 py-2 text-left w-full rounded-md h-12 text-sm font-medium text-white hover:text-red-700 hover:bg-white "
                >
                  Profile
                </button>

                <button
                  v-on:click="logout"
                  class="block px-3 py-2 text-left w-full rounded-md h-12 text-sm font-medium text-white hover:text-red-700 hover:bg-white"
                >
                  Déconnexion
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
    <div v-if="showDropDown" class=" sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-if="vol"
          to="/accueil"
          class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
          >Accueil</router-link
        >
        <router-link
          to="/responsables"
          class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
          >Responsables</router-link
        >
        <router-link
          v-if="respJaune"
          to="/volontaires"
          href="#"
          class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
          >Volontaires</router-link
        >
        <!-- <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
                >Aide sociale</a
              >
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white "
                >Stock</a
              >-->
        <router-link
          to="/calendar"
          class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white capitalize"
          >évènements</router-link
        >
        <!--<router-link  :to="{name:'Accueil',params: { scrollb:true }}"  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white " >Contact</router-link>-->
        <button
          @click="scroll()"
          v-if="vol"
          class="block px-3 py-2 border-none rounded-md text-sm font-medium text-gray-300 focus:outline-none hover:text-white "
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component
export default class Navbar extends Vue {
  showDropDownuser = false;
  showDropDown = false;
  get user() {
    return this.$store.getters.getUser;
  }
  get vol() {
    return this.$store.getters.isVolontaire;
  }
  get respJaune() {
    return this.$store.getters.isResponsableJeunes;
  }

  @Watch("$route")
  hideNav() {
    this.showDropDown = false;
  }

  scroll() {
    this.$emit("scroll");
  }
  logout() {
    this.$store.commit("setUser", {});
    this.$store.commit("authenticate", false);
    localStorage.removeItem("user");
    this.$router.push("/");
  }
}
</script>
<style></style>
