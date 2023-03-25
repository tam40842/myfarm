<template>
  <div>
    <!-- <p>{{ profile.tree }}</p> -->
    <div class="tw-grid tw-grid-cols-4 tw-gap-5">
      <nuxt-link
        v-if="profile.tree.length > 0"
        v-for="dataTree in profile.tree"
        :key="dataTree.name"
        to="#"
        class="tw-bg-[#D6B694] marketplace-items tw-transition-all tw-duration-300 tw-rounded-3xl tw-mb-1"
      >
        <div class="tw-py-4 tw-px-2">
          <h3
            class="text-center text-shadow-2 tw-text-lg tw-font-semibold tw-mb-3"
          >
            {{ dataTree.name }}
          </h3>
          <div class="tw-flex tw-justify-center tw-mb-3">
            <!-- <img src="/dashboard/marketplace/tree.png" alt="tree" /> -->
            <img
              :src="`/dashboard/marketplace/${dataTree.logo}.png`"
              alt="tree"
            />
          </div>
          <div class="tw-relative tw-flex tw-justify-center">
            <img src="/dashboard/marketplace/frame.svg" alt="frame" />
            <div
              class="tw-absolute tw-w-full tw-top-[50%] tw-left-0 tw-flex tw-justify-evenly"
              style="transform: translateY(-50%)"
            >
              <!-- <img src="/dashboard/marketplace/coin-usdt.png" alt="frame" /> -->
              <div class="tw-text-sm tw-text-white">{{dataTree.pivot.exp}} / {{dataTree.maxExp}}</div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <!-- <nuxt-link
        v-if="profile.item.length > 0"
        v-for="dataItem in profile.item"
        :key="dataItem.name"
        to="#"
        class="tw-bg-[#D6B694] marketplace-items tw-transition-all tw-duration-300 tw-rounded-3xl tw-mb-1"
      >
        <div class="tw-py-4 tw-px-2">
          <h3
            class="text-center text-shadow-2 tw-text-lg tw-font-semibold tw-mb-3"
          >
            {{ dataItem.name }}
          </h3>
          <div class="tw-flex tw-justify-center tw-mb-3">
            <img src="/dashboard/marketplace/tree.png" alt="tree" />
          </div>
          <div class="tw-flex tw-items-center tw- tw-justify-between">
            <div class="tw-text-[#BD5345] tw-font-semibold tw-text-sm">
              Purchased:
            </div>
            <div class="default-text-color tw-text-sm tw-font-semibold">10</div>
          </div>
        </div>
      </nuxt-link> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters("marketplace", ["profile"]),
  },
  methods: {
    async getData() {
      await this.$store.dispatch("marketplace/getProfileUser");
    },
  },
};
</script>

<style lang="scss" scoped>
.text-shadow-2 {
  color: white;
  text-shadow: 2px 2px 0 #741e00, 2px -2px 0 #741e00, -2px 2px 0 #741e00,
    -2px -2px 0 #741e00, 2px 0px 0 #741e00, 0px 2px 0 #741e00,
    -2px 0px 0 #741e00, 0px -2px 0 #741e00;
}

.marketplace-items {
  border: 4px solid transparent;
}

.marketplace-items:hover {
  border: 4px solid #bd5345;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
