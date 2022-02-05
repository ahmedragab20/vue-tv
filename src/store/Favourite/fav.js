function updateLocalStorage(fav) {
  localStorage.setItem("fav", JSON.stringify(fav));
}

const state = {
  FavouriteItems: [],
  alreadyAdded: false,
  isAdded: false,
};

const getters = {};

const mutations = {
  ADD_TO_FAV(state, payload) {
    let item = state.FavouriteItems.find((i) => i.id === payload.id);

    if (!item) {
      state.FavouriteItems.push({ ...payload });

      state.isAdded = true;
      state.alreadyAdded = false;
      console.table(state.isAdded, state.alreadyAdded);
    } else {
      state.alreadyAdded = true;
    }
    updateLocalStorage(state.FavouriteItems);
  },
  REVMOVE_FROM_FAVS(state, id) {
    let item = state.FavouriteItems.find((i) => i.id == id);

    state.FavouriteItems = state.FavouriteItems.filter((i) => i.id !== item.id);

    updateLocalStorage(state.FavouriteItems);
  },
  updateFavStorage(state) {
    const fav = localStorage.getItem("fav");
    if (fav) {
      state.FavouriteItems = JSON.parse(fav);
    }
  },
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
