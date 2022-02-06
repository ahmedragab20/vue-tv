<template>
  <div class="poster">
    <div class="image">
      <img
        v-if="item.poster_path"
        :src="image_url + item.poster_path"
        alt=""
        class="img-fluid radius"
        :style="`box-shadow: ${theme.shadow}`"
      />
      <img
        :src="img"
        alt=""
        class="img-fluid radius"
        :style="`box-shadow: ${theme.shadow}`"
        v-else
      />
    </div>
    <div class="context mt-3">
      <div class="companies">
        <div>
          <div class="d-flex gap-3 flex-wrap">
            <div v-for="company in item.production_companies" :key="company.id">
              <div class="image">
                <img
                  :src="image_url + company.logo_path"
                  :alt="company.name"
                  v-if="company.logo_path"
                />
                <img
                  :src="img_2"
                  :alt="company.name"
                  class="img-fluid radius company_img"
                  :style="`box-shadow: ${theme.shadow}`"
                  v-else
                />
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
  data() {
    return {
      img: `https://cdn.dribbble.com/users/1068771/screenshots/15018013/media/9b0dcdc46193379b0bdaa810d0e3e0cc.jpg?compress=1&resize=1200x900&vertical=top`,
      img_2: `https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg`,
    };
  },
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
      max-width: 75px;
    }
  }
}
</style>
