<template>
  <router-link :to="`/artist/${item.id}`">
    <div class="artist-card position-relative radius overflow-hidden">
      <div class="card-container radius">
        <div class="image">
          <img
            v-if="item.profile_path"
            :src="image_url + item.profile_path"
            width="200"
            class="img-fluid radius"
          />
          <img v-else :src="img" width="200" class="img-fluid radius" />
        </div>
        <div
          class="context position-absolute bottom-0 w-100 p-1"
          :style="`background-color: ${theme.fade_color}; box-shadow: ${theme.shadow}`"
        >
          <CardTitle
            :title="item.original_name || item.name"
            :length="8"
            :smLength="7"
            txtStyle="font-weight-bold text-capitalize fw-bold"
            :color="theme.color"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import CardTitle from "@/components/Reusable/CardTitle";
export default {
  props: {
    theme: {
      type: Object,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    image_url: {
      required: true,
      type: String,
    },
  },
  components: { CardTitle },
  data() {
    return {
      img: `https://arabmeems.com/wp-content/uploads/2021/02/D8fc19dXYAIa8QG.jpg`,
    };
  },
};
</script>

<style lang="scss" scoped>
.context {
  backdrop-filter: blur(8px);
}
</style>
