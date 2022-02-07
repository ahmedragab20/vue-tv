<template>
  <div class="loading">
    <img src="@/assets/images/loading.gif" width="200" alt="" />
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const theme = store.state.theme;

    return { theme };
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  inset: 0;
  z-index: 201;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
  background-color: #fff;
}
</style>
