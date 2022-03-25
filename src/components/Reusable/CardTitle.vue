<template>
  <div>
    <div v-if="title">
      <!-- <div class="d-none d-sm-block">
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
      </div> -->
      <p
        class="truncate d-none d-sm-block"
        :class="txtStyle"
        id="card-title"
        :style="`color: ${color}`"
      >
        {{ title }}
      </p>
      <small
        class="truncate d-block d-sm-none"
        :class="txtStyle"
        id="card-title"
        :style="`color: ${color}`"
      >
        {{ title }}
      </small>
    </div>
    <h4 :class="txtStyle" :style="`color: ${color}`" v-else>
      alternative title
    </h4>
  </div>
</template>

<script>
export default {
  props: ["title", "txtStyle", "color"],
  mounted() {
    let title = document.querySelectorAll("#card-title");
    if (this.color) {
      title.forEach((el) => {
        el.style.color = this.color;
      });
    }
  },
};
</script>
