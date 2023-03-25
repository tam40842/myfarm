<template>
  <div>
    <div class="tw-grid tw-grid-cols-4 tw-gap-5">
      <nuxt-link
        :to="`/dashboard/marketplace/${items.id}`"
        class="tw-bg-[#D6B694] marketplace-home tw-transition-all tw-duration-300 tw-rounded-3xl tw-mb-1"
        v-for="items in marketplace" :key="items.id"
      >
        <div class="tw-py-4 tw-px-8" v-if="items.item == null">
          <h3
            class="text-center text-shadow-2 tw-text-lg tw-font-semibold tw-mb-3"
          >
             {{items.tree.name}}
          </h3>
          <div class="tw-flex tw-justify-center tw-mb-3">
            <img :src="`/dashboard/marketplace/${items.tree.logo}.png`" alt="tree" />
          </div>
          <div class="tw-relative tw-flex tw-justify-center">
            <img src="/dashboard/marketplace/frame.svg" alt="frame" />
            <div
              class="tw-absolute tw-w-full tw-top-[50%] tw-left-0 tw-flex tw-justify-evenly"
              style="transform: translateY(-50%)"
            >
              <img src="/dashboard/marketplace/coin-usdt.png" alt="frame" />
              <div class="tw-text-sm tw-text-white">{{items.price}}</div>
            </div>
          </div>
        </div>
        <div class="tw-py-4 tw-px-8" v-else>
          <h3
            class="text-center text-shadow-2 tw-text-lg tw-font-semibold tw-mb-3"
          >
            {{items.item.name}}
          </h3>
          <div class="tw-flex tw-justify-center tw-mb-3">
            <img :src="`/dashboard/marketplace/${items.item.logo}.png`" alt="tree" />
          </div>
          <div class="tw-relative tw-flex tw-justify-center">
            <img src="/dashboard/marketplace/frame.svg" alt="frame" />
            <div
              class="tw-absolute tw-w-full tw-top-[50%] tw-left-0 tw-flex tw-justify-evenly"
              style="transform: translateY(-50%)"
            >
              <img src="/dashboard/marketplace/coin-usdt.png" alt="frame" />
              <div class="tw-text-sm tw-text-white">{{items.price}}</div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    this.getData()
  },
  computed: {
    ...mapGetters("marketplace", ["marketplace"])
  },
  methods: {
    async getData() {
      await this.$store.dispatch("marketplace/getMarketplace")
    }
  }
};
</script>

<style lang="scss" scoped>
.text-shadow-2 {
  color: white;
  text-shadow: 2px 2px 0 #741e00, 2px -2px 0 #741e00, -2px 2px 0 #741e00,
    -2px -2px 0 #741e00, 2px 0px 0 #741e00, 0px 2px 0 #741e00,
    -2px 0px 0 #741e00, 0px -2px 0 #741e00;
}

.marketplace-home {
  border: 4px solid transparent;
}

.marketplace-home:hover {
  border: 4px solid #bd5345;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
