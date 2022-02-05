<template>
  <div
    id="app"
    :class="{ active: isNavListActive }"
    @click.self="listHandler()"
    v-if="theme"
    :style="`color: ${theme.color}; background: ${theme.background}`"
  >
    <Nav />
    <router-view v-slot="{ Component }">
      <transition name="rout" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import globalStyles from "@/composables/globalStyles.js";

import Nav from "@/components/General/Nav";
import Footer from "@/components/General/Footer";

import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    Nav,
    Footer,
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

  const isNavListActive = computed(() => {
    return store.state.listStatus;
  });
  const listHandler = () => {
    if (isNavListActive.value) store.commit("TOGGLE_NAV_LIST");
  };

  return { isNavListActive, listHandler, theme };
}
</script>

<style lang="scss" scoped>
#app {
  transition: transform 0.3s ease-in-out;
  position: relative;
  height: 100%;

  &.active {
    transform: translateX(-30vw);
    @media (max-width: 600px) {
      transform: translateX(-70vw);
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 199;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 400vh;
      transition: transform 0.3s ease-in-out;
      // background-color: rgba(167, 167, 167, 0.116);
      backdrop-filter: blur(2px);
    }
  }
}
/* transitions */
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
