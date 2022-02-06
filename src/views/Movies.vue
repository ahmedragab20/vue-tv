<template>
  <div class="tv-shows container" v-if="TopMovies">
    <Headline title="*Popular Movies" txtStyle="text-center mt-5 mb-4" />
    <div class="row">
      <div
        class="col-6 col-sm-4 col-md-3 col-xl-2"
        v-for="item in TopMovies.results"
        :key="item.id"
      >
        <PreviewCard
          :item="item"
          :theme="theme"
          :image_url="image_url"
          type="movie"
          :hover="true"
        />
      </div>
      <div
        class="col-12 d-flex justify-content-center align-items-center mt-3"
        v-if="total_pages"
      >
        <v-pagination
          v-model="page"
          :pages="total_pages"
          :range-size="1"
          :active-color="theme.color"
          @update:modelValue="fetchData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

import Headline from "../components/Reusable/Headline.vue";
import PreviewCard from "../components/Reusable/PreviewCard.vue";

import handlePagination from "@/composables/handlePagination";
export default {
  components: {
    Headline,
    PreviewCard,
    VPagination,
  },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";

    return { image_url, ...FetchTVMoviesFunc() };
  },
};
function FetchTVMoviesFunc() {
  const store = useStore();

  const theme = store.state.theme;

  const TopMovies = computed(() => {
    return store.state.movies.TopMovies;
  });

  let pages_number = ref(20);

  const { page, total_pages } = handlePagination(pages_number);

  const fetchData = () => {
    store.dispatch("getTopMovies", page.value || 1).then(() => {
      if (TopMovies.value !== null)
        pages_number.value = TopMovies.value.total_pages;
    });
  };

  onMounted(() => {
    fetchData();
  });

  return { theme, page, total_pages, fetchData, TopMovies };
}
</script>

<style lang="scss" scoped></style>
