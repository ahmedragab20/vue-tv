<template>
  <div
    class="artist-page container mt-2"
    v-if="ArtistDetails && filterArtistWork"
  >
    <div class="row">
      <div class="col-md-6">
        <Poster
          :item="ArtistDetails"
          :theme="theme"
          :image_url="image_url"
          :artist="true"
        />
      </div>
      <div class="col-md-6">
        <ArtistDetails :theme="theme" :item="ArtistDetails" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <Headline
          title="artist work"
          txtStyle="my-2 text-capitalize text-center"
        />
        <div class="row justify-content-center align-items-center">
          <div
            class="col-xl-2 col-md-3 col-sm-4 col-6"
            v-for="item in filterArtistWork"
            :key="item.id"
          >
            <PreviewCard
              :item="item"
              :theme="theme"
              :image_url="image_url"
              :hover="true"
              :type="item.media_type"
            />
          </div>
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
import ArtistDetails from "@/components/DetailsPage/ArtistDetails";
import Headline from "@/components/Reusable/Headline.vue";
import PreviewCard from "../components/Reusable/PreviewCard.vue";
export default {
  components: { Poster, ArtistDetails, Headline, PreviewCard },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";
    return { image_url, ...FetchDetails() };
  },
};
function FetchDetails() {
  const store = useStore();
  const route = useRoute();

  const theme = store.state.theme;
  const ArtistDetails = computed(() => {
    return store.state.artists.ArtistDetails;
  });
  const ArtistWork = computed(() => {
    return store.state.artists.ArtistWork;
  });

  const filterArtistWork = computed(() => {
    if (ArtistWork.value) {
      if (ArtistWork.value.cast.length < 10) {
        return ArtistWork.value.cast;
      } else {
        return ArtistWork.value.cast.splice(0, 10);
      }
    }
  });

  watchEffect(() => {
    store.dispatch("getArtistDetails", route.params.id);
    store.dispatch("getArtistWork", route.params.id);
  });

  return { ArtistDetails, theme, filterArtistWork };
}
</script>

<style lang="scss" scoped></style>
