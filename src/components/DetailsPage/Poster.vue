<template>
  <div class="poster">
    <div class="image">
      <img
        :src="image_url + item.poster_path"
        alt=""
        class="img-fluid radius"
        :style="`box-shadow: ${theme.shadow}`"
      />
    </div>
    <div class="context mt-3">
      <div class="companies">
        <div>
          <div class="d-flex gap-3 flex-wrap">
            <div v-for="company in item.production_companies" :key="company.id">
              <div class="image">
                <img :src="image_url + company.logo_path" :alt="company.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      type: String,
      required: true,
    },
  },
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.companies {
  .image {
    img {
      filter: drop-shadow(3px 3px 4px #858585);
      max-width: 80px;
    }
  }
}
</style>
