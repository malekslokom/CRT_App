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
          <span class="text-red-700 text-center" v-if="erreur.titre"
            >Ce champ est obligatoire.</span
          >
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Déscription"
          >
            Description
          </label>
          <textarea
            class=" w-full input"
            id="Déscription"
            type="text"
            placeholder="Déscription"
            v-model="description"
          >
          </textarea>
          <span class="text-red-700 text-center" v-if="erreur.description"
            >Ce champ est obligatoire.</span
          >
        </div>
        <!-- <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="volontaire">
                                volontaire
                            </label>
                            <input class=" w-full input" id="volontaire" type="text" v-model="volontaire" hidden>
                           <select @change="ajoutvolontaire($event)" name="liste" id="liste" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" >
                                
                                <option v-for="x in n7ebnor9ed" :key="x" :value="x">{{x}}</option>
                                
                            </select>
                            </div>-->
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="btn btn-primary w-1/2 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click.prevent="addEvent()"
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
export default class NoteCalendar extends Vue {
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
  description = "";
  //ajoutvolontaire(event){
  //  this.vol.push(event.target.value);
  //  delete this.n7ebnor9ed[this.n7ebnor9ed.indexOf(event.target.value)];
  //  console.log(this.vol);
  //  console.log(this.n7ebnor9ed)
  //}
  erreur = {
    titre: false,
    description: false
  };
  addEvent() {
    let err = false;
    if (this.titre == "") {
      console.log("aaaa");
      this.erreur.titre = true;
      err = true;
    } else {
      this.erreur.titre = false;
    }
    if (this.description == "") {
      this.erreur.description = true;
      err = true;
    } else {
      this.erreur.description = false;
    }
    if (!err) {
      this.$emit("add", this.titre, this.jour);
      this.$emit("close");
    }
  }
}
</script>

<style></style>
