<template>
  <div
    class="details-page"
    v-if="MovieDetails && SimilarMovies && filterCast && filterVideos"
  >
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
              <div class="col-12">
                <Headline title="Similar" txtStyle="mb-2" />

                <Carousel
                  :items="SimilarMovies.results"
                  :settings="sliderSettings"
                  :breakpoints="breakpoints"
                >
                  <template #card="scope">
                    <PreviewCard
                      :item="scope.item"
                      :theme="theme"
                      :image_url="image_url"
                      :hover="false"
                      type="movie"
                    />
                  </template>
                </Carousel>
              </div>
              <div class="col-12" v-if="filterCast.length > 0">
                <Headline title="Cast" txtStyle="mb-2" />
                <div class="row">
                  <div
                    class="col-lg-4 col-md-3 col-4"
                    v-for="artist in filterCast"
                    :key="artist.id"
                  >
                    <ArtistCard
                      :item="artist"
                      :theme="theme"
                      :image_url="image_url"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Video Block -->
    <div class="videos-holder container" v-if="filterVideos.length > 0">
      <Headline title="Related Videos" txtStyle="my-2" />
      <div class="row">
        <div
          class="col-sm-6 col-lg-4"
          v-for="item in filterVideos"
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
import Carousel from "../components/Reusable/Carousel.vue";
import Headline from "../components/Reusable/Headline.vue";
import iFrameVideo from "../components/Reusable/iFrameVideo.vue";
import ArtistCard from "../components/Reusable/ArtistCard.vue";

import carouselOptions from "@/composables/carouselOptions.js";
export default {
  components: {
    Poster,
    Details,
    Carousel,
    Headline,
    PreviewCard,
    iFrameVideo,
    ArtistCard,
  },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";
    const { sliderSettings, breakpoints } = carouselOptions("details");

    return { image_url, sliderSettings, breakpoints, ...FetchDetails() };
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
  const MovieCast = computed(() => {
    return store.state.movies.MovieCast;
  });

  const filterVideos = computed(() => {
    if (MovieVideos.value) {
      if (MovieVideos.value.results.length < 2) {
        return MovieVideos.value.results;
      } else {
        return MovieVideos.value.results.splice(0, 2);
      }
    }
  });
  const filterCast = computed(() => {
    if (MovieCast.value) {
      if (MovieCast.value.cast.length < 3) {
        return MovieCast.value.cast;
      } else {
        return MovieCast.value.cast.splice(0, 3);
      }
    }
  });

  // console.log(filterCast.value);

  watchEffect(() => {
    store.dispatch("getMovieDetails", route.params.id);
    store.dispatch("getSimilarMovies", route.params.id);
    store.dispatch("getMovieVideos", route.params.id);
    store.dispatch("getMovieCast", route.params.id);
  });

  return { theme, MovieDetails, SimilarMovies, filterVideos, filterCast };
}
</script>
