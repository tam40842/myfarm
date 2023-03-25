<template>
  <div>
    <div v-if="!$vuetify.breakpoint.mobile">
      <h1
        class="custom-font tw-text-3xl btn-text-color tw-font-black text-center my-2"
      >
        Transactions
      </h1>
      <v-tabs
        background-color="transparent"
        center-active
        color="#bd5345"
        v-model="tab"
        height="40px"
        hide-slider
        class="tw-text-base mx-auto"
        active-class="active-tab-bg text-white"
      >
        <v-tab @click="changeTagUsdt()" id="symbol-id">USDT</v-tab>
        <v-tab @click="changeTagMft()">MFT</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item background-color="currentColor">
          <DashboardTransactionTable
            :listTransactionUsdt="listTransactionUsdt"
            :tagUsdt="tagUsdt"
          />
        </v-tab-item>
        <v-tab-item background-color="currentColor">
          <DashboardTransactionTable
            :listTransactionMft="listTransactionMft"
            :tagMft="tagMft"
          />
        </v-tab-item>
      </v-tabs-items>
    </div>
    <div class="tw-px-4 tw-pt-10 tw-pb-16" v-else>
      <h1
        class="custom-font tw-text-3xl btn-text-color tw-font-black text-center mb-4"
      >
        Transactions
      </h1>
      <v-tabs
        background-color="transparent"
        center-active
        color="#bd5345"
        v-model="tab"
        height="40px"
        hide-slider
        class="tw-text-base mx-auto mb-4"
        active-class="active-tab-bg text-white"
      >
        <v-tab @click="changeTagUsdt()" id="symbol-id">USDT</v-tab>
        <v-tab @click="changeTagMft()">MFT</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item background-color="currentColor">
          <DashboardTransactionMobile
            :listTransactionUsdt="listTransactionUsdt"
            :tagUsdt="tagUsdt"
          />
        </v-tab-item>
        <v-tab-item background-color="currentColor">
          <DashboardTransactionMobile
            :listTransactionMft="listTransactionMft"
            :tagMft="tagMft"
          />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedTab: 0,
      listTransactionUsdt: [],
      listTransactionMft: [],
      tagUsdt: false,
      tagMft: false,
      tab: null,
      e1: "All",
      items: ["All", "Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  mounted() {
    this.changeTagUsdt();
    this.changeTagMft();
    $(document).ready(function () {
      $("#symbol-id").trigger("click");
    });
  },
  computed: {
    ...mapGetters("transaction", ["transaction_usdt", "transaction_mft"]),
  },
  methods: {
    async changeTagUsdt() {
      this.tagUsdt = true;
      this.tagMft = false;
      await this.$store.dispatch("transaction/getDataTransactionUsdt");
      this.listTransactionUsdt = this.transaction_usdt.type;
    },
    async changeTagMft() {
      this.tagMft = true;
      this.tagUsdt = false;
      await this.$store.dispatch("transaction/getDataTransactionMft");
      this.listTransactionMft = this.transaction_mft.type;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .theme--light.v-tabs-items {
  background-color: inherit !important;
}
::v-deep .v-slide-group__content {
  justify-content: center !important;
}
.v-tab {
  font-size: 1rem !important;
}
.active-tab-bg {
  background-color: #bd5345;
  color: white !important;
  border-radius: 20px;
}

.transaction-icon {
  color: white !important;
}
</style>
