<template>
  <div>
    <login-form :erreur="erreur" @login="connection" />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

import LoginForm from "@/components/auth/LoginForm.vue";
@Component({
  components: { LoginForm },
})
export default class Login extends Vue {
   erreur=false;
  async connection(username: string, password: string) {
    try {
      const res = await axios.post("/api/v1/auth", {
        username: username,
        password: password,
      });
      //const {nom,prenom,user,pw,CIN,numeroVolontaire,desc,dateNaiss,blood,adresse,sexe,email,phone,facebookUrl,instagramUrl,linkedinUrl,twiterUrl,MembreDepuis,Attestation,paye} = res.data;
      console.log(res.data.desc);
      this.$store.commit("setUser", res.data);
      this.$store.commit("authenticate", true);
      localStorage.setItem("user", JSON.stringify(res.data));
      if (res.data.desc=="Présidente")
        this.$router.push("/responsables");
      else if (res.data.desc=="Volontaire")
        this.$router.push("/accueil");
      else if (res.data.desc=="Responsable jeunes")
        this.$router.push("/volontaires");
    } catch (err) {
      console.log("erreur d'authentification");
      this.erreur=true;
      //this.$router.push("/");
    }
  }
}
</script>
