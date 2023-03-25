<template>
  <div class="main-bg full-h py-2">
    <div>
      <HeaderFull />

      <DashboardMobile
        class="px-5"
        style="padding-top: 6rem"
        v-if="$vuetify.breakpoint.mobile"
      />

      <div
        class="d-none d-md-flex align-self-center justify-center full-h"
        v-if="!$vuetify.breakpoint.mobile"
      >
        <v-img
          max-width="1272px"
          src="/img/WoodenDashboard.png"
          lazy-src="/img/WoodenDashboard.png"
          class="d-flex align-center justify-center mx-2"
          contain
        >
          <div
            class="d-flex align-center justify-center"
            style="align-items: center; height: fit-content; align-self: center"
          >
            <div class="dash-items d-flex flex-column">
              <div
                v-if="!$vuetify.breakpoint.mobile"
                class="d-flex flex-column"
              >
                <div>
                  <h3>MFT Balance</h3>
                  <div class="d-flex">
                    <span
                      class="heading-fm tw-text-xl"
                    >{{ balance_user }}</span>

                    <v-img
                      src="/dashboard/mft-sm.png"
                      class="mx-2"
                      position="left"
                      height="36px"
                      contain
                    ></v-img>
                  </div>
                </div>

                <div class="d-flex flex-row btn-wallet">
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
                <a href="https://game.mft.finance" target="_blank">
                  <v-img
                    class="my-5"
                    max-width="267px"
                    lazy-src="/dashboard/myFarm_play.png"
                    src="/dashboard/myFarm_play.png"
                  >
                  </v-img>
                </a>
              </div>

              <v-list flat dense color="transparent">
                <v-list-item-group
                  active-class="white--text"
                  v-model="selectedMenu"
                  color="white"
                >
                  <v-list-item
                    active-class="white--text"
                    :to="item.to"
                    v-for="(item, i) in menuItems"
                    :key="i"
                  >
                    <v-list-item-icon class="mr-3">
                      <component :is="item.icon" />
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title class="btn-text-color">
                        <span
                          class="d-flex align-center tw-text-xl font-weight-bold tw-leading-8"
                          >{{ item.name }}</span
                        >
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>

            <v-img
              max-width="834px"
              src="/dashboard/paper.png"
              lazy-src="/dashboard/paper.png"
              class="d-flex justify-center pa-5"
              contain
            >
              <nuxt-child
                v-if="!$vuetify.breakpoint.mobile && address"
              ></nuxt-child>
            </v-img>
          </div>
        </v-img>
      </div>

      <div class="tw-relative" v-if="$vuetify.breakpoint.mobile">
        <v-img
          src="/menu/paper-2.svg"
          lazy-src="/dashboard/paper.png"
          class="d-flex justify-center"
          contain
        >
          <nuxt-child v-if="$vuetify.breakpoint.mobile && address"></nuxt-child>
        </v-img>
        <div
          class="tw-absolute tw-w-full tw-left-[50%]"
          style="transform: translateX(-50%); bottom: -2%"
        >
          <a href="https://game.mft.finance" target="_blank">
            <v-img
              class="my-5 tw-mx-auto"
              max-width="267px"
              lazy-src="/dashboard/myFarm_play.png"
              src="/dashboard/myFarm_play.png"
              v-if="$vuetify.breakpoint.mobile"
            >
            </v-img>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DashboardIcon from "@/assets/icons/CrownSimple.svg";
import MarketPlaceIcon from "@/assets/icons/Storefront.svg";
import MftSwapIcon from "@/assets/icons/ArrowsCounterClockwise.svg";
import MembersIcon from "@/assets/icons/Users.svg";
import Spin from "@/assets/icons/Spin.svg";
import TransactionsIcon from "@/assets/icons/Notebook.svg";
import MftStakingIcon from "@/assets/icons/Coin.svg";
import MftLendingIcon from "@/assets/icons/CurrencyCircleDollar.svg";
import axios from "axios";

