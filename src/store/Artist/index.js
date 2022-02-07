import { get } from "@/utils/axios";

const state = {
  BestArtists: null,
  ArtistDetails: null,
  ArtistWork: null,
};

const getters = {};

const mutations = {
  BEST_ARTISTS(state, data) {
    state.BestArtists = data;
  },
  ARTIST_DETAILS(state, data) {
    state.ArtistDetails = data;
  },
  ARTIST_WORK(state, data) {
    state.ArtistWork = data;
  },
};

const actions = {
  getBestArtists() {
    get("person", "popular", false, 1, "BEST_ARTISTS");
  },
  getArtistDetails(_, artist_id) {
    get("person", artist_id, false, 1, "ARTIST_DETAILS");
  },
  getArtistWork(_, artist_id) {
    get("person", artist_id, "combined_credits", 1, "ARTIST_WORK");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
