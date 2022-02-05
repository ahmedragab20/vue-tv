import { useRoute } from "vue-router";
import { useStore } from "vuex";

function dispatchRate(func) {
  const route = useRoute();
  const store = useStore();

  const dispatchRateHandler = (rate) => {
    // console.table({ rate, id, func });
    let payload = {
      id: route.params.id,
      rate: rate,
    };
    sessionStorage.setItem("rate_payload", JSON.stringify(payload));
    store.dispatch(func);
  };

  return { dispatchRateHandler };
}

export default dispatchRate;
