<template>
  <router-link
    to="/favs"
    class="snackbar radius px-2 py-4"
    :style="`
      background-color: ${theme.background};
      color: ${theme.color}; box-shadow: ${theme.shadow};
      border-color: ${borderColor}`"
  >
    <div class="">
      {{ msg }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["msg", "theme", "borderColor"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.snackbar {
  position: fixed;
  right: 20px;
  top: 40px;
  bottom: auto;
  min-width: 200px;
  border-left: 4px solid;
  z-index: 999999;

  @media (max-width: 600px) {
    top: auto;
    bottom: 300px;
  }
}
</style>
