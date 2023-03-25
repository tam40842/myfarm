<template>
  <div>
    <div
      class="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-[100vh] tw-bg-[#333333b0] tw-z-[999]"
      v-if="$vuetify.breakpoint.mobile && drawer"
    >
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-8">
        <div>
          <div
            class="tw-w-[48px] tw-mb-4 tw-mx-auto"
            @click.stop="drawer = !drawer"
          >
            <v-img
              src="/menu/menu-close.svg"
              class="test"
              alt="menu-close"
            ></v-img>
          </div>
          <div
            @click="drawer = !drawer"
            v-for="(data, i) of menuNavigation"
            :key="i"
            class="btn-exact-navigation"
          >
            <nuxt-link
              :to="`/dashboard/${data.to}`"
              class="tw-flex tw-flex-col tw-relative tw-mb-4"
            >
              <v-img src="/menu/frame-dashboard.svg"></v-img>
              <div
                class="tw-absolute tw-top-[50%] tw-left-[50%] tw-text-xl tw-text-white tw-flex tw-items-center tw-gap-2"
                style="transform: translate(-50%, -50%)"
              >
                <v-img :src="`/menu/icon/${data.icon}.svg`"></v-img>
                <span
                  class="tw-text-[#882900] tw-font-semibold tw-whitespace-nowrap"
                  >{{ data.name }}</span
                >
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuNavigation: [
        { id: 1, name: "Dashboard", icon: "dashboard", to: "main" },
        { id: 2, name: "Marketplace", icon: "marketplace", to: "marketplace" },
        { id: 3, name: "MFT Swap", icon: "swap", to: "mft-swap" },
        { id: 3, name: "Spin & Win", icon: "dashboard", to: "spin-win" },
        { id: 4, name: "Members", icon: "members", to: "members" },
        {
          id: 5,
          name: "Transactions",
          icon: "transactions",
          to: "transactions",
        },
        { id: 6, name: "MFT Staking", icon: "staking", to: "mft-staking" },
        { id: 6, name: "MFT Lending", icon: "lending", to: "mft-lending" },
      ],
    };
  },
  created() {
    this.$nuxt.$on("open-contact-form", () => {
      this.drawer = !this.drawer;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("open-contact-form");
  },
};
</script>

<style lang="scss" scoped>
.btn-exact-navigation .nuxt-link-exact-active span {
  color: #fff;
}
</style>
