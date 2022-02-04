<template>
  <div class="cards-slider">
    <flickity
      ref="flickity"
      :data-flickity-lazyload="true"
      :options="flickityOptions"
    >
      <slot></slot>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
export default {
  name: "App",
  components: { Flickity },
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        dragThreshold: 10,
        autoPlay: true,
        selectedAttraction: 0.2,
        friction: 0.8,

        // any options from Flickity can be used
      },
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
  },
  created() {
    const slider = setInterval(() => {
      this.$nextTick(function () {
        this.$refs.flickity.rerender();
      });
    });

    setTimeout(() => {
      clearInterval(slider);
    }, 1000);
  },
};
</script>
<style lang="scss">
.flickity-enabled {
  .flickity-viewport {
    height: auto;
  }
}
</style>
