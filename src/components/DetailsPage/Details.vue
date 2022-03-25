<template>
  <div class="position-relative">
    <div class="title">
      <div class="col-12 mb-2">
        <span
          v-if="item.status === 'Released'"
          class="bg-success radius fw-bold btn-sm"
        >
          {{ item.status }}
        </span>
        <span v-else class="bg-danger radius fw-bold btn-sm">
          {{ item.status }}
        </span>
      </div>
      <div class="col-12 mb-2">
        <CardTitle
          :title="item.title || item.name"
          txtStyle="text-start fw-boldtext-capitalize fw-bold xl-title h2"
          :color="theme.color"
        />
      </div>
      <div class="col-12 mb-2">
        <div class="release-date">
          {{ item.release_date }}
        </div>
        <p class="subtitle">
          {{ item.tagline }}
        </p>
      </div>
      <div class="col-12 mb-2">
        <div class="rate-lang d-flex gap-3 pb-1">
          <small class="text-uppercase fw-bold">{{
            item.original_language
          }}</small>
          <i class="bi bi-dot text-muted"></i>
          <small class="rate fw-bold">
            {{ item.vote_average }}
            <i
              class="bi bi-star-fill text-warning"
              v-if="+item.vote_average >= 6.5"
            ></i>
            <i class="bi bi-star-half text-warning" v-else></i>
          </small>
        </div>
      </div>
    </div>
    <div class="col-12 mb-2">
      <div class="discription">
        <Description :text="item.overview" :maxLength="200" />
      </div>
    </div>
    <div class="col-12 mb-2">
      <div class="actions d-flex gap-2">
        <div>
          <a
            :href="item.homepage"
            target="_blanck"
            title="movie's home page"
            class="btn radius color"
            :style="`background-color: ${theme.background}; box-shadow: ${theme.shadow}`"
          >
            <i class="bi bi-share"></i>
          </a>
        </div>
        <div>
          <button
            class="btn radius color"
            title="Add to favorites"
            :style="`background-color: ${
              timeout ? 'rgb(25, 223, 91)' : theme.background
            }; box-shadow: ${theme.shadow}`"
            @click="addToFav(item)"
          >
            <i class="bi bi-heart"></i>
          </button>
        </div>
        <transition name="added" appear v-if="timeout && isAdded">
          <Snackbar
            msg="The item has added"
            :theme="theme"
            borderColor="rgb(25, 223, 91)"
          />
        </transition>
        <transition name="added" appear v-if="timeout && alreadyAdded">
          <Snackbar
            msg="The item has been already added before"
            :theme="theme"
            borderColor="rgb(342, 42, 42)"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CardTitle from "@/components/Reusable/CardTitle";
import Description from "@/components/Reusable/Description";
import Snackbar from "@/components/Reusable/Snackbar";
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
// import RateModal from "@/components/Reusable/RateModal";

// import modalHandler from "@/composables/modalHandler";
// import dispatchRate from "@/composables/dispatchRate";
export default {
  props: {
    theme: {
      type: Object,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  components: {
    CardTitle,
    Description,
    Snackbar,
  },
  setup() {
    return { ...HandleFavourits() };
  },
};
function HandleFavourits() {
  const store = useStore();

  let timeout = ref(false);

  const isAdded = computed(() => {
    return store.state.fav.isAdded;
  });
  const alreadyAdded = computed(() => {
    return store.state.fav.alreadyAdded;
  });

  const addToFav = (item) => {
    store.commit("ADD_TO_FAV", item);
    if (isAdded.value) {
      timeout.value = true;
      setTimeout(() => {
        timeout.value = false;
      }, 3000);
    } else if (alreadyAdded.value) {
      timeout.value = true;
      setTimeout(() => {
        timeout.value = false;
      }, 3000);
    }
  };
  return { addToFav, isAdded, alreadyAdded, timeout };
}
</script>

<style lang="scss" scoped>
.added-enter-from,
.added-leave-to {
  transform: translatex(200px);
  opacity: 0;
}
.added-enter-active,
.added-leave-active {
  transition: all 0.3s ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  transform: translateY(70%);
}
.modal-enter-active,
.modal-leave-active {
  transition: transform 0.1s ease-in-out;
}
</style>
