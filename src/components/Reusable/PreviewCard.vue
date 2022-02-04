<template>
  <div class="preview-card m-2 rounded">
    <div class="card-container">
      <div class="image">
        <img
          v-if="item.poster_path"
          :src="image_url + item.poster_path"
          alt="poster for movie"
          class="img-fluid rounded"
        />
        <img
          v-else
          src="https://cdn.dribbble.com/users/1090020/screenshots/14155126/media/dd426688b9a8786c308df4b712f7e1cf.png"
          alt="poster for movie"
          class="img-fluid rounded"
        />
      </div>
      <div class="context p-2" :style="`background-color: ${theme.lite_color}`">
        <div class="title">
          <CardTitle
            :title="item.title || item.name"
            :length="14"
            :smLength="11"
            txtStyle="font-weight-bold text-capitalize fw-bold"
            :color="theme.color"
          />
        </div>
        <div class="rate-lang d-flex gap-3 pb-1">
          <small class="text-uppercase fw-bold">{{
            item.original_language
          }}</small>
          <small class="rate fw-bold">
            {{ item.vote_average }}
            <i
              class="bi bi-star-fill text-warning"
              v-if="+item.vote_average >= 6.5"
            ></i>
            <i class="bi bi-star-half text-warning" v-else></i>
          </small>
        </div>
      </div>
      <div
        class="hover position-absolute pt-2 px-3"
        :style="`background-color: ${theme.lite_color}`"
      >
        <div class="row">
          <div class="col-12">
            <div class="rate-lang d-flex gap-3 pb-1">
              <small class="text-uppercase fw-bold">{{
                item.original_language
              }}</small>
              <small class="rate fw-bold">
                {{ item.vote_average }}
                <i
                  class="bi bi-star-fill text-warning"
                  v-if="+item.vote_average >= 6.5"
                ></i>
                <i class="bi bi-star-half text-warning" v-else></i>
              </small>
            </div>
          </div>
          <div class="col-12">
            <div class="title">
              <CardTitle
                :title="item.title || item.name"
                :length="22"
                :smLength="19"
                txtStyle="font-weight-bold text-capitalize fw-bold"
                :color="theme.color"
              />
            </div>
            <div class="over_view">
              <CardText
                :text="item.overview"
                :color="theme.color"
                txtStyle=""
                :length="70"
              />
            </div>
          </div>
          <div class="col-12">
            <button
              class="btn color radius mt-3 text-uppercase"
              :style="`background-color: ${theme.background}`"
            >
              <i class="bi bi-play"></i> more details
            </button>
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
    theme: {
      required: true,
      type: Object,
    },
    item: {
      required: true,
      type: Object,
    },
    image_url: {
      required: true,
      type: String,
    },
  },
  components: { CardTitle, CardText },
  data() {
    return {
      img: `https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsbM-CNLR8bMc-o5Rb0b-ZifcXlSOq5s4eM5Y9aOKsR3yC_PVg`,
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.preview-card {
  max-width: 180px;
  min-height: 250px;
  .card-container {
    position: relative;

    &:hover {
      .hover {
        opacity: 1;
        pointer-events: all;
      }
    }

    .image {
      // width: 100%;
      height: 100%;
      z-index: 0;
    }
    .context {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27%;
      backdrop-filter: blur(2px);
      box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.363);
      border-radius: 0 0 0.25rem 0.25rem;
    }
    .hover {
      top: 0;
      height: 200px;
      border-radius: 20px;
      width: 150%;
      right: 0%;
      opacity: 0;
      z-index: 9;
      pointer-events: none;
      backdrop-filter: blur(5px);
      transition: all 0.4s ease-in-out;
    }
  }

  @media (max-width: 320px) {
    small {
      font-size: 0.7rem;
      transform: translateY(-5px);
    }
  }
}
</style>
