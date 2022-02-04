<template>
  <vueper-slides
    :dragging-distance="70"
    :fixed-height="height"
    :autoplay="true"
    :bullets="false"
    :arrows="false"
    :visibleSlides="visibleSlides"
    transition-speed="250"
    :breakpoints="breakpoints"
    :style="`box-shadow: ${theme.shadow}`"
  >
    <slot></slot>
  </vueper-slides>
</template>

<script>
import { VueperSlides } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  props: {
    theme: {
      type: Object,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    breakpoints: {
      type: Object,
      required: false,
    },
    visibleSlides: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {};
  },
  components: { VueperSlides },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.vueperslides:not(.no-shadow):not(.vueperslides--3d)
  .vueperslides__parallax-wrapper:after,
.vueperslides:not(.no-shadow):not(.vueperslides--3d)
  .vueperslides__parallax-wrapper:before {
  box-shadow: none;
}
.vueperslides {
  border-radius: 20px;
  overflow: hidden;
}
</style>
