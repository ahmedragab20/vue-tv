<template>
  <div
    class="lg-card h-100 px-2 py-4 text-align"
    :style="`background-color: ${theme.fade_color}`"
  >
    <div class="row h-100 d-flex justify-content-center align-items-center">
      <div class="col-md-4">
        <div class="context">
          <div class="title">
            <div v-if="item.title || item.name">
              <CardTitle
                :title="item.title || item.name"
                txtStyle="text-align h2 fw-bold text-capitalize"
                :color="theme.color"
              />
            </div>
          </div>
          <div class="rate-date-holder d-flex gap-3">
            <div class="rate fw-bold" :style="`box-shadow: ${theme.shadow}`">
              {{ item.vote_average }}
              <i class="bi bi-star-fill" v-if="+item.vote_average >= 6.5"></i>
              <i class="bi bi-star-half" v-else></i>
            </div>
            |
            <div class="release-date">
              {{ item.release_date || item.first_air_date }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-md-4 my-4 d-flex justify-content-center align-items-center flex-column"
      >
        <div class="image">
          <router-link :to="`/${item.media_type}/${item.id}`">
            <img
              :style="`box-shadow: ${theme.shadow}`"
              :src="image_url + item.poster_path"
              alt=""
              width="200"
              class="img-fluid radius"
            />
          </router-link>
        </div>
      </div>
      <div class="col-md-4">
        <div class="context">
          <div class="over_view">
            <CardText
              :text="item.overview"
              :color="theme.color"
              txtStyle="text-align"
              :length="200"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTitle from "@/components/Reusable/CardTitle";
import CardText from "@/components/Reusable/CardText";
export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
    theme: {
      required: true,
      type: Object,
    },
  },
  components: { CardTitle, CardText },
  setup() {
    const image_url = "https://image.tmdb.org/t/p/w500";
    return { image_url };
  },
};
</script>

<style lang="scss" scoped>
.lg-card {
  height: 100%;
  backdrop-filter: blur(8px);

  .rate {
    padding: 3px 5px;
    border-radius: 5px;
    background-color: orange;
  }

  @media (max-width: 768px) {
    * {
      text-align: center;
    }

    .rate-date-holder {
      justify-content: center;
    }
  }
}
</style>
