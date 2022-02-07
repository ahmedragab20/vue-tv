import { ref } from "@vue/runtime-core";

function handlePagination(pages_number) {
  let page = ref(1);
  let total_pages = ref(10);

  if (pages_number) {
    total_pages = pages_number;
  }

  return { page, total_pages };
}

export default handlePagination;
