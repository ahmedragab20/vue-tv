<template>
  <div class="home">
    <div class="container mt-4" v-if="HomeData && TopMovies && TopShows">
      <!-- Slider Block -->
      <Slider :theme="theme" height="85vh" :breakpoints="{}" :visibleSlides="1">
        <vueper-slide
          v-for="item in HomeData"
          :key="item.id"
          :image="image_url + item.poster_path"
        >
          <template #content>
            <LGCard :theme="theme" :item="item" />
          </template>
        </vueper-slide>
      </Slider>

      <!-- Popular Movies Block -->
      <Headline title="Popular Movies" txtStyle="text-center mt-5 mb-4" />
      <CardsSlider>
        <div
          class="col-6 col-sm-4 col-md-3 col-xl-2"
          v-for="item in TopMovies"
          :key="item.id"
        >
          <div class="carousel-cell" style="width: 100%">
            <PreviewCard
              :item="item"
              :theme="theme"
              :image_url="image_url"
              :hover="true"
              type="movie"
            />
          </div>
        </div>
      </CardsSlider>
      <LoadMore param="/movies" />

      <!-- Popular TV Shows Block -->
      <Headline title="Popular Tv Shows" txtStyle="text-center mt-5 mb-4" />
      <CardsSlider>
        <div
          class="col-6 col-sm-4 col-md-3 col-xl-2"
          v-for="item in TopShows"
          :key="item.id"
        >
          <div class="carousel-cell" style="width: 100%">
            <PreviewCard
              :item="item"
              :theme="theme"
              :hover="true"
              :image_url="image_url"
              type="tv"
            />
          </div>
        </div>
      </CardsSlider>
      <LoadMore param="/tv" />
    </div>
    <div v-else>
      <LoadingPage />
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import Slider from "@/components/Reusable/Slider";
import LGCard from "../components/Reusable/LGCard.vue";
import Headline from "../components/Reusable/Headline.vue";
import PreviewCard from "../components/Reusable/PreviewCard.vue";
import LoadMore from "../components/Reusable/LoadMore.vue";
import CardsSlider from "../components/Reusable/CardsSlider.vue";
import LoadingPage from "../components/Reusable/LoadingPage.vue";

export default {
  name: "Home",
  components: {
    Slider,
    LGCard,
    VueperSlide,
    Headline,
    PreviewCard,
    CardsSlider,
    LoadMore,
    LoadingPage,
  },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";

    return { image_url, ...FetchHomeDataFunc() };
  },
};
function FetchHomeDataFunc() {
  const store = useStore();

  const theme = store.state.theme;

  const HomeData = computed(() => {
    if (store.state.homeData.HomeData)
      return store.state.homeData.HomeData.results;
  });
  const TopMovies = computed(() => {
    if (store.state.movies.TopMovies)
      return store.state.movies.TopMovies.results;
  });
  const TopShows = computed(() => {
    if (store.state.shows.TopShows) return store.state.shows.TopShows.results;
  });

  // console.log(TopMovies);
  watchEffect(() => {
    store.dispatch("getHomeData", 1);
    store.dispatch("getTopMovies", 1);
    store.dispatch("getTopShows", 1);
  });

  return { HomeData, theme, TopMovies, TopShows };
}
</script>
<style lang="scss" scoped></style>
