<template>
  <div class="text-center load-more">
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

<style lang="scss" scoped>
.load-more {
  padding: 5px 10px;
  margin-top: 10px;
}
</style>
