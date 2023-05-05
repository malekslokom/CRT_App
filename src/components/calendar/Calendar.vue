<template>
  <div class="w-full h-screen overflow-hidden">
    <div class="relative m-10 h-10/12 bg-white ">
      <div class="absolute h-full w-full">
        <div class="relative flex justify-center">
          <p class=" text-lg capitalize">{{ month }} {{ year }}</p>
          <!--<button  class=" " v-text="'<<'" @click="prev()"/>-->
          <i
            class="fas fa-angle-double-left absolute h-4 w-4 left-0 cursor-pointer"
            @click="prev()"
          ></i>
          <i
            class="fas fa-angle-double-right absolute h-4 w-4 right-0  mr-2 cursor-pointer"
            @click="next()"
          ></i>
        </div>
        <div class=" flex flex-wrap ">
          <div v-for="x in Days" :key="x + 'a'" class="w-1/7  text-center ">
            {{ x }}
          </div>
        </div>
        <hr />
        <div class="h-10/12 flex flex-wrap overflow-auto">
          <div
            v-for="z in vide"
            :key="z + 'b'"
            class="w-1/7 md:h-1/3 sm:h-1/4 p-1"
          >
            <div class="border h-full bg-gray-100"></div>
          </div>
          <div
            v-for="i in nbDays"
            :key="i + 'c'"
            class="w-1/7 md:h-1/3 sm:h-1/4 p-1"
          >
            <div class="border h-full bg-gray-300">
              <div
                class="inline-flex w-6 h-6 items-center justify-center  text-center rounded-full transition ease-in-out duration-100 "
                :class="
                  i == dateDay && month == initMonth
                    ? ' bg-red-600 text-white  hover:bg-red-500 cursor-pointer'
                    : ' cursor-pointer  hover:bg-gray-200'
                "
                @click="Note(i)"
              >
                {{ i }}
              </div>
              <div v-if="t[m][i]">
                <div
                  class="cursor-pointer px-2 py-1 rounded-lg mt-2 overflow-hidden border border-red-200 text-red-800 bg-red-100"
                  v-for="noteDay in t[m][i]"
                  :key="noteDay"
                >
                  <p
                    class="text-sm truncate leading-tight'"
                    @click="detailEvent()"
                  >
                    {{ noteDay }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <note v-if="note" :jour="i" @close="Note" @add="addNoteTable" />
    <!--<detailsNote v-if="detailsNote" :jour="i" @close="detailEvent"/>-->
  </div>
</template>

<script lang="ts">
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/fr"; // import locale

import Note from "./NoteCalendar.vue";
import detailsNote from "./DetailNoteCalendar.vue";

import { Component, Prop, Vue } from "vue-property-decorator";
@Component({ components: { Note, detailsNote } })
export default class Calendar extends Vue {
  @Prop() readonly title!: string;
  note = false;
  index = 0;
  month = "";
  m = 0; //Month 1-12
  nbmonth = 0;
  initMonth = "";
  year = "";
  nbDays = 0;
  Days = ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."];
  firstday = 0;
  dateDay = 0;
  vide = 0;
  Events = [];
  i = 0;
  j = 0;
  t = new Array(12);
  mounted() {
    dayjs.locale("fr");
    const now = dayjs();
    console.log(now.format());
    this.month = now.format("MMMM");
    this.m = parseInt(now.format("M"));
    this.initMonth = this.month;
    this.nbDays = parseInt(now.format("MM"));
    this.year = now.format("YYYY");
    this.nbDays = now.daysInMonth();
    this.firstday = parseInt(now.format("d"));
    console.log(this.firstday);
    this.dateDay = parseInt(now.format("DD"));
    console.log(this.dateDay);
    this.vide = parseInt(now.startOf("month").format("d"));
    console.log(this.vide);
    //events
    const t = localStorage.getItem("tableau");
    if (t) this.t = JSON.parse(t);
    else {
      for (this.i = 1; this.i < 13; this.i++) {
        this.t[this.i] = new Array(31);
        for (this.j = 1; this.j <= 31; this.j++) {
          this.t[this.i][this.j] = [];
        }
      }
    }
    console.log(this.t[1][1][1]);
  }

  next() {
    this.index += 1;
    this.nextMonth();
  }
  nextMonth() {
    const now = dayjs();
    const nowindex = now.add(this.index, "month");
    console.log(nowindex.format("DDDD"));
    this.month = nowindex.format("MMMM");
    console.log(this.month);
    this.m = parseInt(nowindex.format("M"));
    console.log(this.m);
    this.nbDays = parseInt(nowindex.format("MM"));
    this.year = nowindex.format("YYYY");
    this.nbDays = nowindex.daysInMonth();
    this.firstday = parseInt(nowindex.format("d"));
    this.dateDay = parseInt(nowindex.format("DD"));
    this.vide = parseInt(nowindex.startOf("month").format("d"));
  }
  prev() {
    this.index -= 1;
    this.nextMonth();
  }

  Note(i: number) {
    this.i = i;
    this.note = !this.note;
  }

  key = "";
  addNoteTable(value: string, value2: string) {
    this.key = value2;
    if (this.t[this.m][value2].length == 3)
      return alert("maximum 3 évenements dans le méme jour");
    this.t[this.m][value2].push(value);
    localStorage.setItem("tableau", JSON.stringify(this.t));
  }
  detailsNote = false;
  detailEvent() {
    this.detailsNote = !this.detailsNote;
    console.log("aaaaaa");
  }
}
</script>

<style></style>
