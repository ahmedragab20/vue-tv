<template>
  <footer :style="`background-color: ${theme.lite_color}`" class="py-1 mt-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">{{ new Date().getFullYear() }} &copy;</div>
        <div class="col-6 text-end">
          <a href="#">Ahmed Ragab</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const theme = computed(() => {
      return store.state.theme;
    });

    return { theme };
  },
};
</script>

<style lang="scss" scoped></style>