export default {
  middleware({ route, redirect, from }) {

    if (route.path == "/dashboard" || route.path == "/dashboard/") {
      return redirect("/dashboard/main");
    }

    if (
      route.path == "/dashboard/mft-swap" ||
      route.path == "/dashboard/mft-swap/"
    ) {
      return redirect("https://dex.mft.finance");
    }

    if(route.path == "/dashboard/mft-staking" || route.path == "/dashboard/mft-staking/") {
      return redirect("https://dex.mft.finance/pools")
    }

  },
  components: {
    DashboardIcon,
    MarketPlaceIcon,
    MftSwapIcon,
    MembersIcon,
    TransactionsIcon,
    MftLendingIcon,
    MftStakingIcon,
    Spin,
  },
  mounted() {
    this.getDataUser()
  },
  computed: {
    ...mapGetters("user", ["balance_user"]),
  },
  methods: {
    async getDataUser() {
      await this.$store.dispatch("user/getBalance");
    },
  },
  created() {
    this.address = localStorage.getItem("add_dress");
  },
  data() {
    return {
      balance: null,
      address: "",
      selectedMenu: {
        name: "Dashboard",
        icon: "DashboardIcon",
        to: "/dashboard",
        class: "",
      },
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
      menuItems: [
        {
          name: "Dashboard",
          icon: "DashboardIcon",
          to: "/dashboard/main",
          class: "",
        },
        {
          name: "Marketplace",
          icon: "MarketPlaceIcon",
          to: "/dashboard/marketplace",
          class: "",
        },
        {
          name: "MFT Swap",
          icon: "MftSwapIcon",
          to: "/dashboard/mft-swap",
          class: "swap",
        },
        {
          name: "Spin & Win",
          icon: "DashboardIcon",
          to: "/dashboard/spin-win",
          class: "",
        },
        {
          name: "Members",
          icon: "MembersIcon",
          to: "/dashboard/members",
          class: "",
        },
        {
          name: "Transactions",
          icon: "TransactionsIcon",
          to: "/dashboard/transactions",
          class: "",
        },
        {
          name: "MFT Staking",
          icon: "MftStakingIcon",
          to: "/dashboard/mft-staking",
          class: "",
        },
        {
          name: "MFT Lending",
          icon: "MftLendingIcon",
          to: "/dashboard/mft-lending",
          class: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.main-bg {
  background-image: url("../../static/img/bg-1.png");
  background-position: center center;
  background-size: cover;
  min-height: 1024px;
  height: 100%;
  width: 100%;
}
.WoodenDashboard {
  background-image: url("../../static/img/WoodenDashboard.png");
  background-position: center center;
  background-size: cover;
  height: 100%;
  min-height: 825px;
  max-width: 1272px;
  width: 100%;
  margin: auto;
}
// @media (max-width: 300px) and (min-width: 1272px) {
//   .WoodenDashboard {
//     background-image: url("../../static/img/WoodenDashboard.png");
//     background-position: center center;
//     background-size: contain;
//     height: auto;
//     width: 100%;
//   }
// }
.dash-paper {
  background-image: url("../../static/dashboard/paper.png");
  background-size: 100%;
  background-position: center center;
  width: 834px; /* 934 */
  height: 753px;
}
.dash-items {
  max-width: 300px;
  /* Font */
  font-family: Mitr;
  // font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #882900;
}
.heading-fm {
  font-family: "SVN-SAF" !important;
  font-style: normal;
  font-weight: normal;
  /* identical to box height */
  color: #882900;
}
.subtitle-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #b06e49;
}
.v-list-item-group .v-list-item--active {
  background: none;
  background-color: #bd5345;
  border-radius: 24px;
}
.v-list .v-list-item--active {
  .v-list-item__title {
    color: white;
  }
  svg {
    stroke: white !important;
  }
}

.sm-btn {
  background-image: url("../../static/dashboard/smButton.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 124px;
  height: 35px;
}

.text-shadow {
  text-shadow: -2px -2px 0 #741e00, 2px -2px 0 #741e00, -2px 2px 0 #741e00,
    2px 2px 0 #741e00;
  color: white;
}

.sm-btn.lazy {
  background-image: none;
  background-color: #f1f1fa;
}

.btn-wallet .nuxt-link-exact-active span {
  color: #fff;
}
</style>
