<template>
  <div class="home">
    <div
      class="container mt-4"
      v-if="HomeData && TopMovies && TopShows && TopArtists"
    >
      <!-- Slider Block -->
      <Carousel
        :items="HomeData"
        :settings="mainSliderSettings"
        :breakpoints="mainSliderBreakpoints"
        :style="`box-shadow: ${theme.shadow}`"
        class="radius overflow-hidden"
      >
        <template #card="scope">
          <div
            class="lg-card-container h-100 w-100"
            :style="`background: url(${
              image_url + scope.item.poster_path
            }) center; background-size: cover;`"
          >
            <LGCard :theme="theme" :item="scope.item" />
          </div>
        </template>
      </Carousel>

      <!-- Popular Movies Block -->
      <Headline title="Popular Movies" txtStyle="text-center mt-5 mb-4" />
      <Carousel
        :items="TopMovies"
        :settings="sliderSettings"
        :breakpoints="breakpoints"
      >
        <template #card="scope">
          <PreviewCard
            :item="scope.item"
            :theme="theme"
            :hover="true"
            :image_url="image_url"
            type="movie"
          />
        </template>
      </Carousel>
      <LoadMore param="/movies" />

      <!-- Popular TV Shows Block -->
      <Headline title="Popular Tv Shows" txtStyle="text-center mt-5 mb-4" />
      <Carousel
        :items="TopShows"
        :settings="sliderSettings"
        :breakpoints="breakpoints"
      >
        <template #card="scope">
          <PreviewCard
            :item="scope.item"
            :theme="theme"
            :hover="true"
            :image_url="image_url"
            type="tv"
          />
        </template>
      </Carousel>
      <LoadMore param="/tv" />

      <!-- Best Artists Block -->
      <Headline title="Popular Artists" txtStyle="text-center mt-5 mb-4" />
      <Carousel
        :items="TopArtists"
        :settings="sliderSettings"
        :breakpoints="breakpoints"
      >
        <template #card="scope">
          <ArtistCard
            :item="scope.item"
            :theme="theme"
            :image_url="image_url"
          />
        </template>
      </Carousel>
    </div>
    <div v-else>
      <LoadingPage />
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";

import LGCard from "../components/Reusable/LGCard.vue";
import Headline from "../components/Reusable/Headline.vue";
import PreviewCard from "../components/Reusable/PreviewCard.vue";
import LoadMore from "../components/Reusable/LoadMore.vue";
import Carousel from "../components/Reusable/Carousel.vue";
import ArtistCard from "../components/Reusable/ArtistCard.vue";
import LoadingPage from "../components/Reusable/LoadingPage.vue";

import carouselOptions from "@/composables/carouselOptions.js";
export default {
  name: "Home",
  components: {
    LGCard,
    Headline,
    PreviewCard,
    LoadMore,
    ArtistCard,
    LoadingPage,
    Carousel,
  },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";
    const {
      sliderSettings,
      breakpoints,
      mainSliderSettings,
      mainSliderBreakpoints,
    } = carouselOptions("home");

    return {
      image_url,
      sliderSettings,
      breakpoints,
      mainSliderSettings,
      mainSliderBreakpoints,
      ...FetchHomeDataFunc(),
    };
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
  const TopArtists = computed(() => {
    if (store.state.artists.BestArtists)
      return store.state.artists.BestArtists.results;
  });

  // console.log(store.state);
  watchEffect(() => {
    store.dispatch("getHomeData", 1);
    store.dispatch("getTopMovies", 1);
    store.dispatch("getTopShows", 1);
    store.dispatch("getBestArtists", 1);
  });

  return { HomeData, theme, TopMovies, TopShows, TopArtists };
}
</script>
<style lang="scss" scoped></style>
