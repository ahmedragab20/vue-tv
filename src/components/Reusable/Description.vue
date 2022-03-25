<template>
  <div class="description" v-if="text">
    <p v-if="!maxLength && !readMore">
      {{ text }}
    </p>
    <p v-else-if="maxLength < text.length && !readMore">
      {{ text.substring(0, maxLength) }}
      ...<span @click.self="readMoreHandler" class="fw-bold"> ReadMore</span>
    </p>
    <p v-else-if="maxLength && readMore">
      {{ text }}
      ...<span @click.self="readMoreHandler" class="fw-bold"> ReadLess</span>
    </p>
    <p v-else-if="maxLength > text.length">
      {{ text }}
    </p>
    <p v-else>Alternative description</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["maxLength", "text"],
  setup() {
    let readMore = ref(false);

    const readMoreHandler = () => {
      readMore.value = !readMore.value;
    };
    return { readMore, readMoreHandler };
  },
};
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
}
@media (max-width: 410px) {
  p {
    font-size: 0.75rem;
  }
}
</style>
