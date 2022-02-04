<template>
  <div>
    <div v-if="title">
      <div class="d-none d-sm-block">
        <h4
          :class="txtStyle"
          id="card-title"
          v-if="title.length <= length"
          :style="`color: ${color}`"
        >
          {{ title }}
        </h4>
        <h4 :class="txtStyle" :style="`color: ${color}`" id="card-title" v-else>
          {{ title.substring(0, length) }}...
        </h4>
      </div>
      <div class="d-block d-sm-none">
        <h4
          :class="txtStyle"
          id="card-title"
          v-if="title.length <= length"
          :style="`color: ${color}`"
        >
          {{ title }}
        </h4>
        <h4 :class="txtStyle" :style="`color: ${color}`" id="card-title" v-else>
          {{ title.substring(0, smLength) }}...
        </h4>
      </div>
    </div>
    <h4 :class="txtStyle" :style="`color: ${color}`" v-else>
      alternative title
    </h4>
  </div>
</template>

<script>
export default {
  props: ["title", "txtStyle", "color", "length", "smLength"],
  mounted() {
    let title = document.querySelectorAll("#card-title");
    if (this.color) {
      title.forEach((el) => {
        el.style.color = this.color;
      });
    }
    // console.log(this.color)
  },
};
</script>

<style lang="scss" scoped>
h4 {
  font-size: 1rem;
}
@media (min-width: 1023px) {
  .xl-title {
    font-size: 2.5rem;
  }
}
@media (min-width: 769px) {
  .xl-title {
    font-size: 2rem;
  }
}
@media (max-width: 768px) {
  .xl-title {
    font-size: 1.7rem;
  }
}
@media (max-width: 480px) {
  .xl-title {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 0.85rem;
    //text-align: center;
  }
}
@media (max-width: 280px) {
  .xl-title {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.75rem;
    //text-align: center;
  }
}
</style>
