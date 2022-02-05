import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tv from "../views/Tv.vue";
import Movies from "../views/Movies.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tv",
    name: "Tv",
    component: Tv,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
