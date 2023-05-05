import Vue from "vue";
import Vuex from "vuex";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import Calendar from "../components/calendar/Calendar.vue";
import Accueil from "../components/Accueil.vue";
import Responsables from "../components/team/Responsables.vue";
import AffichageVolontaires from "../components/volunteers/AffichageVolontaires.vue";
import FormulaireAffichage from "../components/team/FormulaireAffichage.vue";
import AjouterResponsable from "../components/team/AjouterResponsable.vue";
import FormulaireVolontaire from "../components/volunteers/FormulaireVolontaire.vue";
import AjouterVolontaire from "../components/volunteers/AjouterVolontaire.vue";

Vue.use(VueRouter);
Vue.use(Vuex);
const routes: Array<RouteConfig> = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  },
  {
    path: "/accueil",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/responsables",
    name: "Responsables",
    component: Responsables
  },
  {
    path: "/volontaires",
    name: "AffichageVolontaires",
    component: AffichageVolontaires
  },
  {
    path: "/responsable/profile",
    name: "FormulaireAffichage",
    component: FormulaireAffichage
  },
  {
    path: "/responsable/Ajouter",
    name: "AjouterResponsable",
    component: AjouterResponsable
  },
  {
    path: "/volontaire/profile",
    name: "FormulaireVolontaire",
    component: FormulaireVolontaire
  },
  {
    path: "/volontaire/ajouter",
    name: "AjouterVolontaire",
    component: AjouterVolontaire
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if (to.name == "accueil" && !localStorage.getItem("user"))
    return next("/login");
  if (localStorage.getItem("user")) {
    // @ts-ignore
    if (localStorage.getItem("user").type == "Présidente")
      return next("/responsables");
  }
  if (to.name == "volontaires") {
    // @ts-ignore
    if (!localStorage.getItem("user").type == "Responsable jeunes")
      return next(from.path);
  }
  next();
});
export default router;
