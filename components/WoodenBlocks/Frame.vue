<template>
  <div>
    <v-img
      class="tw-mx-auto d-flex align-center justify-center"
      src="/svgs/Frame.svg"
      lazy-src="/svgs/Frame.svg"
      :max-width="$vuetify.breakpoint.mobile ? '118px' : '248px'"
      :height="$vuetify.breakpoint.mobile ? '121px' : '247px'"
      contain
    >
      <v-img
        class="tw-mx-auto rounded-xl" :class="$vuetify.breakpoint.mobile ? 'mb-3' : 'mb-6'"
        :src="imgURL"
        :lazy-src="imgURL"
        :max-width="$vuetify.breakpoint.mobile ? '70px' : '147px'"
        :height="$vuetify.breakpoint.mobile ? '70px' : '147px'"
      >
      </v-img>
    </v-img>

    <div class="tw-flex tw-flex-col tw-mt-3" style="height: 80px">
      <span :class="$vuetify.breakpoint.mobile ? 'tw-text-base tw-leading-6' : 'tw-text-2xl tw-leading-9'" class="fm_team_name tw-uppercase">{{ name }}</span>
      <small class="fm_title tw-uppercase">{{ title }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "title", "imgURL"],
};
</script>

<style lang="scss">
.fm_team_name {
  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  // font-size: 24px;
  // line-height: 38px;
  /* identical to box height */

  color: #ffffff;
}

.fm_title {
  text-align: center;
  font-family: Mitr;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
}
</style>