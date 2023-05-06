<template>
  <div class="w-full h-screen overflow-hidden">
    <div class="bg-white rounded-lg shadow">
      <div class="flex items-center justify-between px-6 py-3 border-b">
        <button class="text-gray-500 hover:text-gray-700" @click="prevMonth">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 3.33L13.33 6.67L10 10L13.33 13.33L10 16.67L6.67 13.33L3.33 10L6.67 6.67L10 3.33Z"
            />
          </svg>
        </button>
        <div class="text-lg font-medium">{{ currentMonth }}</div>
        <button class="text-gray-500 hover:text-gray-700" @click="nextMonth">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 3.33L6.67 6.67L10 10L6.67 13.33L10 16.67L13.33 13.33L16.67 10L13.33 6.67L10 3.33Z"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-wrap mb-3 px-6">
        <div class="w-1/7 text-gray-500 text-center">Sun</div>
        <div class="w-1/7 text-gray-500 text-center">Mon</div>
        <div class="w-1/7 text-gray-500 text-center">Tue</div>
        <div class="w-1/7 text-gray-500 text-center">Wed</div>
        <div class="w-1/7 text-gray-500 text-center">Thu</div>
        <div class="w-1/7 text-gray-500 text-center">Fri</div>
        <div class="w-1/7 text-gray-500 text-center">Sat</div>
      </div>
      <div class="flex flex-wrap px-6">
        <div
          v-for="day in daysInMonth"
          :key="day.date"
          class="w-1/7 border text-center py-4 md:py-8 cursor-pointer"
          :class="{
            //@ts-ignore
            'bg-gray-200': events.find((e) => e.date == formatDate(day.date)),
            'text-gray-400': !day.isCurrentMonth,
          }"
          @click="toggleAddEventModal(day.date)"
        >
          {{ day.date }}
        </div>
      </div>
    </div>
    <note
      v-if="showAddEventModal"
      @close="toggleAddEventModal"
      @add="createEvent"
    />
    <div
      class="absolute h-full w-full flex items-center justify-center top-0 left-0"
      v-if="showEventDetailsModal"
    >
      <div
        class="absolute h-full w-full top-0 left-0 z-40 bg-gray-600 opacity-25"
        @click="toggleEventDetailsModal"
      ></div>

      <div
        class="flex items-center justify-center flex-wrap bg-white z-50 rounded p-4 gap-4"
      >
        <h3 class="modal-title text-lg font-semibold w-full text-center">
          {{ selectedEventTitle }}
        </h3>

        <div class="w-full text-left">
          <span>{{ selectedEventDescription }}</span>
        </div>
        <div class="modal-footer flex justify-end">
          <button @click="toggleEventDetailsModal" class="btn btn-secondary">
            Cancel
          </button>
          <button class="btn btn-primary">
            Attend
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
import detailsNote from "./DetailNoteCalendar.vue";
import Note from "./NoteCalendar.vue";

import { Component, Vue } from "vue-property-decorator";
@Component({ components: { Note, detailsNote } })
export default class Calendar extends Vue {
  currentDate: Dayjs = dayjs();
  title = "";
  description = "";
  selectedDay = "";
  selectedEventTitle = "";
  selectedEventDescription = "";
  showAddEventModal = false;
  showEventDetailsModal = false;
  events = [];

  get isVolontaire() {
    return this.$store.getters.isVolontaire;
  }

  get isReponsableJeunes() {
    return this.$store.getters.isResponsableJeunes;
  }

  toggleAddEventModal(day: number | null) {
    if (
      this.isReponsableJeunes &&
      //@ts-ignore
      !this.events.find((e) => e.date == this.formatDate(day))
    ) {
      this.showAddEventModal = !this.showAddEventModal;
    } else if (
      //@ts-ignore
      this.events.find((e) => e.date == this.formatDate(day))
    ) {
      this.toggleEventDetailsModal(day);
    }
    if (this.showAddEventModal) {
      this.selectedDay = `${day && day > 10 ? day : "0" + day} ${
        this.currentMonth
      }`;
    }
  }

  toggleEventDetailsModal(day: number | null) {
    this.showEventDetailsModal = !this.showEventDetailsModal;
    if (this.showEventDetailsModal) {
      const selectedEvent = this.events.find(
        //@ts-ignore
        (e) => e.date == this.formatDate(day)
      );
      //@ts-ignore
      this.selectedEventTitle = selectedEvent.titre;
      //@ts-ignore
      this.selectedEventDescription = selectedEvent.description;
      console.log(selectedEvent);
      console.log("title: ", this.selectedEventTitle);
      console.log("description: ", this.selectedEventDescription);
    }
  }

  formatDate(day: number | null) {
    return `${day && day > 9 ? day : "0" + day} ${this.currentMonth}`;
  }

  get currentMonth(): string {
    return this.currentDate.format("MMMM YYYY");
  }

  get daysInMonth() {
    const firstDayOfMonth = this.currentDate.startOf("month");
    const lastDayOfMonth = this.currentDate.endOf("month");

    const days = [];
    let day = firstDayOfMonth;

    for (let i = 0; i < firstDayOfMonth.day(); i++) {
      days.push({
        date: null,
        isCurrentMonth: false,
      });
    }

    while (day <= lastDayOfMonth) {
      days.push({
        date: day.date(),
        isCurrentMonth: true,
      });
      day = day.add(1, "day");
    }

    return days;
  }

  nextMonth(): void {
    this.currentDate = this.currentDate.add(1, "month");
  }

  prevMonth(): void {
    this.currentDate = this.currentDate.subtract(1, "month");
  }

  async createEvent(titre: string, description: string) {
    console.log("created a new event");
    console.log("titre: :", titre);
    console.log("description: :", description);
    await axios.post("/api/v1/events/add-event", {
      titre,
      description,
      date: this.selectedDay,
    });
  }

  async mounted() {
    const res = await axios.get("/api/v1/events");
    this.events = res.data;
    console.log(this.events);
  }
}
</script>

<style></style>
