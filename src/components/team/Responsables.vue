<template>
<div  class="w-full h-full " >
    
  	<!--<ajouterresponsable/>-->
    <affichageresponsable/>
    
</div>  
</template>

<script lang="ts">


import ajouterresponsable from "@/components/team/AjouterResponsable.vue";
import affichageresponsable from "@/components/team/AffichageResponsables.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({components:{ajouterresponsable,affichageresponsable}})


export default class Responsables extends Vue {

}

</script>

<style>

</style>