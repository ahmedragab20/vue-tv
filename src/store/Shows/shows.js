import { get } from "@/utils/axios";

const state = {
  TopShows: null,
  ShowDetails: null,
  SimilarShows: null,
};

const getters = {};

const mutations = {
  TOP_SHOWS(state, data) {
    state.TopShows = data;
  },
  SHOW_DETAILS(state, data) {
    state.ShowDetails = data;
  },
  SIMILAR_SHOWS(state, data) {
    state.SimilarShows = data;
  },
};

const actions = {
  getTopShows(_, page_number) {
    get("tv", "popular", false, page_number, "TOP_SHOWS");
  },
  getShowDetails(_, show_id) {
    get("tv", show_id, false, 1, "SHOW_DETAILS");
  },
  getSimilarShows(_, show_id) {
    get("tv", show_id, "similar", 1, "SIMILAR_SHOWS");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
