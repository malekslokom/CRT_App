<template>
  <div class="w-full h-full overflow">
    <body class="antialiased font-sans">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div class="my-2 flex  sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">
              <div class="relative">
                <select
                  class="h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  v-model="num"
                >
                  <option :value="5" selected>Voir 5</option>
                  <option :value="10">Voir 10</option>
                  <option :value="25">Voir 25</option>
                  <option :value="50">Voir 50</option>
                  <option :value="100">Voir 100</option>
                </select>

                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
              <div class="relative ">
                <select
                  class="appearance-none rounded h-full border-t  sm:rounded-r-none sm:border-r-0 border-r border-b block  w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-red-500"
                >
                  <option>tous</option>
                  <optgroup label="Payément">
                    <option>Payé</option>
                    <option>Non pas payé</option>
                  </optgroup>
                  <optgroup label="Attestation">
                    <option>FPS</option>
                    <option>FPSE</option>
                    <option>Monitorat</option>
                  </optgroup>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="block relative ">
              <span
                class="h-full absolute  inset-y-0 left-0 flex items-center pl-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-500"
                >
                  <path
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                  ></path>
                </svg>
              </span>
              <input
                placeholder="Chercher"
                class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2  bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
            <div class="block absolute md:mr-32 right-0 px-4">
              <router-link to="/volontaire/ajouter">
                <button
                  class="text-red-700 text-sm rounded py-2 px-4 border border-red-700 font-medium bg-white hover:text-white focus:outline-none  hover:bg-red-700"
                >
                  <i class="fas fa-user-plus mr-2"></i>Ajouter
                </button></router-link
              >
            </div>
          </div>
          <div class="-mx-4 sm:mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-red-700 text-center text-xs font-bold text-red-700 uppercase tracking-wider"
                    >
                      Volontaire
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-red-700  text-center text-xs font-bold text-red-700 uppercase tracking-wider"
                    >
                      Attestation
                    </th>

                    <th
                      class="px-5 py-3 border-b-2 border-red-700  text-center text-xs font-bold text-red-700 uppercase tracking-wider"
                    >
                      Payé
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 text-xs font-bold  border-red-700  text-center text-red-700 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody v-for="x in num" :key="x">
                  <tr>
                    <td
                      class="px-5 py-5 border-b border-red-700 bg-white text-sm"
                    >
                      <div class="flex items-center">
                        <router-link
                          to="/volontaire/profile"
                          class="flex-shrink-0 w-10 h-10"
                        >
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </router-link>

                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {{ tab[y][0] }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-red-700 bg-white text-sm"
                    >
                      <p class="text-gray-900 text-center whitespace-no-wrap">
                        {{ tab[y][1] }}
                      </p>
                    </td>

                    <td
                      class="px-5 py-5 border-b border-red-700 bg-white text-sm"
                    >
                      <span
                        class="relative  px-3 py-1 flex justify-center leading-tight"
                      >
                        <span
                          aria-hidden
                          class="absolute inset-0 text-center   rounded-full"
                          :class="
                            tab[y][2] == 'Oui' ? 'bg-gray-300' : 'bg-red-500 '
                          "
                        ></span>
                        <span class="relative ">{{ tab[y][2] }}</span>
                      </span>
                    </td>

                    <td
                      class="px-5 py-5 border-b border-red-700  bg-white text-sm"
                    >
                      <div
                        class="flex items-center text-gray-900 whitespace-no-wrap justify-center"
                      >
                        <button
                          class="text-red-700 text-sm rounded py-2 px-4 border border-transparent font-medium bg-white hover:text-white  hover:bg-red-700"
                          @click="supprimer(tab[y][0])"
                        >
                          <i class="fas fa-trash mr-2"></i>Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>-->
              <div class="flex flex-row items-center justify-between my-4">
                <div
                  class="flex flex-wrap items-center justify-start children-x-2 pagination"
                >
                  <button
                    class="btn btn-default btn-default-color transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110"
                    @click="prev()"
                  >
                    Last
                  </button>
                </div>
                <span
                  >Page <b>{{ y + 1 }} of {{ tab.length }}</b>
                </span>
                <button
                  class="btn btn-default btn-default-color transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110"
                  @click="suiv()"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    <div
      class="absolute h-screen w-screen top-0 flex items-center justify-center"
      v-if="supprimerNote"
    >
      <div
        class="fixed h-full w-full bg-gray-600 opacity-25"
        @click="supprimer()"
      ></div>
      <div class="flex bg-red-200 max-w-sm mb-4">
        <div class="w-16 bg-red-600">
          <div class="p-4">
            <svg
              class="h-8 w-8 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="supprimer()"
            >
              <path
                d="M437.019 74.981C388.667 26.629 324.38 0 256 0S123.333 26.63 74.981 74.981 0 187.62 0 256s26.629 132.667 74.981 181.019C123.332 485.371 187.62 512 256 512s132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.668-74.981-181.019zM256 470.636C137.65 470.636 41.364 374.35 41.364 256S137.65 41.364 256 41.364 470.636 137.65 470.636 256 374.35 470.636 256 470.636z"
                fill="#FFF"
              />
              <path
                d="M341.22 170.781c-8.077-8.077-21.172-8.077-29.249 0L170.78 311.971c-8.077 8.077-8.077 21.172 0 29.249 4.038 4.039 9.332 6.058 14.625 6.058s10.587-2.019 14.625-6.058l141.19-141.191c8.076-8.076 8.076-21.171 0-29.248z"
                fill="#FFF"
              />
              <path
                d="M341.22 311.971l-141.191-141.19c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.076-8.077 21.171 0 29.248l141.19 141.191a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058c8.075-8.077 8.075-21.172-.001-29.249z"
                fill="#FFF"
              />
            </svg>
          </div>
        </div>
        <div class="w-auto text-black opacity-75 items-center p-4">
          <span class="text-lg font-bold pb-4">
            Notification
          </span>
          <br />
          <div>
            <p class="leading-tight">
              {{ msg }}
            </p>
            <br />
            <div class="flex items-center justify-end ">
              <button
                class="flex justify-end col-3 text-red-700  text-sm rounded py-2 px-4 border border-transparent font-medium bg-white hover:text-white  hover:bg-red-700"
                @click.prevent="Confirmersupprimer()"
              >
                <i class="fas fa-trash mr-2"></i>Confirmer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute h-screen w-screen top-0 flex items-center justify-center"
      v-if="NotifSucc"
    >
      <div
        class="fixed h-full w-full bg-gray-600 opacity-25"
        @click="closeSuccess()"
      ></div>
      <div class="flex bg-green-200 max-w-sm mb-4">
        <div class="w-16 bg-green-600">
          <div class="p-4">
            <svg
              class="h-8 w-8 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="closeSuccess()"
            >
              <path
                d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z"
              />
              <path
                d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z"
              />
            </svg>
          </div>
        </div>
        <div class="w-auto text-grey-700 items-center p-4">
          <span class="text-lg font-bold pb-4">
            Notification
          </span>
          <p class="leading-tight">
            {{ msgSupp }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class Affichagevolentaires extends Vue {
  supprimerNote = false;
  msg = " Êtes-vous sûr de vouloir supprimer le volontaire ";
  num = 5;
  x = 0;
  y = 0;
  NotifSucc = false;
  tab = [
    ["Vera Carpenter", "Monitorat", "Non"],
    ["Malek Slokom", "FPS", "Oui"],
    ["Ali Ben zaid", "FPS", "Oui"],
    ["Manel", "Slokom", "Non"],
  ];
  suiv() {
    if (this.y < this.tab.length) {
      this.y += 1;
      this.x += 5;
    }
  }
  prev() {
    if (this.y > 0) {
      this.y -= 1;
      this.x -= 5;
    }
  }
  msgSupp = "";
  supprimer(nom: string) {
    this.msg =
      ' Êtes-vous sûr de vouloir supprimer le volontaire "' + nom + '"?';
    this.supprimerNote = !this.supprimerNote;
  }
  Confirmersupprimer() {
    this.supprimerNote = !this.supprimerNote;
    this.msgSupp = "Le volontaire a été supprimé avec succés";
    this.NotifSucc = true;
  }
  closeSuccess() {
    this.NotifSucc = !this.NotifSucc;
  }
}
</script>

<style scoped>
.select-items div:hover {
  background-color: red;
}
</style>
