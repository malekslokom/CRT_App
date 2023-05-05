<template>
  <div class="w-full h-full overflow">
    <div class="flex justify-center items-center  min-w-0 mt-20 md:m-20">
      <div
        class="relative max-w-3xl w-full space-y-8 bg-white shadow p-4 rounded"
      >
        <div>
          <img
            class="absolute top-0 h-24 w-24 -mt-12"
            src="../../assets/logo.png"
            alt="logo"
          />
        </div>
        <div class="flex flex-wrap">
          <div class="w-full">
            <ul
              class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row cursor-pointer"
            >
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    'text-red-700 text-sm font-medium bg-white': openTab !== 1,
                    'text-white text-sm font-medium bg-red-700': openTab === 1,
                  }"
                >
                  <i class="fas fa-user text-base mr-1"></i> Profile
                </a>
              </li>

              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center  ">
                <a
                  class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    'text-red-700 text-sm font-medium bg-white': openTab !== 2,
                    'text-white text-sm font-medium bg-red-700': openTab === 2,
                  }"
                >
                  <i class="fa fa-medkit text-base mr-1 "></i> CRT
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                  v-on:click="toggleTabs(3)"
                  v-bind:class="{
                    'text-red-700 text-sm font-medium bg-white': openTab !== 3,
                    'text-white text-sm font-medium bg-red-700': openTab === 3,
                  }"
                >
                  <i class="fas fa-cog text-base mr-1"></i> Compte
                </a>
              </li>
            </ul>
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
            >
              <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                  <div
                    v-bind:class="{
                      hidden: openTab !== 1,
                      block: openTab === 1,
                    }"
                  >
                    <div class="flex items-center justify-start px-2">
                      <div
                        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-4"
                      >
                        <div class="flex  px-2 items-center justify-start">
                          <div class="flex-shrink-0 w-24">
                            <img
                              src="../../assets/malek.png"
                              alt="image"
                              class="shadow rounded-full h-20 w-20 border-2 border-gray-100 mb-2 object-cover object-bottom"
                            />
                          </div>
                          <div class="py-2">
                            <div class="flex items-baseline ">
                              <p
                                class="text-default text-base font-bold whitespace-no-wrap"
                              >
                                Slokom Malek
                              </p>
                              <i
                                class="ml-4 text-red-700 text-base font-semibold fas fa-tint"
                              >
                                <select
                                  v-model="blood"
                                  id=""
                                  class="text-base font-semibold focus:outline-none"
                                >
                                  <option
                                    selected
                                    class="text-base font-semibold"
                                    value="O-"
                                    >O-</option
                                  >
                                  <option
                                    class="text-base font-semibold"
                                    value="O+"
                                    >O+</option
                                  >
                                  <option
                                    class="text-base font-semibold"
                                    value="B-"
                                    >B-</option
                                  >
                                  <option
                                    class="text-base font-semibold"
                                    value="B+"
                                    >B+</option
                                  >
                                  <option
                                    class="text-base font-semibold"
                                    value="A-"
                                    >A-</option
                                  >
                                  <option
                                    class="text-base font-semibold"
                                    value="A+"
                                    >A+</option
                                  >
                                  <option
                                    class="text-base font-semibold"
                                    value="AB-"
                                    >AB-</option
                                  >
                                  <option
                                    class="text-base font-semibold"
                                    value="AB+"
                                    >AB+</option
                                  >
                                </select>
                              </i>
                            </div>
                            <p
                              class="text-secondary text-sm whitespace-no-wrap"
                            >
                              Volontaire
                            </p>
                          </div>
                        </div>
                        <div
                          class=" flex flex-col items-center justify-center py-2 px-2"
                        >
                          <div class=" w-full py-1 children-x-2">
                            <div class="flex items-center">
                              <a :href="fb"
                                ><i
                                  class="flex-3 text-xl text-red-700 text-default fab fa-facebook-f mr-3"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-1 justify-center input h-5"
                                value="https://www.facebook.com/malouka.slokom"
                                v-model="fb"
                              />
                            </div>
                            <div class="flex items-center">
                              <a :href="insta">
                                <i
                                  class="flex-3 text-xl text-red-700 text-default fab fa-instagram mr-2"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-1 justify-center input h-5"
                                value="https://www.instagram.com/slokom_malek/"
                                v-model="insta"
                              />
                              <br />
                            </div>
                            <div class="flex items-center">
                              <a :href="tw">
                                <i
                                  class="flex-3 text-xl text-red-700 text-default fab fa-twitter mr-2"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-1 justify-center input h-5"
                                value="https://twitter.com/MSlokom"
                                v-model="tw"
                              />
                              <br />
                            </div>
                            <div class="flex items-center">
                              <a :href="linkedin">
                                <i
                                  class="flex-3 text-xl text-red-700 text-default fab fa-linkedin-in mr-2"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-1 justify-center input h-5"
                                value="https://www.linkedin.com/in/malek-slokom-38ab92169/"
                                v-model="linkedin"
                              />
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <form class=" space-y-4  " action="#" method="POST">
                      <input type="hidden" name="remember" value="true" />
                      <div class=" shadow-sm ">
                        <div class="flex w-full">
                          <div class="w-1/2">
                            <label for="cin">CIN</label>
                            <input
                              id="cin"
                              name="cin"
                              type="text"
                              class="input w-full "
                              value="14354324"
                            />
                          </div>
                          <div class="w-1/2">
                            <label for="tel">Numéro de Téléphone</label>
                            <input
                              id="tel"
                              name="tel"
                              type="text"
                              class="input w-full "
                              value="54 431 572"
                            />
                          </div>
                        </div>
                      </div>

                      <div class=" shadow-sm ">
                        <div class="flex w-full">
                          <div class="w-1/2">
                            <label for="username">Date de naissance</label>
                            <input
                              id="DateNaissance"
                              name="DateNaissance"
                              type="text"
                              class=" input w-full"
                              value="25-12-1998"
                            />
                          </div>
                          <div class="w-1/2">
                            <label for="username">sexe</label>
                            <input
                              id="gender"
                              name="gender"
                              type="text"
                              class="input w-full"
                              value="Femme"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mt-4">
                        <label for="adresse">Adresse</label>
                        <input
                          id="adresse"
                          name="adresse"
                          type="text"
                          class="input w-full "
                          value="8 Rue gazzeli La Manouba"
                        />
                      </div>

                      <div class="mt-4">
                        <label for="password">Adresse e-mail</label>
                        <input
                          id="adresse"
                          name="adresse"
                          type="text"
                          class="input w-full "
                          value="slokom.malek@gmail.com"
                        />
                      </div>
                      <div class="flex justify-end ">
                        <button
                          type="submit"
                          class=" group relative btn btn-primary w-1/2  justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Enregistrer
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    v-bind:class="{
                      hidden: openTab !== 2,
                      block: openTab === 2,
                    }"
                  >
                    <div class="flex items-center justify-start px-2">
                      <div class="flex-shrink-0 w-24">
                        <img
                          src="../../assets/malek.png"
                          alt="image"
                          class="shadow rounded-full h-20 w-20 border-2 border-gray-100 mb-2 object-cover object-bottom"
                        />
                      </div>
                      <div class="py-2 px-2">
                        <div class="flex items-baseline ">
                          <p
                            class="text-default text-base font-bold whitespace-no-wrap"
                          >
                            Slokom Malek
                          </p>
                          <i
                            class="ml-4 text-red-700 text-base font-semibold fas fa-tint mr-2"
                            >{{ blood }}</i
                          >
                        </div>
                        <p class="text-secondary text-sm whitespace-no-wrap">
                          Volontaire
                        </p>
                        <div
                          class="flex flex-row items-center justify-start w-full py-1 children-x-2"
                        >
                          <a href="https://www.facebook.com/malouka.slokom"
                            ><i
                              class="text-xl text-red-700 text-default fab fa-facebook-f mr-2"
                            ></i
                          ></a>
                          <a href="https://www.instagram.com/slokom_malek/">
                            <i
                              class="text-xl text-red-700 text-default fab fa-instagram mr-2"
                            ></i
                          ></a>
                          <a href="https://twitter.com/MSlokom">
                            <i
                              class="text-xl text-red-700 text-default fab fa-twitter mr-2"
                            ></i
                          ></a>
                          <a
                            href="https://www.linkedin.com/in/malek-slokom-38ab92169/"
                          >
                            <i
                              class="text-xl text-red-700 text-default fab fa-linkedin-in "
                            ></i
                          ></a>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <form class=" space-y-4  " action="#" method="POST">
                      <div class=" shadow-sm mt-4">
                        <div class="flex w-full">
                          <div class="w-1/2">
                            <label for="numvol">Numéro volontaire</label>
                            <input
                              id="numvol"
                              name="numvol"
                              type="text"
                              class="input w-full "
                              value="012345678"
                            />
                          </div>
                          <div class="w-1/2">
                            <label for="adresse">Membre depuis</label>
                            <input
                              id="adresse"
                              name="adresse"
                              type="text"
                              class="input w-full "
                              value="02-02-2017"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mt-4">
                        <label for="password">Attestation</label>
                        <select
                          id="niveau"
                          name="niveau"
                          class="input w-full cursor-pointer "
                        >
                          <option>Premiers Secours</option>
                          <option>Premiers Secours en Equipe</option>
                          <option>Monitorat</option>
                          <option>Insructorat</option>
                        </select>
                      </div>
                      <div class="mt-4">
                        <label for="password">Payé</label>
                        <div
                          class="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in"
                        >
                          <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            class="toggle-checkbox outline-none absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            for="toggle"
                            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                      <div class="flex justify-end ">
                        <button
                          type="submit"
                          class=" group relative btn btn-primary w-1/2  justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Enregistrer
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    v-bind:class="{
                      hidden: openTab !== 3,
                      block: openTab === 3,
                    }"
                  >
                    <div class="flex items-center justify-start px-2">
                      <div class="flex-shrink-0 w-24">
                        <img
                          src="../../assets/malek.png"
                          alt="image"
                          class="shadow rounded-full h-20 w-20 border-2 border-gray-100 mb-2 object-cover object-bottom"
                        />
                      </div>
                      <div class="py-2 px-2">
                        <div class="flex items-baseline ">
                          <p
                            class="text-default text-base font-bold whitespace-no-wrap"
                          >
                            Slokom Malek
                          </p>
                          <i
                            class="ml-4 text-red-700 text-base font-semibold fas fa-tint"
                            >{{ blood }}</i
                          >
                        </div>
                        <p class="text-secondary text-sm whitespace-no-wrap">
                          Volontaire
                        </p>

                        <div
                          class="flex flex-row items-center justify-start w-full py-1 children-x-2"
                        >
                          <a href="https://www.facebook.com/malouka.slokom"
                            ><i
                              class="text-xl text-red-700 text-default fab fa-facebook-f mr-2"
                            ></i
                          ></a>
                          <a href="https://www.instagram.com/slokom_malek/">
                            <i
                              class="text-xl text-red-700 text-default fab fa-instagram mr-2"
                            ></i
                          ></a>
                          <a href="https://twitter.com/MSlokom">
                            <i
                              class="text-xl text-red-700 text-default fab fa-twitter mr-2"
                            ></i
                          ></a>
                          <a
                            href="https://www.linkedin.com/in/malek-slokom-38ab92169/"
                          >
                            <i
                              class="text-xl text-red-700 text-default fab fa-linkedin-in "
                            ></i
                          ></a>
                        </div>
                      </div>
                      <div></div>
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
                            value="Malek Slokom"
                          />
                        </div>
                        <div class="mt-4 ">
                          <label for="password">Mot de passe</label>
                          <div class="relative">
                            <input
                              id="password"
                              name="password"
                              :type="show ? 'password' : 'text'"
                              required
                              class="input w-full"
                              value="12345678"
                            />
                            <div
                              class="absolute inset-y-0 right-0 pr-3 mt-4  text-sm leading-5"
                            >
                              <i
                                class="fas fa-eye"
                                @click.prevent="show = !show"
                                v-if="show"
                                :class="{ hidden: !show, block: show }"
                              ></i>
                              <i
                                class="fas fa-eye-slash"
                                @click.prevent="show = !show"
                                v-if="!show"
                                :class="{ block: !show, hidden: show }"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex justify-end ">
                        <button
                          type="submit"
                          class=" group relative btn btn-primary w-1/2  justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Enregistrer
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class FormulaireVolontaire extends Vue {
  openTab = 1;
  fb = "https://www.facebook.com/malouka.slokom";
  insta = "https://www.instagram.com/slokom_malek/";
  tw = "https://twitter.com/MSlokom";
  linkedin = "https://www.linkedin.com/in/malek-slokom-38ab92169/";
  show = true;
  blood = "AB+";
  toggleTabs(tabNumber: any) {
    this.openTab = tabNumber;
  }
  fermerProfil() {
    this.$emit("close");
  }
}
</script>

<style></style>
