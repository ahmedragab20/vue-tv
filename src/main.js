import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles/main.scss";
import vue3StarRatings from "vue3-star-ratings";
import "vue3-carousel/dist/carousel.css";

// import VueCarousel from "vue-carousel";
// .use(VueCarousel)

const app = createApp(App);
app.component("vue3-star-ratings", vue3StarRatings);

createApp(App).use(store).use(router).mount("#app");
