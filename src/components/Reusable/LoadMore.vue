<template>
  <div class="text-center">
    <router-link :to="param"> Load More </router-link>
  </div>
</template>

<script>
export default {
  props: {
    param: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
