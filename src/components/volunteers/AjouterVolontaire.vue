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
                            <label for="nom">Nom</label>
                            <input
                              :class="
                                erreur.nom
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              type="text"
                              placeholder="Nom "
                              id="nom"
                              v-model="user.nom"
                              class="input w-full h-10"
                            />
                            <span v-if="erreur.nom1" class="text-red-700"
                              >Ce champ est obligatoire</span
                            ><br />
                            <span v-if="erreur.nom2" class="text-red-700"
                              >Ce champ ne doit contenir que des caractéres
                              alphabétiques</span
                            >
                            <br />
                            <label for="prenom">Prénom</label>
                            <input
                              :class="
                                erreur.prenom
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              type="text"
                              placeholder="Prénom"
                              id="prenom"
                              v-model="user.prenom"
                              class="input w-full h-10"
                            />
                            <span v-if="erreur.prenom1" class="text-red-700"
                              >Ce champ est obligatoire</span
                            ><br />
                            <span v-if="erreur.prenom2" class="text-red-700"
                              >Ce champ ne doit contenir que des caractéres
                              alphabétiques</span
                            >
                            <br />
                            <label for="prenom">Sanguin</label>
                            <i
                              class="ml-4 text-red-700 text-base font-semibold fas fa-tint"
                            >
                              <select
                                id=""
                                class="text-base font-semibold focus:outline-none"
                                v-model="user.blood"
                              >
                                <option
                                  class="text-base font-semibold"
                                  value="O-"
                                  selected
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
                        </div>
                        <div
                          class=" flex flex-col items-center justify-center py-2 px-2"
                        >
                          <div class=" w-full py-1 children-x-2">
                            <div class="flex items-center ">
                              <a :href="user.facebookUrl"
                                ><i
                                  class="text-xl text-red-700 text-default fab fa-facebook-f w-6"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-grow input h-5"
                                v-model="user.facebookUrl"
                              />
                            </div>
                            <div class="flex items-center">
                              <a :href="user.instagramUrl">
                                <i
                                  class="text-xl text-red-700 text-default fab fa-instagram w-6"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-grow justify-center input h-5"
                                v-model="user.instagramUrl"
                              />
                              <br />
                            </div>
                            <div class="flex items-center">
                              <a :href="user.twiterUrl">
                                <i
                                  class="text-xl text-red-700 text-default fab fa-twitter w-6"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-grow justify-center input h-5"
                                v-model="user.twiterUrl"
                              />
                              <br />
                            </div>
                            <div class="flex items-center">
                              <a :href="user.linkedinUrl">
                                <i
                                  class="flex-3 text-xl text-red-700 text-default fab fa-linkedin-in w-6"
                                ></i
                              ></a>
                              <input
                                type="text"
                                class="flex-1 justify-center input h-5"
                                v-model="user.linkedinUrl"
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
                              :class="
                                erreur.CIN
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              id="CIN"
                              name="cin"
                              type="text"
                              class="input w-full "
                              placeholder="CIN"
                              maxlength="8"
                              minlength="8"
                              v-model="user.CIN"
                            />
                            <span v-if="erreur.CIN1" class="text-red-700"
                              >Ce champ est obligatoire</span
                            ><br />
                            <span v-if="erreur.CIN2" class="text-red-700"
                              >Ce champ ne doit contenir que des chiffres et de
                              taille égale à 8</span
                            >
                          </div>
                          <br />
                          <div class="w-1/2">
                            <label for="phone">Numéro de Téléphone</label>
                            <input
                              :class="
                                erreur.phone
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              id="phone"
                              name="phone"
                              type="tel"
                              class="input w-full "
                              maxlength="8"
                              minlength="8"
                              placeholder="Numéro de Téléphone"
                              v-model="user.phone"
                            />
                            <span v-if="erreur.phone1" class="text-red-700"
                              >Ce champ est obligatoire</span
                            ><br />
                            <span v-if="erreur.phone2" class="text-red-700"
                              >Ce champ ne doit contenir que des chiffres et de
                              taille égale à 8</span
                            >
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class=" shadow-sm ">
                        <div class="flex w-full">
                          <div class="w-1/2">
                            <label for="dateNaiss">Date de naissance</label>
                            <input
                              type="date"
                              id="DateNaiss"
                              v-model="user.dateNaiss"
                              min="1940-01-01"
                              :max="dateMAx"
                              class="input w-full"
                              :class="
                                erreur.dateNaiss
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                            />
                            <span v-if="erreur.dateNaiss1" class="text-red-700"
                              >Ce champ est obligatoire</span
                            >
                          </div>
                          <br />
                          <div class="w-1/2">
                            <label for="sexe">Sexe</label>
                            <div class="flex items-center py-2 px-4 mt-2">
                              <div class="flex-1">
                                <input
                                  :class="
                                    erreur.sexe
                                      ? 'border border-red-500 shadow-none'
                                      : ''
                                  "
                                  type="radio"
                                  id="sexe"
                                  value="Femme"
                                  v-model="user.sexe"
                                /><label for="gender"> Femme</label>
                              </div>
                              <div class="flex-1">
                                <input
                                  type="radio"
                                  id="sexe"
                                  value="Homme"
                                  v-model="user.sexe"
                                  :class="
                                    erreur.sexe
                                      ? 'border border-red-500 shadow-none'
                                      : ''
                                  "
                                /><label for="gender"> Homme</label>
                              </div>
                            </div>

                            <span v-if="erreur.sexe1" class="text-red-700"
                              >Ce champ est obligatoire</span
                            >
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="mt-4">
                        <label for="adresse">Adresse</label>
                        <div class="flex">
                          <div>
                            <input
                              :class="
                                erreur.adresseNumero
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              id="adresseNumero"
                              name="adresseNumero"
                              type="text"
                              class="input  flex-shrink-0  flex-1"
                              placeholder="Numéro"
                              v-model="add.adresseNumero"
                            /><br />
                            <span
                              v-if="erreur.adresseNumero1"
                              class="text-red-700"
                              >Ce champ est obligatoire.</span
                            ><br />
                            <span
                              v-if="erreur.adresseNumero2"
                              class="text-red-700"
                              >Ce champ ne doit contenir que des chiffres.</span
                            >
                          </div>
                          <br />
                          <div>
                            <input
                              :class="
                                erreur.adresseRue
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              id="adresseRue"
                              name="adresseRue"
                              type="text"
                              class="input flex-shrink-0 flex-1"
                              placeholder="Rue"
                              v-model="add.adresseRue"
                            /><br />
                            <span v-if="erreur.adresseRue1" class="text-red-700"
                              >Ce champ est obligatoire</span
                            >
                          </div>
                          <br />
                          <select
                            class="input  flex-shrink-0  flex-1 h-10"
                            placeholder="Municipalités"
                            v-model="add.adresseMunicipalités"
                          >
                            <option value="Borj El Amri">Borj El Amri</option>
                            <option value="Den Den">Den Den</option>
                            <option value="Djedeida">Djedeida</option>
                            <option value="Douar Hicher">Douar Hicher</option>
                            <option value="El Batan">El Batan</option>
                            <option value="La Manouba">La Manouba</option>
                            <option value="Mornaguia">Mornaguia</option>
                            <option value="Oued Ellil">Oued Ellil</option>
                            <option value="Tebourba">Tebourba</option>
                          </select>
                        </div>
                      </div>

                      <div class="mt-4">
                        <label for="password">Adresse e-mail</label>
                        <input
                          :class="
                            erreur.email
                              ? 'border border-red-500 shadow-none'
                              : ''
                          "
                          id="email"
                          name="mail"
                          type="email"
                          class="input w-full "
                          placeholder="Adresse e-mail"
                          v-model="user.email"
                        />
                        <span class="text-red-700" v-if="erreur.email1"
                          >Ce champ ne ressemble pas à une adresse e-mail
                          valide</span
                        >
                      </div>
                      <br />
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
                            {{ user.nom }} {{ user.prenom }}
                          </p>
                          <i
                            class="ml-4 text-red-700 text-base font-semibold fas fa-tint mr-2"
                            >{{ user.blood }}</i
                          >
                        </div>
                        <p class="text-secondary text-sm whitespace-no-wrap">
                          Volontaire
                        </p>
                        <div
                          class="flex flex-row items-center justify-start w-full py-1 children-x-2"
                        >
                          <a :href="user.facebookUrl"
                            ><i
                              class="text-xl text-red-700 text-default fab fa-facebook-f mr-2"
                            ></i
                          ></a>
                          <a :href="user.instagramUrl">
                            <i
                              class="text-xl text-red-700 text-default fab fa-instagram mr-2"
                            ></i
                          ></a>
                          <a :href="user.twiterUrl">
                            <i
                              class="text-xl text-red-700 text-default fab fa-twitter mr-2"
                            ></i
                          ></a>
                          <a :href="user.linkedinUrl">
                            <i
                              class="text-xl text-red-700 text-default fab fa-linkedin-in "
                            ></i
                          ></a>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <form class=" space-y-4  " action="#" method="POST">
                      <div class="mt-4">
                        <div class="flex w-full">
                          <div class="w-1/2">
                            <label for="numvol">Numéro volontaire</label>
                            <input
                              :class="
                                erreur.numeroVolontaire
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              id="numeroVolontaire"
                              name="numvol"
                              type="text"
                              class="input w-full "
                              placeholder="Numéro volontaire"
                              v-model="user.numeroVolontaire"
                            />
                            <span
                              class="text-red-700 text-center"
                              v-if="erreur.numeroVolontaire1"
                              >Ce champ est obligatoire.</span
                            ><br />
                            <span
                              class="text-red-700 "
                              v-if="erreur.numeroVolontaire2"
                              >Ce champ ne doit contenir que des chiffres.</span
                            >
                            <br />
                          </div>
                          <div class=" w-1/2">
                            <label for="adresse">Membre depuis</label>
                            <input
                              :class="
                                erreur.MembreDepuis
                                  ? 'border border-red-500 shadow-none'
                                  : ''
                              "
                              type="date"
                              id="MembreDepuis"
                              name="trip-start"
                              v-model="user.MembreDepuis"
                              min="2000-01-01"
                              :max="today"
                              class="input w-full"
                            />
                            <span
                              class="text-red-700"
                              v-if="erreur.MembreDepuis1"
                              >Ce champ est obligatoire.</span
                            >
                            <br />
                          </div>
                        </div>
                      </div>
                      <div class="mt-4">
                        <label for="password">Attestation</label>
                        <select
                          id="Attestation"
                          name="niveau"
                          v-model="user.Attestation"
                          class="input w-full cursor-pointer "
                        >
                          <option>Premiers Secours</option>
                          <option>Premiers Secours en Equipe</option>
                          <option>Monitorat</option>
                          <option>Insructorat</option>
                        </select>
                      </div>

                      <div class="mt-4">
                        <label for="paye">Payé</label>
                        <div
                          class="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in"
                        >
                          <input
                            type="checkbox"
                            v-model="user.paye"
                            name="paye"
                            id="paye"
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
                          @click.prevent="enregistrer()"
                          class=" group relative btn btn-primary w-1/2 mr-2  justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Enregistrer
                        </button>
                        <button
                          @click="AnnulerAjout()"
                          class=" group relative btn btn-second w-1/2  justify-center focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Annuler
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
            Volontaire bien enregistrer.<br />
            <span class="font-semibold">Nom d'utilisateur:</span><br /><span
              class="text-center ml-5"
              >{{ user.username }}</span
            ><br />
            <span class="font-semibold">Mot de passe:</span><br /><span
              class="text-center ml-5"
              >{{ user.password }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <div
      class="absolute h-screen w-screen top-0 flex items-center justify-center"
      v-if="NotifFaild"
    >
      <div
        class="fixed h-full w-full bg-gray-600 opacity-25"
        @click="closeFaild()"
      ></div>
      <div class="flex bg-red-200 max-w-sm mb-4">
        <div class="w-16 bg-red-600">
          <div class="p-4">
            <svg
              class="h-8 w-8 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="closeFaild()"
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
          <p class="leading-tight">
            Erreur d'enregistrement.<br />
            Verifier les champs.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import dayjs from "dayjs";
import { Component, Vue } from "vue-property-decorator";
@Component({ components: {} })
export default class AjouterVolontaire extends Vue {
  NotifSucc = false;
  NotifFaild = false;
  add = {
    adresseNumero: "",
    adresseRue: "",
    adresseMunicipalités: "La Manouba",
  };
  user = {
    nom: "",
    prenom: "",
    username: "",
    password: "",
    CIN: "",
    numeroVolontaire: "",
    desc: "Volontaire",
    dateNaiss: "",
    blood: "AB+",
    adresse: "",

    sexe: "",
    email: "",
    phone: "",
    facebookUrl: "",
    instagramUrl: "",
    linkedinUrl: "",
    twiterUrl: "",
    MembreDepuis: "",
    Attestation: "Premiers Secours",
    paye: false,
  };
  erreur = {
    nom: false,
    nom1: false,
    nom2: false,
    prenom: false,
    prenom1: false,
    prenom2: false,
    CIN: false,
    CIN1: false,
    CIN2: false,
    numeroVolontaire: false,
    numeroVolontaire1: false,
    numeroVolontaire2: false,
    dateNaiss: false,
    dateNaiss1: false,
    adresseNumero: false,
    adresseNumero1: false,
    adresseNumero2: false,
    adresseRue: false,
    adresseRue1: false,
    sexe: false,
    sexe1: false,
    email: false,
    email1: false,
    phone: false,
    phone1: false,
    phone2: false,
    facebookUrl: false,
    instagramUrl: false,
    linkedinUrl: false,
    twiterUrl: false,
    MembreDepuis: false,
    MembreDepuis1: false,
  };
  openTab = 1;
  toggleTabs(tabNumber: any) {
    this.openTab = tabNumber;
  }
  blood = "O+";
  today = dayjs(new Date()).format("YYYY-MM-DD");
  dateMAx = new Date().getFullYear() - 15 + "-12-31";

  async enregistrer() {
    let err = false;
    if (this.user.nom == "") {
      this.erreur.nom = true;
      this.erreur.nom1 = true;
      err = true;
    } else {
      this.erreur.nom = false;
      this.erreur.nom1 = false;
    }

    if (!/^[a-z]+$/i.test(this.user.nom)) {
      this.erreur.nom = true;
      this.erreur.nom2 = true;
      err = true;
    } else {
      this.erreur.nom = false;
      this.erreur.nom2 = false;
    }

    if (this.user.prenom == "") {
      this.erreur.prenom = true;
      this.erreur.prenom1 = true;
      err = true;
    } else {
      this.erreur.prenom = false;
      this.erreur.prenom1 = false;
    }
    if (!/^[a-z]+$/i.test(this.user.nom)) {
      this.erreur.prenom = true;
      this.erreur.prenom2 = true;
      err = true;
    } else {
      this.erreur.prenom = false;
      this.erreur.prenom2 = false;
    }

    if (this.user.CIN == "") {
      this.erreur.CIN = true;
      this.erreur.CIN1 = true;
      err = true;
    } else {
      this.erreur.CIN = false;
      this.erreur.CIN1 = false;
    }
    if (this.user.CIN.length != 8 || isNaN(parseInt(this.user.CIN))) {
      this.erreur.CIN = true;
      this.erreur.CIN2 = true;
      err = true;
    } else {
      this.erreur.CIN = false;
      this.erreur.CIN2 = false;
    }
    if (this.user.numeroVolontaire == "") {
      this.erreur.numeroVolontaire = true;
      this.erreur.numeroVolontaire1 = true;
      err = true;
    } else {
      this.erreur.numeroVolontaire = false;
      this.erreur.numeroVolontaire1 = false;
    }

    if (isNaN(parseInt(this.user.CIN))) {
      this.erreur.numeroVolontaire = true;
      this.erreur.numeroVolontaire2 = true;
      err = true;
    } else {
      this.erreur.numeroVolontaire = false;
      this.erreur.numeroVolontaire2 = false;
    }
    if (this.user.dateNaiss == "") {
      this.erreur.dateNaiss = true;
      this.erreur.dateNaiss1 = true;
      err = true;
    } else {
      this.erreur.dateNaiss = false;
      this.erreur.dateNaiss1 = false;
    }
    if (this.add.adresseNumero == "") {
      this.erreur.adresseNumero = true;
      this.erreur.adresseNumero1 = true;
      err = true;
    } else {
      this.erreur.adresseNumero = false;
      this.erreur.adresseNumero1 = false;
    }
    if (isNaN(parseInt(this.add.adresseNumero))) {
      this.erreur.adresseNumero = true;
      this.erreur.adresseNumero2 = true;
      err = true;
    } else {
      this.erreur.adresseNumero = false;
      this.erreur.adresseNumero2 = false;
    }
    if (this.add.adresseRue == "") {
      this.erreur.adresseRue = true;
      this.erreur.adresseRue1 = true;
      err = true;
    } else {
      this.erreur.adresseRue = false;
      this.erreur.adresseRue1 = false;
    }
    if (this.user.sexe == "") {
      this.erreur.sexe = true;
      this.erreur.sexe1 = true;
      err = true;
    } else {
      this.erreur.sexe = false;
      this.erreur.sexe1 = false;
    }
    if (this.user.phone == "") {
      this.erreur.phone = true;
      this.erreur.phone1 = true;
      err = true;
    } else {
      this.erreur.phone = false;
      this.erreur.phone1 = false;
    }
    if (this.user.phone.length != 8 || isNaN(parseInt(this.user.phone))) {
      this.erreur.phone = true;
      this.erreur.phone2 = true;
      err = true;
    } else {
      this.erreur.phone = false;
      this.erreur.phone2 = false;
    }
    if (this.user.MembreDepuis == "") {
      this.erreur.MembreDepuis = true;
      this.erreur.MembreDepuis1 = true;
      err = true;
    } else {
      this.erreur.MembreDepuis = false;
      this.erreur.MembreDepuis1 = false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.user.email)) {
      this.erreur.email = true;
      this.erreur.email1 = true;
      err = true;
    } else {
      this.erreur.email = false;
      this.erreur.email1 = false;
    }
    if (err) this.NotifFaild = true;

    if (!err) {
      this.user.adresse =
        this.add.adresseNumero +
        " " +
        this.add.adresseRue +
        " " +
        this.add.adresseMunicipalités;
      this.user.username = this.user.prenom + " " + this.user.nom;
      this.user.password = this.user.CIN;
      try {
        const res = await axios.post("/api/v1/volontaire/add", this.user);
      } catch (err) {
        console.log(err);
      }
      this.NotifSucc = true;
    }
  }
  closeFaild() {
    this.NotifFaild = !this.NotifFaild;
  }
  closeSuccess() {
    this.NotifSucc = !this.NotifSucc;
  }
  AnnulerAjout() {
    this.$router.push("/volontaires");
  }
}
</script>

<style scoped>
label {
  margin-left: 0.5rem;
}
</style>
