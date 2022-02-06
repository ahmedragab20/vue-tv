<template>
  <div class="video my-3 mx-2">
    <iframe
      class="rounded"
      :src="`https://www.youtube.com/embed/${item.key}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.video {
  iframe {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
