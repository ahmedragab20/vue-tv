<template>
  <div class="background">
    <div
      class="modal-container h-100 w-100 d-flex justify-content-center align-items-center"
    >
      <div
        class="modal-card radius text-center position-relative"
        :style="`background-color: ${theme.fade_color}`"
      >
        <button
          @click="handler()"
          class="btn position-absolute end-0 top-0 p-2"
          :style="`background-color: ${theme.lite_color}; color: ${theme.color}`"
        >
          <i class="bi bi-x"></i>
        </button>
        <p class="text-uppercase mt-3">please, use the arrows!</p>
        <strong v-if="rate === 0"
          >{{ rate }} <i class="bi bi-star"></i>
        </strong>
        <strong v-else-if="rate < 6"
          >{{ rate }} <i class="bi bi-star-half"></i>
        </strong>
        <strong v-else
          >{{ rate }} <i class="bi bi-star-fill text-warning"></i>
        </strong>
        <vue3starRatings
          v-model="rate"
          :disableClick="true"
          :inactiveColor="theme.color"
          controlSize="22"
          :numberOfStars="10"
          starSize="26"
          :controlBg="theme.background"
        />
        <div class="action">
          <button
            :disabled="rate === 0"
            @click="submitBtn(rate)"
            class="btn px-5 submit"
            :style="`background-color: ${theme.background}; color: ${theme.color}; box-shadow: ${theme.shadow}`"
          >
            submit
          </button>
        </div>
        <!-- :showControl="false" -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import vue3starRatings from "vue3-star-ratings";
import { watchEffect } from "@vue/runtime-core";

export default {
  props: {
    theme: {
      type: Object,
      required: true,
    },
    handler: {
      type: Function,
      required: true,
    },
    submitBtn: {
      type: Function,
      required: true,
    },
  },
  components: { vue3starRatings },
  setup(props) {
    let rate = ref(0);

    watchEffect(() => console.log(props.submitBtn));

    return { rate };
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  inset: 0;
  z-index: 9;

  .modal-container {
    .modal-card {
      backdrop-filter: blur(8px);
      @media (min-width: 800px) {
        width: 60%;
        height: 50vh;
      }
      @media (max-width: 768px) {
        width: 90%;
        height: 50vh;
      }
    }
  }
}
</style>
