import axios from "axios";
import { useStore } from "vuex";

async function get(url, id, slash, page, commit) {
  const store = useStore();
  const api_key = "9ab45b4f4d577cd87a3f36c8f6ed2963";
  const base_URL = "https://api.themoviedb.org/3/";

  try {
    if (!id && !slash) {
      let response = await axios.get(
        `${base_URL}${url}?api_key=${api_key}&language=en-US&page=${page}&include_adult=false`
      );
      store.commit(commit, response.data.results || response.data);
    } else if (id && !slash) {
      let response = await axios.get(
        `${base_URL}${url}/${id}?api_key=${api_key}&language=en-US&page=${page}&include_adult=false`
      );
      store.commit(commit, response.data.results || response.data);
    } else if (id && slash) {
      let response = await axios.get(
        `${base_URL}${url}/${id}/${slash}?api_key=${api_key}&language=en-US&page=${page}&include_adult=false`
      );
      store.commit(commit, response.data.results || response.data);
    }
  } catch (error) {
    console.error(error);
  }
}

export default get;
