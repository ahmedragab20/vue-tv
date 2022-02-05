import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default function modalHandler() {
  const store = useStore();

  const showModal = computed(() => {
    return store.state.RateModal;
  });
  const showModalHandler = () => {
    store.commit("TOGGLE_RATE_MODAL");
  };

  return { showModal, showModalHandler };
}
