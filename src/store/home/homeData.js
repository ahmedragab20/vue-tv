import get from "@/utils/axios";

const state = {
  HomeData: null,
};

const getters = {};

const mutations = {
  HOME_DATA(state, data) {
    state.HomeData = data;
  },
};

const actions = {
  getHomeData(_, page_id) {
    get("/trending/all/day", false, false, page_id, "HOME_DATA");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
