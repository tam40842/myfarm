<template>
  <div>
    <v-select
      v-model="selectUsdt"
      :items="listTransactionUsdt"
      item-value="id"
      item-text="name"
      dense
      solo
      menu-props="auto"
      hide-details
      background-color="#BD5345"
      class="transactions-select mb-4"
      @change="detailTransactionUsdt"
      v-if="tagUsdt"
    >
      <template #item="{ item }">
        <span style="color: #882900">{{ item.name }}</span>
      </template>
      <template v-slot:append>
        <v-icon class="transaction-icon">mdi-chevron-down</v-icon>
      </template>
    </v-select>
    <v-select
      v-model="selectMft"
      :items="listTransactionMft"
      item-value="id"
      item-text="name"
      dense
      solo
      menu-props="auto"
      hide-details
      background-color="#BD5345"
      class="transactions-select mb-4"
      @change="detailTransactionMft"
      v-if="tagMft"
    >
      <template #item="{ item }">
        <span style="color: #882900">{{ item.name }}</span>
      </template>
      <template v-slot:append>
        <v-icon class="transaction-icon">mdi-chevron-down</v-icon>
      </template>
    </v-select>
    <div
      class="tw-overflow-auto"
      style="max-height: 502px"
      v-if="tagUsdt && transactionsUsdt != null"
    >
      <v-list-item
        three-line
        v-for="(item, index) in transactionsUsdt"
        :key="index"
        class="custom-list"
      >
        <v-list-item-content>
          <v-list-item-title
            style="font-family: Roboto, sans-serif !important; font-weight: 400"
            class="default-text-color"
            >{{ toDate(item.created_at) }}</v-list-item-title
          >
          <v-list-item-subtitle class="default-text-color tw-text-base">
            <div class="d-flex align-center justify-space-between">
              <span>{{ item.action }}</span>

              <!-- <span v-if="item && item.subDetail" class="px-5">{{
                item.subDetail
              }}</span> -->
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="tw-text-base">
          <v-list-item-action-text
            class="tw-text-base tw-font-semibold"
            :class="item.amount >= 0 ? 'green--text' : 'error--text'"
          >
            {{ item.amount >= 0 ? "+" : "" }}{{ item.amount }}
            {{ item.symbol }}</v-list-item-action-text
          >
        </v-list-item-action>
      </v-list-item>
    </div>
    <div
      class="tw-overflow-auto"
      style="max-height: 502px"
      v-if="tagMft && transactionsMft != null"
    >
      <v-list-item
        three-line
        v-for="(item, index) in transactionsMft"
        :key="index"
        class="custom-list"
      >
        <v-list-item-content>
          <v-list-item-title
            style="font-family: Roboto, sans-serif !important; font-weight: 400"
            class="default-text-color"
            >{{ toDate(item.created_at) }}</v-list-item-title
          >
          <v-list-item-subtitle class="default-text-color tw-text-base">
            <div class="d-flex align-center justify-space-between">
              <span>{{ item.action }}</span>

              <!-- <span v-if="item && item.subDetail" class="px-5">{{
                item.subDetail
              }}</span> -->
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="tw-text-base">
          <v-list-item-action-text
            class="tw-text-base tw-font-semibold"
            :class="item.amount >= 0 ? 'green--text' : 'error--text'"
          >
            {{ item.amount >= 0 ? "+" : "" }}{{ item.amount }}
            {{ item.symbol }}</v-list-item-action-text
          >
        </v-list-item-action>
      </v-list-item>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      url_base: process.env.link_api,
      selectUsdt: null,
      selectMft: null,
      transactionsUsdt: null,
      transactionsMft: null,
    };
  },
  watch: {
    listTransactionUsdt(v) {
      this.selectUsdt = v[0].id;
    },
    listTransactionMft(v) {
      this.selectMft = v[0].id;
    },
  },
  mounted() {
    this.detailAllUsdt();
    this.detailAllMft();
  },
  props: ["listTransactionUsdt", "tagUsdt", "listTransactionMft", "tagMft"],
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    toDate(date) {
      return moment(date).utc().format("MM/DD/YYYY hh:mm A");
    },
    detailTransactionUsdt() {
      const config = {
        headers: {
          Authorization: `bearer ${this.user.access_token}`,
        },
      };
      axios
        .get(this.url_base + "/api/transactions/" + this.selectUsdt, config)
        .then((response) => {
          this.transactionsUsdt = response.data.results;
        });
    },
    detailTransactionMft(id) {
      const config = {
        headers: {
          Authorization: `bearer ${this.user.access_token}`,
        },
      };
      axios
        .get(this.url_base + "/api/transactions/" + this.selectMft, config)
        .then((response) => {
          this.transactionsMft = response.data.results;
        });
    },

    detailAllUsdt() {
      const config = {
        headers: {
          Authorization: `bearer ${this.user.access_token}`,
        },
      };
      axios
        .get(this.url_base + "/api/transactions?symbol=usdt", config)
        .then((response) => {
          this.transactionsUsdt = response.data.results.transaction;
        });
    },
    detailAllMft() {
      const config = {
        headers: {
          Authorization: `bearer ${this.user.access_token}`,
        },
      };
      axios
        .get(this.url_base + "/api/transactions?symbol=mft", config)
        .then((response) => {
          this.transactionsMft = response.data.results.transaction;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction-icon {
  color: white !important;
}
</style>
