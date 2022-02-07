<template>
  <div
    class="modal-background p-4"
    :style="`background-color: ${theme.fade_lite}`"
  >
    <div
      class="modal-holder w-100 h-100 radius"
      :style="`background-color: ${theme.lite_color}; box-shadow: ${theme.shadow}`"
    >
      <div class="nav d-flex justify-content-end align-items-center p-2">
        <button
          class="btn btn-close"
          :style="` filter: invert(1)`"
          @click="SearchModalHandler"
        ></button>
      </div>

      <!-- Search Box -->
      <div class="row">
        <div class="col-12">
          <div class="search-input d-flex justify-content-center">
            <input
              type="text"
              v-model="searchTirm"
              class="transition"
              placeholder="What are you looking for?"
              @input="triggerSearch"
              :style="`caret-color: ${theme.color}; color: ${theme.color}`"
            />
          </div>
        </div>
        <div class="col-12 container">
          <div class="row" v-if="SearchResults">
            <div
              class="col-xl-2 col-lg-3 col-sm-4 col-6"
              v-for="item in SearchResults.results"
              :key="item.id"
            >
              <PreviewCard
                :theme="theme"
                :hover="false"
                :type="item.media_type"
                :image_url="image_url"
                :item="item"
                :handler="SearchModalHandler"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

import PreviewCard from "@/components/Reusable/PreviewCard";
export default {
  props: {
    theme: {
      required: true,
      type: Object,
    },
  },
  components: { PreviewCard },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";
    let searchTirm = ref("");
    let store = useStore();
    // console.log(store);

    const SearchResults = computed(() => {
      return store.state.search.SearchResults;
    });
    const triggerSearch = () => {
      store.dispatch("getSearchResults", searchTirm.value);
    };

    const SearchModalHandler = () => {
      store.commit("SEARCH_MODAL");
    };

    return {
      searchTirm,
      SearchResults,
      triggerSearch,
      image_url,
      SearchModalHandler,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal-background {
  position: fixed;
  inset: 0;
  z-index: 201;
  backdrop-filter: blur(8px);

  .modal-holder {
    overflow-y: scroll;
    overflow-x: hidden;
    .search-input {
      input {
        width: 90%;
        margin: auto;
        border: none;
        border-bottom: 1px solid currentColor;
        background: none;
        padding: 10px;
        text-align: center;
        opacity: 0.4;

        &:focus {
          opacity: 1;
          outline: none;
        }
      }
    }
  }
}
</style>
