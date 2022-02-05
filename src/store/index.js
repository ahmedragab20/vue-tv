import { createStore } from "vuex";

import homeData from "./home/homeData";
import movies from "./Movies/movies";
import shows from "./Shows/shows";
import fav from "./Favourite/fav";

export default createStore({
  namespaced: true,
  state: {
    theme: {
      background: null,
      color: null,
      fade_color: null,
      shadow: null,
      lite_color: null,
      nothing_image: null,
    },
    listStatus: false,
    RateModal: false,
  },
  mutations: {
    SWITCH_THEME(state, payload) {
      if (payload === "dark") {
        state.theme.background = "#010101";
        state.theme.color = "#fff";
        state.theme.fade_color = "rgba(0, 0, 0, 0.4)";
        state.theme.lite_color = "rgba(22, 22, 22, 0.726)";
        state.theme.shadow = "0 16px 20px #25252513";
        state.theme.nothing_image =
          "https://cdn.dribbble.com/users/1090020/screenshots/11513572/media/6ce8914eb98016e79d46416706eed85c.png?compress=1&resize=1200x900&vertical=top";
      } else {
        state.theme.background = "#fff";
        state.theme.color = "#000";
        state.theme.fade_color = "rgba(100, 100, 100, 0.4)";
        state.theme.lite_color = "rgba(161, 161, 161, 0.726)";
        state.theme.shadow = "0 16px 20px rgba(0, 0, 0, 0.3)";
        state.theme.nothing_image =
          "https://cdn.dribbble.com/users/1090020/screenshots/14981781/media/52008542daea0b8759fc60aac27af2a6.png?compress=1&resize=1200x900&vertical=top";
      }
    },
    TOGGLE_NAV_LIST(state) {
      state.listStatus = !state.listStatus;
    },
    TOGGLE_RATE_MODAL(state) {
      state.RateModal = !state.RateModal;
    },
  },
  actions: {},
  modules: {
    homeData,
    movies,
    shows,
    fav,
  },
});
