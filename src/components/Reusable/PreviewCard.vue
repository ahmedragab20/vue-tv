<template>
  <div class="preview-card card-space radius">
    <div class="card-container">
      <div class="image">
        <img
          v-if="item.poster_path"
          :src="image_url + item.poster_path"
          alt="poster for movie"
          class="img-fluid radius"
        />
        <img
          v-else
          src="https://media.filfan.com/NewsPics/FilfanNew/large/Latrag3.jpg"
          alt="poster for movie"
          class="img-fluid radius"
        />
      </div>
      <div
        class="context px-2 py-1 d-flex justify-content-evenly flex-column gap-1"
        :style="`background-color: ${theme.lite_color}`"
      >
        <div class="title">
          <CardTitle
            :title="item.title || item.name"
            txtStyle="text-start fw-boldtext-capitalize fw-bold"
            :color="theme.color"
          />
        </div>
        <div class="rate-lang d-flex gap-3">
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
        v-if="hover"
        class="hover position-absolute py-2 px-3"
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
                txtStyle="text-start fw-boldtext-capitalize fw-bold h3"
                :color="theme.color"
              />
            </div>
            <div class="over_view">
              <CardText
                :text="item.overview"
                :color="theme.color"
                txtStyle="text-start truncate"
                :length="40"
              />
            </div>
          </div>
          <div class="col-12 d-flex pb-3">
            <router-link
              v-if="type !== 'fav' && !handler"
              :to="`/${type}/${item.id}`"
              class="hover-btn btn w-100 mb-2 color rounded-pill mt-3 text-uppercase"
              :style="`background-color: ${theme.background}`"
            >
              <i class="bi bi-play"></i> more details
            </router-link>
            <!-- @click.native="handler()" -->
            <div
              v-else-if="type !== 'fav' && handler"
              class="d-inline"
              @click="handler()"
            >
              <router-link
                :to="`/${type}/${item.id}`"
                class="hover-btn btn w-100 mb-2 color rounded-pill mt-3 text-uppercase"
                :style="`background-color: ${theme.background}`"
              >
                <i class="bi bi-play"></i> more details
              </router-link>
            </div>
            <button
              v-else
              @click="handler(item.id)"
              class="hover-btn btn w-100 mb-2 btn-danger rounded-pill mt-3 text-uppercase"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <router-link
          v-if="type !== 'fav'"
          @click="handler()"
          :to="`/${type}/${item.id}`"
          class="position-absolute top-0 w-100 h-100"
        >
        </router-link>
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
    type: {
      required: true,
      type: String,
    },
    handler: {
      required: false,
      type: Function,
    },
    hover: {
      required: false,
      type: Boolean,
    },
  },
  components: { CardTitle, CardText },
  setup() {
    let interval = setInterval(() => {
      let hover_card = document.querySelectorAll(".hover");
      hover_card.forEach((el) => {
        let rect = el.getBoundingClientRect();

        if (250 > rect.right) {
          el.style.right = "";
          el.style.left = `0px`;
        } else {
          el.style.left = "";
          el.style.right = "0px";
        }
      });
    });

    setTimeout(() => {
      clearInterval(interval);
    }, 500);
    return {};
  },
};
</script>

<style lang="scss" scoped>
.preview-card {
  max-width: 180px;
  .card-container {
    position: relative;

    &:hover {
      .hover {
        opacity: 1;
        pointer-events: all;
        user-select: all;
      }
    }

    .image {
      // width: 100%;
      height: 100%;
      img {
        z-index: 0;
      }
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

      small {
        transform: translateY(-5px);

        @media (max-width: 310px) {
          font-size: 0.6rem;
        }
      }
    }
    .hover {
      top: 0;
      height: 180px;
      border-radius: 20px;
      width: 140%;
      // right: 0%;
      opacity: 0;
      z-index: 9;
      pointer-events: none;
      user-select: none;
      backdrop-filter: blur(5px);
      transition: all 0.4s ease-in-out 0.3s;
    }
  }
}
</style>
