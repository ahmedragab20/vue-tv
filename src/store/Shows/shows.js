import get from "@/utils/axios";

const state = {
  TopShows: null,
};

const getters = {};

const mutations = {
  TOP_SHOWS(state, data) {
    state.TopShows = data;
  },
};

const actions = {
  getTopShows(_, page_id) {
    get("tv", "popular", false, page_id, "TOP_SHOWS");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
