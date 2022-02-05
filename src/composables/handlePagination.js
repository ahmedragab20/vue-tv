import { ref } from "@vue/runtime-core";
// import { useStore } from "vuex";
function handlePagination(pages_number) {
  // console.log(pages_number);
  // const store = useStore();

  let page = ref(1);
  let total_pages = ref(10);

  if (pages_number) {
    total_pages = pages_number;
  }

  return { page, total_pages };
}

export default handlePagination;
