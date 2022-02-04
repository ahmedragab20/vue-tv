import { createStore } from "vuex";

import homeData from "./home/homeData";
import movies from "./Movies/movies";
import shows from "./Shows/shows";

export default createStore({
  namespaced: true,
  state: {
    theme: {
      background: null,
      color: null,
      fade_color: null,
      shadow: null,
      lite_color: null,
    },
    listStatus: false,
  },
  mutations: {
    SWITCH_THEME(state, payload) {
      if (payload === "dark") {
        state.theme.background = "#010101";
        state.theme.color = "#fff";
        state.theme.fade_color = "rgba(0, 0, 0, 0.4)";
        state.theme.lite_color = "rgba(22, 22, 22, 0.726)";
        state.theme.shadow = " 0 16px 20px #25252513";
      } else {
        state.theme.background = "#fff";
        state.theme.color = "#000";
        state.theme.fade_color = "rgba(100, 100, 100, 0.4)";
        state.theme.lite_color = "rgba(161, 161, 161, 0.726)";
        state.theme.shadow = "0 16px 20px rgba(0, 0, 0, 0.3)";
      }
    },
    TOGGLE_NAV_LIST(state) {
      state.listStatus = !state.listStatus;
    },
  },
  actions: {},
  modules: {
    homeData,
    movies,
    shows,
  },
});
