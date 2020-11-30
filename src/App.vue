<template>
 
   
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
    <div class="h-screen ">
      
  
      <router-view />
    </div>
  
</template>

<script lang="ts">
import axios from "axios";


import Calendar from "@/components/calendar/Calendar.vue";


import { Component, Prop, Vue } from "vue-property-decorator";
@Component({components:{Calendar}})

export default class App extends Vue {



}

</script>
