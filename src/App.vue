<template>
 
   
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
    <div class="h-screen bg-blue-500">
      <navbar/>
      <Calendar/>
    </div>
  
</template>

<script lang="ts">
import axios from "axios";

import Navbar from "@/components/shared/Navbar.vue";
import Calendar from "@/components/calendar/Calendar.vue";

import { Component, Prop, Vue } from "vue-property-decorator";
@Component({components:{Navbar,Calendar}})

export default class App extends Vue {



}

</script>
