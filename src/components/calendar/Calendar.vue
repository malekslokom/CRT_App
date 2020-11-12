<template>
  <div class="relative m-10 h-10/12 bg-white ">
  <div class="absolute h-full w-full">
      <div class="relative flex justify-center" >
        <p class=" text-lg capitalize">{{month}} {{year}}</p>
        <button  class="absolute h-4 w-4 left-0 " v-text="'<<'" @click="prev()"/>
        <button class="absolute h-4 w-4 right-0  mr-2" v-text="'>>'" @click="next()"/>
      </div>
      <div class=" flex flex-wrap " >
            <div v-for="x in Days" :key="x+'a'" class="w-1/7 text-center ">{{x}}</div>
      </div>
      <hr/>
      <div class="h-10/12 flex flex-wrap overflow-auto" >
            <div v-for="z in vide" :key="z+'b'" class="w-1/7 h-1/3 p-1">
                    <div class="border h-full bg-gray-100"></div>
            </div>
            <div v-for="i in nbDays" :key="i+'c'" class="w-1/7 h-1/3 p-1">
                    <div :class=" i == dateDay && month == initMonth ? 'border h-full bg-blue-300  hover:bg-blue-200 cursor-pointer' : 'border h-full bg-gray-300 cursor-pointer  hover:bg-gray-200'" @click="Note(i)">
                        {{i}}
                     </div>
          </div>
      </div>
  </div>
      <note v-if="note" :jour="i" @close="Note"/>
   </div>   
</template>

<script lang="ts">
import axios from "axios";
import dayjs from 'dayjs'
import 'dayjs/locale/fr' // import locale

import Note from "./NoteCalendar.vue";

import { Component, Prop, Vue } from "vue-property-decorator";
@Component({components:{Note}})

export default class App extends Vue {
note=false
index=0;
month="";
nbmonth=0;
initMonth="";
year="";
nbDays=0;
Days=["Dim.","Lun.","Mar.","Mer.","Jeu.","Ven.","Sam."];
firstday=0;
dateDay=0;
vide=0;

mounted(){
dayjs.locale('fr') 
const now=dayjs();
console.log(now.format());
this.month=now.format("MMMM");
this.initMonth=this.month;
this.nbDays=parseInt(now.format("MM"));
this.year=now.format("YYYY");
this.nbDays=now.daysInMonth() ;
this.firstday=parseInt(now.format('d'));
console.log(this.firstday);
this.dateDay=parseInt(now.format('DD'));
console.log(this.dateDay);
this.vide=parseInt(now.startOf('month').format("d"));
console.log(this.vide);

}

next(){
    this.index +=1;
    this.nextMonth();
}
nextMonth(){
    const now=dayjs();
    const nowindex=now.add(this.index, 'month');
    console.log(nowindex.format("DDDD"));
    this.month=nowindex.format("MMMM"); 
    console.log(this.month);
    this.nbDays=parseInt(nowindex.format("MM"));
    this.year=nowindex.format("YYYY");
    this.nbDays=nowindex.daysInMonth() ;
    this.firstday=parseInt(nowindex.format('d'));
    this.dateDay=parseInt(nowindex.format('DD'));
   this.vide=parseInt(nowindex.startOf('month').format("d"));
}
prev(){
    this.index -=1;
    this.nextMonth();
}
Note(i:number){
    console.log(i);
    this.note= !this.note;
}
}

</script>

<style>

</style>