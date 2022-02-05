import axios from "axios";
import store from "@/store";

export async function get(url, id, slash, page, mutataion) {
  const api_key = "9ab45b4f4d577cd87a3f36c8f6ed2963";
  const base_URL = "https://api.themoviedb.org/3/";

  try {
    if (!id && !slash) {
      let response = await axios.get(
        `${base_URL}${url}?api_key=${api_key}&language=en-US&page=${page}&include_adult=false`
      );
      store.commit(mutataion, response.data);
    } else if (id && !slash) {
      let response = await axios.get(
        `${base_URL}${url}/${id}?api_key=${api_key}&language=en-US&page=${page}&include_adult=false`
      );
      store.commit(mutataion, response.data);
    } else if (id && slash) {
      let response = await axios.get(
        `${base_URL}${url}/${id}/${slash}?api_key=${api_key}&language=en-US&page=${page}&include_adult=false`
      );
      store.commit(mutataion, response.data);
    }
  } catch (error) {
    console.error(error);
  }
}
export async function post(url, id, slash, mutation, data) {
  const api_key = "9ab45b4f4d577cd87a3f36c8f6ed2963";
  const base_URL = "https://api.themoviedb.org/3/";

  try {
    let response = axios.post(
      `${base_URL}${url}/${id}/${slash}?api_key=${api_key}`,
      data
    );
    store.commit(mutation, response);
  } catch (error) {
    console.error(error);
  }
}
