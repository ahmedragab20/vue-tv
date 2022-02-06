import axios from "axios";

const state = {
  SearchResults: null,
  SearchModal: false,
};

const getters = {};

const mutations = {
  SEARCH_RESULTS(state, data) {
    state.SearchResults = data;
  },
  SEARCH_MODAL(state) {
    state.SearchModal = !state.SearchModal;
  },
};

const actions = {
  async getSearchResults({ commit }, tirm) {
    const api_key = "9ab45b4f4d577cd87a3f36c8f6ed2963";
    const base_URL = "https://api.themoviedb.org/3/";
    try {
      let response = await axios.get(
        `${base_URL}search/multi?api_key=${api_key}&query=${tirm}`
      );

      commit("SEARCH_RESULTS", response.data);
    } catch (error) {
      console.error(error);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
