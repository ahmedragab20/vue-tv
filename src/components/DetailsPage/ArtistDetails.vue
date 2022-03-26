<template>
  <div class="artist-details">
    <div class="row">
      <div class="col-12 mb-2">
        <div class="title">
          <div>
            <h4>
              {{ item.known_for_department }}
            </h4>
          </div>
          <CardTitle
            :title="item.title || item.name"
            txtStyle="text-startfw-boldtext-capitalize fw-bold "
            :color="theme.color"
          />
        </div>
        <div class="info">
          <div>
            <h6>Birthday</h6>
            <small>{{ item.birthday }}</small>
          </div>
          <div>
            <h6>Place of birth</h6>
            <small>
              {{ item.place_of_birth }}
            </small>
          </div>
        </div>
      </div>
      <div class="col-12 mb-2" v-if="item.also_known_as">
        <div class="known_as">
          <h6>Also known as</h6>
          <small v-for="(name, i) in item.also_known_as" :key="i">
            <span class="mx-1"><i class="bi bi-dot"></i> {{ name }}</span>
          </small>
        </div>
      </div>
      <div class="col-12 mb-2" v-if="item.biography">
        <h6 class="mb-2">Biography</h6>
        <div class="discription">
          <Description :text="item.biography" :maxLength="200" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardTitle from "@/components/Reusable/CardTitle";
import Description from "@/components/Reusable/Description";
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
  },
  components: { CardTitle, Description },
};
</script>

<style lang="scss" scoped>
h6 {
  margin-bottom: -3px;
}
</style>
