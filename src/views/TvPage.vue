<template>
  <div class="details-page" v-if="ShowDetails && SimilarShows && filterVideos">
    <header
      :style="`background: url(${
        image_url + ShowDetails.backdrop_path
      }) center no-repeat;`"
    >
      <div class="holder py-4" :style="`background-color: ${theme.fade_color}`">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <Poster
                :item="ShowDetails"
                :image_url="image_url"
                :theme="theme"
              />
            </div>
            <div class="col-lg-5 col-md-6">
              <Details
                :item="ShowDetails"
                :image_url="image_url"
                :theme="theme"
              />
            </div>
            <div class="col-lg-4 col-12">
              <div class="col-12">
                <Headline title="Similar" txtStyle="my-2" />

                <Carousel
                  :items="SimilarShows.results"
                  :settings="sliderSettings"
                  :breakpoints="breakpoints"
                >
                  <template #card="scope">
                    <PreviewCard
                      :item="scope.item"
                      :theme="theme"
                      :image_url="image_url"
                      :hover="false"
                      type="tv"
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
    <!-- Video Header -->
    <div class="videos-holder container" v-if="filterVideos.length > 0">
      <Headline title="Related Videos" txtStyle="my-2" />
      <div class="row">
        <div
          class="col-sm-4 col-lg-4"
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
import Headline from "../components/Reusable/Headline.vue";
import PreviewCard from "../components/Reusable/PreviewCard.vue";
import ArtistCard from "../components/Reusable/ArtistCard.vue";
import iFrameVideo from "../components/Reusable/iFrameVideo.vue";
import Carousel from "../components/Reusable/Carousel.vue";

import carouselOptions from "@/composables/carouselOptions.js";
export default {
  components: {
    Poster,
    Details,
    Headline,
    PreviewCard,
    ArtistCard,
    iFrameVideo,
    Carousel,
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

  const ShowDetails = computed(() => {
    return store.state.shows.ShowDetails;
  });
  const SimilarShows = computed(() => {
    return store.state.shows.SimilarShows;
  });
  const ShowsVideos = computed(() => {
    return store.state.shows.ShowsVideos;
  });
  const ShowCast = computed(() => {
    return store.state.shows.ShowCast;
  });

  const filterVideos = computed(() => {
    if (ShowsVideos.value) {
      if (ShowsVideos.value.results.length < 3) {
        return ShowsVideos.value.results;
      } else {
        return ShowsVideos.value.results.splice(0, 3);
      }
    }
  });
  const filterCast = computed(() => {
    if (ShowCast.value) {
      if (ShowCast.value.cast.length < 3) {
        return ShowCast.value.cast;
      } else {
        return ShowCast.value.cast.splice(0, 3);
      }
    }
  });

  watchEffect(() => {
    store.dispatch("getShowDetails", route.params.id);
    store.dispatch("getSimilarShows", route.params.id);
    store.dispatch("getShowsVideos", route.params.id);
    store.dispatch("getShowCast", route.params.id);
  });

  return { theme, ShowDetails, SimilarShows, filterVideos, filterCast };
}
</script>
