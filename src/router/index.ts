import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import Calendar from "../components/calendar/Calendar.vue";
import Accueil from "../components/Accueil.vue";
import AffichageResponsables from "../components/team/AffichageResponsables.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
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
    path: "/affichageresponsables",
    name: "AffichageResponsables",
    component: AffichageResponsables
  },

];

const router = new VueRouter({
  routes
});

export default router;
