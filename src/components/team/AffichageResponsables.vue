<template>
    <body class="antialiased font-sans">
    <div class="container mx-auto px-4 sm:px-8">
        <div class="mt-2 py-8">
		<div class="   right-0 px-4">
        	<router-link to="/responsable/ajouter"><button :class="autorise?'text-red-700 text-sm rounded py-2 px-4 w-full border mb-5 border-red-700 font-medium bg-white hover:text-white focus:outline-none  hover:bg-red-700' :'hidden'" ><i class="fas fa-user-plus mr-2"></i>Ajouter</button></router-link> 
        </div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 mb-4"  >       
			<div class="flex flex-col  md:col-end-3 col-span-1 md:col-span-1 items-center  justify-center bg-white p-4 shadow rounded-lg">
				<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
					<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
						 alt=""
						 class="h-full w-full">
				</div>
				<h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
				<h6 class="mt-2 text-sm font-medium">Founder</h6>
				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<router-link to="/responsable/profile" class="flex items-center justify-center h-8 w-32 border rounded-full text-gray-800 border-red-700 hover:bg-red-700 hover:text-white">
							Voir profil
						</router-link>
					</li>
				</ul>
			</div>
			<div class="flex flex-col  md:col-end-4 col-span-1 md:col-span-1 items-center  justify-center bg-white p-4 shadow rounded-lg">
				<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
					<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
						 alt=""
						 class="h-full w-full">
				</div>
				<h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
				<h6 class="mt-2 text-sm font-medium">Founder</h6>
				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<router-link to="/responsable/profile" class="flex items-center justify-center h-8 w-32 border rounded-full text-gray-800 border-red-700 hover:bg-red-700 hover:text-white">
							Voir profil
						</router-link>
					</li>
				</ul>
			</div>    
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4"  >       
       <div v-for="x in 8" :key="x">
			<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
				<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
					<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
						 alt=""
						 class="h-full w-full">
				</div>
				<h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
				<h6 class="mt-2 text-sm font-medium">Founder</h6>
				<ul class="flex flex-row mt-4 space-x-2">
					<li>
						<router-link to="/responsable/profile" class="flex items-center justify-center h-8 w-32 border rounded-full text-gray-800 border-red-700 hover:bg-red-700 hover:text-white">
							Voir profil
						</router-link>
					</li>
				</ul>
			</div>
		
		
		</div>
		
        </div>
		
        <div><button></button></div>
		 
    </div>
	 </div>
</body>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({components:{}})


export default class AffichageResponsables extends Vue {

 get autorise() {
    return this.$store.getters.isPresident;
  }
  
}

</script>

<style>

</style>