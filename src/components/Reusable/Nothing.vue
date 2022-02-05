<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column gap-5"
  >
    <div class="image">
      <img
        :src="theme.nothing_image"
        alt="nothing picture"
        class="radius shadow-lg"
        width="250"
      />
    </div>
    <div class="headline fw-bold text-uppercase text-center">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default { props: ["text", "theme"] };
</script>

<style lang="scss" scoped>
.image {
  img {
    pointer-events: none;
    user-select: none;
  }
}
</style>
