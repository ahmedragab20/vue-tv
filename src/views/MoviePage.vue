<template>
  <div class="details-page" v-if="MovieDetails && SimilarMovies && MovieVideos">
    <!-- Header Holder -->
    <header
      :style="`background: url(${
        image_url + MovieDetails.backdrop_path
      }) center no-repeat;`"
    >
      <div class="holder py-4" :style="`background-color: ${theme.fade_color}`">
        <div class="container">
          <!-- Header -->
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <Poster
                :item="MovieDetails"
                :image_url="image_url"
                :theme="theme"
              />
            </div>
            <div class="col-lg-5 col-md-6">
              <Details
                :item="MovieDetails"
                :image_url="image_url"
                :theme="theme"
              />
            </div>
            <div class="col-lg-4 col-12">
              <Headline title="Similar" txtStyle="my-2" />
              <Slider
                :theme="theme"
                height="260px"
                :breakpoints="{}"
                :visibleSlides="2"
              >
                <vueper-slide
                  v-for="item in SimilarMovies.results"
                  :key="item.id"
                >
                  <template #content>
                    <PreviewCard
                      :item="item"
                      :theme="theme"
                      :image_url="image_url"
                      :hover="false"
                      type="movie"
                    />
                  </template>
                </vueper-slide>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Video Header -->
    <div class="videos-holder container">
      <Headline title="Related Videos" txtStyle="my-2" />
      <div class="row">
        <div
          class="col-sm-4 col-lg-3"
          v-for="item in MovieVideos.results"
          :key="item.id"
        >
          <iFrameVideo :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import Poster from "@/components/DetailsPage/Poster";
import Details from "@/components/DetailsPage/Details";
import PreviewCard from "../components/Reusable/PreviewCard.vue";
import { VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Slider from "@/components/Reusable/Slider";
import Headline from "../components/Reusable/Headline.vue";
import iFrameVideo from "../components/Reusable/iFrameVideo.vue";
export default {
  components: {
    Poster,
    Details,
    Slider,
    VueperSlide,
    Headline,
    PreviewCard,
    iFrameVideo,
  },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";

    return { image_url, ...FetchDetails() };
  },
};

function FetchDetails() {
  const route = useRoute();

  const store = useStore();
  const theme = store.state.theme;

  const MovieDetails = computed(() => {
    return store.state.movies.MovieDetails;
  });
  const SimilarMovies = computed(() => {
    return store.state.movies.SimilarMovies;
  });
  const MovieVideos = computed(() => {
    return store.state.movies.MovieVideos;
  });

  watchEffect(() => {
    store.dispatch("getMovieDetails", route.params.id);
    store.dispatch("getSimilarMovies", route.params.id);
    store.dispatch("getMovieVideos", route.params.id);
  });

  return { theme, MovieDetails, SimilarMovies, MovieVideos };
}
</script>

<style lang="scss" scoped>
header {
  background-size: cover !important;
  position: relative;
  .holder {
    backdrop-filter: blur(10px);
  }
}
</style>
