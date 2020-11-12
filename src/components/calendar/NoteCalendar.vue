<template>
    <div>
        <div class="absolute h-full w-full flex items-center justify-center">
            <div class="absolute h-full w-full opacity-25 " @click="fermerNote()">
            </div>
               
                   <div class="w-full max-w-xs z-10">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="titre">
                                Titre
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tittre" type="text" placeholder="Titre">
                            </div>
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="Déscription">
                                Déscription
                            </label>
                            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Déscription" type="text" placeholder="Déscription">
                            </textarea>
                            </div>
                            <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="Volentaire">
                                Volentaire
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Volentaire" type="text" v-model="volentaire" hidden>
                            <select @change="ajoutVolentaire($event)" name="liste" id="liste" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" >
                                
                                <option v-for="x in n7ebnor9ed" :key="x" :value="x">{{x}}</option>
                                
                            </select>
                            </div>
                            <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            
                            </div>
                        </form>
                        
                    </div>
                
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { delete } from 'vue/types/umd';


export default class NoteCalendar extends Vue {
@Prop()
jour !: number;
n7ebnor9ed = ["1","2","3","4","5"];
fermerNote(){
    this.$emit("close");
}
volentaire="";
liste=[];
vol=[""];
ajoutVolentaire(event){
    this.vol.push(event.target.value);
    delete this.n7ebnor9ed[this.n7ebnor9ed.indexOf(event.target.value)];
    console.log(this.vol);
    console.log(this.n7ebnor9ed)
}
}
</script>

<style>

</style>