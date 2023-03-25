<template>
  <div class="d-flex flex-row align-start my-3">
    <div class="transaction-card-bg">
      <div
        class="d-flex flex-column tw-text-base tw-leading-6 default-text-color"
      >
        <div
          dense
          color="#D6B694"
          style="border-radius: 4% !important; padding: 0px"
        >
          <v-list-item-group
            color="primary"
            v-model="selectedItem"
            v-if="tagUsdt"
          >
            <v-list-item
              v-for="(items, i) in listTransactionUsdt"
              :key="i"
              color="red"
              class="trans-one"
              :class="{ 'active-symbol': i === 0 }"
            >
              <v-list-item-content
                @click="detailTransactionUsdt(items.id)"
                :class="{ 'active-symbol': i === 0 }"
              >
                <v-list-item-title
                  v-text="items.name"
                  class="text-item-name tw-text-[#882900]"
                  @click="detailTransactionUsdt(items.id)"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group
            color="primary"
            v-model="selectedItem"
            v-if="tagMft"
          >
            <v-list-item
              v-for="(items, i) in listTransactionMft"
              :key="i"
              color="red"
              class="trans-one"
              :class="{ 'active-symbol': i === 0 }"
            >
              <v-list-item-content
                @click="detailTransactionMft(items.id)"
                :class="{ 'active-symbol': i === 0 }"
              >
                <v-list-item-title
                  v-text="items.name"
                  class="text-item-name tw-text-[#882900]"
                  @click="detailTransactionMft(items.id)"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>
      </div>
    </div>

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
          <!-- <v-list-item-subtitle class="default-text-color tw-text-base">
            <div class="d-flex align-center justify-space-between">
              <span>{{ item.action }}</span>
            </div>
          </v-list-item-subtitle> -->
          <v-list-item-subtitle class="default-text-color tw-text-base">
            <div class="d-flex align-center justify-space-between">
              <span>{{ item.action }}</span>
            </div>
             <!-- <div v-else class="d-flex align-center justify-space-between">
              <span>{{ item.action }}</span>
            </div> -->
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="tw-text-base">
          <v-list-item-action-text
            class="tw-text-base tw-font-semibold"
            :class="item.amount >= 0 ? 'green--text' : 'error--text'"
            v-if="item.action == 'Withdraw'"
            style="color: red !important;"
          >
            <!-- {{ item.amount >= 0 ? "+" : "" }}{{ item.amount }} -->
            - {{item.amount}}
            {{ item.symbol }}</v-list-item-action-text
          >
          <v-list-item-action-text
            class="tw-text-base tw-font-semibold"
            :class="item.amount >= 0 ? 'green--text' : 'error--text'"
            v-else
          >
            <!-- {{ item.amount >= 0 ? "+" : "" }}{{ item.amount }} -->
            + {{item.amount}}
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
      selectedItem: 0,
      transactionsUsdt: null,
      transactionsMft: null,
    };
  },
  props: ["listTransactionUsdt", "listTransactionMft", "tagUsdt", "tagMft"],
  mounted() {
    this.detailAllUsdt();
    this.detailAllMft();
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    toDate(date) {
      return moment(date).utc().format("MM/DD/YYYY hh:mm A");
    },
    detailTransactionUsdt(id) {
      const config = {
        headers: {
          Authorization: `bearer ${this.user.access_token}`,
        },
      };
      axios
        .get(this.url_base + "/api/transactions/" + id, config)
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
        .get(this.url_base + "/api/transactions/" + id, config)
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
.transaction-card-bg {
  background: #d6b694;
  border-radius: 16px;
  width: 280px;
  max-height: 502px;
}
.transaction-card-heading-bg {
  background: #bd5345;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.custom-list {
  .v-list-item__subtitle {
    * {
      font-size: 1rem;
      color: #882900 !important;
      font-weight: 600;
      font-family: Roboto, sans-serif !important;
    }
  }
  .v-list-item__action-text {
    font-size: 1rem;
    font-family: Roboto, sans-serif !important;
  }
  color: #882900 !important;
  font-family: Roboto, sans-serif !important;
}
.text-item-name {
  color: white;
}
</style>
