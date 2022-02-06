<template>
  <div class="favourites container">
    <div class="favs-holder" v-if="favs_length > 0">
      <header class="text-center my-3 text-capitalize">
        <h3>items you've loved!</h3>
      </header>
      <div class="row justify-content-between align-items-center">
        <div
          class="col-6 col-sm-4 col-md-3 col-xl-2"
          v-for="item in favs"
          :key="item.id"
        >
          <PreviewCard
            :item="item"
            :theme="theme"
            :image_url="image_url"
            :handler="removeFav"
            type="fav"
            :hover="true"
          />
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      <Nothing
        text="We all are waiting for you to add a new item here"
        :theme="theme"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

import PreviewCard from "../components/Reusable/PreviewCard.vue";
import Nothing from "../components/Reusable/Nothing.vue";
export default {
  components: { PreviewCard, Nothing },
  setup() {
    const store = useStore();

    const image_url = "https://image.tmdb.org/t/p/w500";
    const theme = store.state.theme;
    const favs = computed(() => {
      return store.state.fav.FavouriteItems;
    });

    const favs_length = computed(() => {
      if (favs) return favs.value.length;
    });
    const removeFav = (id) => {
      store.commit("REVMOVE_FROM_FAVS", id);
    };
    return { favs, favs_length, theme, image_url, removeFav };
  },
};
</script>

<style lang="scss" scoped>
.favourites {
  min-height: 80vh;
}
</style>
