<template>
  <div class="">
    <h1
      class="custom-font tw-text-3xl tw-text-center btn-text-color tw-font-black tw-mt-2 tw-mb-8"
    >
      Marketplace
    </h1>
    <div
      class="tw-px-5 md:tw-px-0 md:tw-w-[60%] xl:tw-w-[38%] tw-mx-auto tw-mb-4"
    >
      <v-tabs
        v-model="tab"
        color="#BD5345"
        height="40"
        active-class="active-tab-bg"
        class="marketplace-tab"
      >
        <v-tab class="white--text tw-capitalize rounded-pill wallet-before"
          >Marketplace</v-tab
        >
        <v-tab
          class="white--text t-z-0 tw-capitalize rounded-pill wallet-before"
        >My Items</v-tab
        >
      </v-tabs>
    </div>
    <div class="tw-py-4 tw-px-6 marketplace-vtabs-items">
      <v-tabs-items v-model="tab">
        <v-tab-item background-color="currentColor">
          <MarketplaceHome />
        </v-tab-item>
        <v-tab-item background-color="currentColor">
          <MarketplaceItems />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
