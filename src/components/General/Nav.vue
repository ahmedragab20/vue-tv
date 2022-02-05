<template>
  <nav>
    <div class="container">
      <div class="logo">
        <h2 class="d-none d-md-block">
          <router-link to="/">
            <span>Vue</span>
            <strong>TV</strong>
          </router-link>
        </h2>
        <h3 class="d-block d-md-none">
          <router-link to="/">
            <span>Vue</span>
            <strong>TV</strong>
          </router-link>
        </h3>
      </div>
      <div class="d-flex gap-3">
        <div class="mode reverseColor">
          <button
            class="btn rounded-circle color"
            @click="toggleDarkMode(), isDarkHandler()"
          >
            <i class="bi bi-circle-half"></i>
          </button>
        </div>
        <div
          class="burger transition radius"
          @click="listHandler"
          :class="{ active: isActive }"
        >
          <div class="line-1 transition"></div>
          <div class="line-2 transition"></div>
          <div class="line-3 transition"></div>
        </div>
      </div>
    </div>
    <div class="nav-list transition">
      <div
        class="container h-100 d-flex justify-content-around align-items-center flex-column"
        :style="`color: ${this.theme.background}; background: ${this.theme.color}`"
      >
        <div class="logo">
          <h2 class="d-none d-md-block">
            <span>Vue</span>
            <strong>TV</strong>
          </h2>
          <h3 class="d-block d-md-none">
            <span>Vue</span>
            <strong>TV</strong>
          </h3>
        </div>
        <div class="list h-50">
          <ul class="text-center d-flex flex-column gap-3">
            <li
              v-for="(link, i) in links"
              :key="i"
              class="my-2 mx-5"
              @click="listHandler"
            >
              <router-link :to="link.to" class="reverseColor p-1">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import darkMode from "@/composables/darkMode.js";

import { computed, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const links = reactive([
      { name: "Home", to: "/" },
      { name: "Movies", to: "/movies" },
      { name: "TV Shows", to: "/tv" },
    ]);

    const isActive = computed(() => {
      return store.state.listStatus;
    });

    const listHandler = () => {
      store.commit("TOGGLE_NAV_LIST");
    };

    return {
      isActive,
      listHandler,
      links,
      ...darkModeFunc(),
    };
  },
};

/* Dark Mode Handler Function */
function darkModeFunc() {
  const { theme, isDarkHandler, isDark, toggleDarkMode } = darkMode();

  return { theme, isDarkHandler, isDark, toggleDarkMode };
}
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  min-height: 10vh;
  z-index: 100;
  -webkit-backdrop-filter: blur(8px);
  -moz-backdrop-filter: blur(8px);
  -ms-backdrop-filter: blur(8px);
  -o-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  .container {
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    .mode {
      button {
        &:focus {
          box-shadow: none;
        }
      }
    }

    .burger {
      padding: 5px;
      display: inline-block;
      cursor: pointer;

      z-index: 3;
      * {
        background-color: currentColor;
      }
      div {
        width: 25px;
        height: 1px;
        margin: 5px;
        background-color: currentColor;
      }

      &.active {
        .line-1 {
          transform: rotate(45deg) translate(6px, 4px);
        }
        .line-2 {
          opacity: 0;
        }
        .line-3 {
          transform: rotate(-45deg) translateY(-3px) translateX(3px);
        }
      }
    }
  }
  .nav-list {
    position: absolute;
    top: 0;
    right: -30vw;
    height: 100vh;
    width: 30vw;
    background-color: #fff;
    z-index: 9;
    transition-delay: 0.4s;

    .router-link-active {
      border: 2px solid currentColor;
    }

    @media (max-width: 600px) {
      right: -70vw;
      width: 70vw;
    }
  }
}
</style>
