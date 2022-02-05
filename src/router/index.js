import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tv from "../views/Tv.vue";
import Movies from "../views/Movies.vue";
import MoviePage from "../views/MoviePage.vue";
import TvPage from "../views/TvPage.vue";
import Favourites from "../views/Favourites.vue";

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
  {
    path: "/movie/:id",
    name: "MoviePage",
    component: MoviePage,
  },
  {
    path: "/tv/:id",
    name: "TvPage",
    component: TvPage,
  },
  {
    path: "/favs",
    name: "Favourites",
    component: Favourites,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
