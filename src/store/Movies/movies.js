import get from "@/utils/axios";

const state = {
  TopMovies: null,
};

const getters = {};

const mutations = {
  TOP_MOVIES(state, data) {
    state.TopMovies = data;
  },
};

const actions = {
  getTopMovies(_, page_id) {
    get("movie", "popular", false, page_id, "TOP_MOVIES");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
