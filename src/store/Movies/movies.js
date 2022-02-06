import { get, post } from "@/utils/axios";

const state = {
  TopMovies: null,
  MovieDetails: null,
  SimilarMovies: null,
  MovieVideos: null,
  AddRate: null,
};

const getters = {};

const mutations = {
  TOP_MOVIES(state, data) {
    state.TopMovies = data;
  },
  MOVIE_DETAILS(state, data) {
    state.MovieDetails = data;
  },
  SIMILAR_MOVIES(state, data) {
    state.SimilarMovies = data;
  },
  MOVIE_VIDEOS(state, data) {
    state.MovieVideos = data;
  },
  ADD_RATE(state, data) {
    state.AddRate = data;
  },
};

const actions = {
  getTopMovies(_, page_id) {
    get("movie", "popular", false, page_id, "TOP_MOVIES");
  },
  getMovieDetails(_, movie_id) {
    get("movie", movie_id, false, 1, "MOVIE_DETAILS");
  },
  getSimilarMovies(_, movie_id) {
    get("movie", movie_id, "similar", 1, "SIMILAR_MOVIES");
  },
  getMovieVideos(_, movie_id) {
    get("movie", movie_id, "videos", 1, "MOVIE_VIDEOS");
  },
  postAddRate() {
    let payload = JSON.parse(sessionStorage.getItem("rate_payload"));
    console.log(payload);
    setTimeout(() => {
      post("movie", payload.id, "rating", "ADD_RATE", payload.rate);
    }, 1000);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
