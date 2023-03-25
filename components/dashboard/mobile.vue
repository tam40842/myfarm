<template>
  <v-container class="tw-h-full">
    <div class="d-flex flex-column align-start">
      <div class="tw-relative" style="width: 100%">
        <v-img width="100%" src="/menu/frame-balance.svg"> </v-img>
        <div
          class=""
          style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          "
        >
          <h3 class="font-weight-bold heading-fm text-center mb-2">
            MFT Balance:
          </h3>
          <div class="d-flex">
            <span class="heading-fm tw-text-xl" v-if="balance != null">{{ balance }} </span>
            <v-img
              src="/dashboard/mft-sm.png"
              class="mx-2"
              position="left"
              height="36px"
              contain
            ></v-img>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row tw-w-full tw-justify-center btn-wallet-2">
        <nuxt-link
          class="sm-btn d-flex justify-center align-center"
          v-for="(data, i) in balanceBtns"
          :to="`/dashboard/${data.to}`"
          :key="i"
        >
          <span
            class="tw-text-base custom-font tw-font-semibold my-2 mr-2 btn-text-color"
          >
            {{ data.name }}
          </span>
        </nuxt-link>
      </div>

      <!-- <div>
        <v-img
          max-width="345px"
          height="211.8px"
          contain
          class="my-7"
          src="/img/WoodenDashboard.png"
          lazy-src="/img/WoodenDashboard.png"
        >
        </v-img>
      </div> -->
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      balance: null,
      address: "",
      balanceBtns: [
        {
          name: "Deposit",
          class: "",
          isActive: false,
          to: "deposit",
        },
        {
          name: "Withdraw",
          class: "",
          isActive: false,
          to: "withdraw",
        },
        {
          name: "Buy",
          class: "",
          isActive: false,
          to: "buy",
        },
      ],
    };
  },
  created() {
    this.address = localStorage.getItem("add_dress");
  },
  mounted() {
    this.getLiveBalance();
  },
  computed: {
    ...mapGetters("dashboard", ["dashboardAll"]),
  },
  methods: {
    async getLiveBalance() {
      await this.$store.dispatch("dashboard/getDashboardAll");
      this.balance = this.dashboardAll[0].user.live_balance;
    },
  }
};
</script>

<style lang="scss" scoped>
.btn-wallet-2 .nuxt-link-exact-active span {
  color: #fff;
}
</style>
