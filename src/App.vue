<template>
  <div>
    <div
      id="app"
      :class="{ active: isNavListActive }"
      @click.self="listHandler()"
      v-if="theme && isMonted"
      :style="`color: ${theme.color}; background: ${theme.background}`"
    >
      <Nav />
      <transition appear name="search" v-if="SearchModal">
        <SearchModal :theme="theme" />
      </transition>
      <router-view v-slot="{ Component }">
        <transition name="rout" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <Footer />
    </div>
    <div v-else>
      <LoadingPage />
    </div>
  </div>
</template>

<script>
import globalStyles from "@/composables/globalStyles.js";

import Nav from "@/components/General/Nav";
import Footer from "@/components/General/Footer";
import LoadingPage from "./components/Reusable/LoadingPage.vue";
import SearchModal from "./components/Reusable/SearchModal.vue";

import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    Nav,
    Footer,
    LoadingPage,
    SearchModal,
  },
  setup() {
    return {
      ...globalStylesFunc(),
      ...listHandlerFunc(),
    };
  },
};

/* Global Styles Function */
function globalStylesFunc() {
  const { bodyStyle, elementsStyle } = globalStyles();

  return { bodyStyle, elementsStyle };
}

/* Nav List Handler */
function listHandlerFunc() {
  const store = useStore();
  const theme = computed(() => {
    return store.state.theme;
  });
  const SearchModal = computed(() => {
    return store.state.search.SearchModal;
  });

  const isMonted = ref(false);
  const updateFavs = () => {
    return setInterval(store.commit("updateFavStorage"));
  };

  onMounted(() => {
    updateFavs();
    if (theme) {
      setTimeout(() => {
        isMonted.value = true;
      }, 1000);
    }
  });

  const isNavListActive = computed(() => {
    return store.state.listStatus;
  });
  const listHandler = () => {
    if (isNavListActive.value) store.commit("TOGGLE_NAV_LIST");
  };

  return { isMonted, isNavListActive, listHandler, SearchModal, theme };
}
</script>

<style lang="scss" scoped>
#app {
  transition: transform 0.3s ease-in-out;
  position: relative;

  &.active {
    transform: translateX(-30vw);
    @media (max-width: 600px) {
      transform: translateX(-70vw);
    }
    &::after {
      content: "";
      position: fixed;
      inset: 0;
      z-index: 199;
      transition: transform 0.3s ease-in-out;
      backdrop-filter: blur(2px);
    }
  }
}
/* transitions */
.search-enter-from,
.search-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.search-enter-active,
.search-leave-active {
  transition: all 0.3s ease-in-out;
}
.rout-enter-from,
.rout-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.rout-enter-active,
.rout-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
