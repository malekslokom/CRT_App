<template>
  <div
    class="absolute h-screen w-screen top-0 flex items-center justify-center"
  >
    <div
      class="fixed h-full w-full bg-gray-600 opacity-25"
      @click="fermerNote()"
    ></div>

    <div
      class="relative max-w-sm w-full space-y-8 bg-white shadow p-4 rounded "
    >
      <div>
        <img
          class="absolute top-0 h-24 w-24 -mt-12"
          src="../../assets/logo.png"
          alt="logo"
        />
      </div>
      <form class=" space-y-4  " action="#" method="POST">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="titre">
            Titre
          </label>
          <input
            class=" w-full input"
            id="tittre"
            type="text"
            placeholder="Titre"
            v-model="titre"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Déscription"
          >
            Déscription
          </label>
          <textarea
            class=" w-full input"
            id="Déscription"
            type="text"
            placeholder="Déscription"
          >
          </textarea>
        </div>

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="btn btn-primary w-1/2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="addEvent()"
          >
            Ajouter
          </button>
          <button
            class="btn btn-second btn-second  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="reset"
            @click="fermerNote()"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
//import { delete } from 'vue/types/umd';

@Component
export default class DetailNoteCalendar extends Vue {
  @Prop()
  jour!: number;
  n7ebnor9ed = ["1", "2", "3", "4", "5"];
  fermerNote() {
    this.$emit("close");
  }
  volontaire = "";
  liste = [];
  vol = [""];
  titre = "";

  addEvent() {
    this.$emit("add", this.titre, this.jour);
    this.$emit("close");
  }
}
</script>

<style></style>
