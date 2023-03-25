<template>
  <v-container
    class="d-flex flex-row flex-wrap align-center justify-space-between"
  >
    <div>
      <v-spacer></v-spacer>
    </div>

    <div>
      <v-img
        contain
        :src="heading"
        :lazy-src="heading"
        :max-width="$vuetify.breakpoint.mobile ? '250px' : '835.18px'"
        height="60px"
      ></v-img>
    </div>

    <div>
      <v-img
        src="/img/whitePaper/pageNo.png"
        max-width="68px"
        height="57.8px"
        contain
      >
        <div class="d-flex justify-center ma-3">
          <p class="tw-font-semibold tw-text-2xl default-text-color">
            {{ page }}
          </p>
        </div>
      </v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "pageNo",
  props: {
    page: String,
    heading: String
  },
};
</script>

<style lang="scss" scoped>
</style>