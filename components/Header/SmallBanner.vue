<template>
  <div
    v-if="$vuetify.breakpoint.mobile"
    :class="$vuetify.breakpoint.mobile ? 'tw-mx-3' : ''"
  >
    <v-img
      src="/banners/mobWoodBanner.png"
      lazy-src="/banners/mobWoodBanner.png"
      :max-width="$vuetify.breakpoint.mobile ? '134px' : '400px'"
      :height="$vuetify.breakpoint.mobile ? '53px' : '156px'"
      class="mx-auto d-flex align-center justify-center"
      contain
    >
      <h3 class="banner-text mx-auto mt-1 tw-text-base">
        {{ text }}
      </h3>
    </v-img>
  </div>

  <div class="my-2" v-else>
    <v-img
      src="/banners/Banner-small.svg"
      lazy-src="/banners/Banner-small.svg"
      max-width="466px"
      class="mx-auto d-flex align-center justify-center"
      contain
    >
      <v-img
        src="/banners/GreenVecSm.svg"
        lazy-src="/banners/GreenVecSm.svg"
        max-width="338px"
        class="mx-auto d-flex align-center justify-center"
        contain
      >
        <h3 class="banner-text tw-text-5xl">{{ text }}</h3>
      </v-img>
    </v-img>
  </div>
</template>

<script>
import GreenBanner from "@/static/banners/GreenVecSm.svg";

export default {
  props: ["text"],
  components: {
    GreenBanner,
  },
};
</script>

<style lang="scss">
.banner-text {
  text-align: center;
  font-family: Mitr;
  font-style: normal;
  font-weight: bolder;
  // font-size: 48px;
  // line-height: 75px;
  color: #000000;
}
</style>