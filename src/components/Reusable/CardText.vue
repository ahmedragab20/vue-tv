<template>
  <div>
    <div v-if="text">
      <div class="d-none d-md-block">
        <p
          :class="txtStyle"
          class="card-text"
          v-if="text.length < length"
          :style="`color: ${color}`"
        >
          {{ text }}
        </p>
        <p v-else-if="!length && text" :style="`color: ${color}`">
          {{ text }}
        </p>
        <p
          :class="txtStyle"
          class="card-text"
          v-else
          :style="`color: ${color}`"
        >
          {{ text.substring(0, length) }}...
        </p>
      </div>
      <div class="d-block d-md-none">
        <p
          :class="txtStyle"
          class="card-text"
          v-if="text.length < length"
          :style="`color: ${color}`"
        >
          {{ text }}
        </p>
        <p v-else-if="!length && text" :style="`color: ${color}`">
          {{ text }}
        </p>
        <p
          :class="txtStyle"
          class="card-text"
          v-else
          :style="`color: ${color}`"
        >
          {{ text.substring(0, length) }}...
        </p>
      </div>
    </div>
    <p :class="txtStyle" v-else>alternative text</p>
  </div>
</template>

<script>
export default {
  props: ["text", "txtStyle", "color", "length"],
  // mounted() {
  //   let text = document.querySelectorAll(".card-text");
  //   setInterval(() => {
  //     if (this.color) {
  //       text.forEach((el) => {
  //         el.style.color = this.color;
  //       });
  //     }
  //   });
  // },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 1rem;
}
@media (max-width: 480px) {
  p {
    font-size: 0.8rem;
    //text-align: center;
  }
}
@media (max-width: 280px) {
  p {
    font-size: 0.6rem;
    //text-align: center;
  }
}
</style>
