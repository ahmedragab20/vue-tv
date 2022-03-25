<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="item in items" :key="item.id">
      <slot name="card" :item="item"></slot>
    </Slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
export default {
  components: { Carousel, Slide },
  props: {
    items: {
      type: Array,
      required: true,
    },
    settings: {
      type: Object,
      required: true,
    },
    breakpoints: {
      type: Object,
      required: true,
    },
  },
};
</script>

