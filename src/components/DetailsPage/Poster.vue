<template>
  <div class="poster" v-if="item">
    <div class="image-container d-flex justify-content-center">
      <div class="image">
        <img
          v-if="item.profile_path || item.poster_path"
          :src="image_url + `${!artist ? item.poster_path : item.profile_path}`"
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
    </div>
    <div class="context mt-3" v-if="!artist">
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
    artist: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {},
  data() {
    return {
      img: `https://media.filfan.com/NewsPics/FilfanNew/large/Latrag3.jpg`,
      img_2: `data:image/jpeg;base64,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`,
    };
  },
  created() {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.poster {
  .image-container {
    .image {
      max-width: 80%;
      max-height: 90%;
      user-select: none;
      pointer-events: none;
    }
  }

  .companies {
    .image {
      img {
        filter: drop-shadow(3px 3px 4px #858585);
        max-width: 75px;
      }
    }
  }
}
</style>
