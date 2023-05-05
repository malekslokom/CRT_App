<template>
  <div class="w-full h-full overflow">
    <div class=" bg-white">
      <div class=" bg-black" height="480">
        <div
          class="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4"
        >
          <div class=" flex flex-col items-center">
            <p
              class="mt-10 items-left text-primary text-center text-3xl font-semibold"
            >
              Croissant Rouge Tunisien Comité Local Manouba
            </p>
            <br />
            <p class="text-white text-left px-8">
              Le Croissant-Rouge tunisien est une association d’intérêt public,
              reconnu par le décret officiel majeur du gouvernement du 6 mai
              1957 comme organisation bénévole d’aide créée avec l’aide des
              pouvoirs publics dans le domaine humanitaire, conformément aux
              Conventions de Genève de 1949. La Société a été créée le 7 octobre
              1956 et est devenue membre du mouvement International de la
              Croix-Rouge et du Croissant-Rouge le 13 septembre 1957.
            </p>
          </div>
          <iframe
            class="flex flex-col items-center w-full "
            height="480"
            id="video1"
            :src="src"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
      <div class="m-10">
        <p class="items-left text-primary text-center text-3xl font-semibold">
          Les sept Principes fondamentaux
        </p>
        <p class="mt-5 text-center">
          Les sept Principes fondamentaux régissent l’activité de tous les
          employés et volontaires de la Croix-Rouge et du Croissant-Rouge à
          travers le monde. Adoptés en 1965, ils définissent le cadre de leur
          action humanitaire et servent de référence pour promouvoir les idéaux
          et les valeurs humanitaires du Mouvement international de la
          Croix-Rouge et du Croissant-Rouge.
        </p>

        <img class="mt-10" src="../assets/Principes-croissantRouge.png" />
      </div>
      <button></button>
    </div>

    <footerpage />
  </div>
</template>

<script lang="ts">
import axios from "axios";

import footerpage from "@/components/shared/Footerpage.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ components: { footerpage } })
export default class Accueil extends Vue {
  scrolly = "false";

  src =
    "https://www.youtube.com/embed/zpIMm_blXxQ?autoplay=1&mute=1&loop=1&playlist=zpIMm_blXxQ";
  mounted() {
    this.scrolly = this.$router.currentRoute.params.scrollb;
    if (this.scrolly) {
      window.scrollTo(
        0,
        document.body.scrollHeight || document.documentElement.scrollHeight
      );
      this.scrolly = "false";
    }
  }
}
</script>

<style></style>
