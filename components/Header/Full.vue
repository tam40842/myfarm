<template>
  <div v-if="!$vuetify.breakpoint.mobile" class="my-2">
    <!-- <v-menu
      v-if="user && user.access_token"
      class="menu-cls"
      max-width="228px"
      z-index="0"
      nudge-top="10"
      :close-on-content-click="false"
      disable-keys
      v-model="menu"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <div
          v-bind="attrs"
          v-on="on"
          class="
            menu-btn
            tw-absolute tw-mx-auto tw-relative
            connect-btn
            pointer
            d-flex
            align-center
            justify-center
          "
        >
          <div class="d-flex align-center flex-row">
            <v-avatar color="primary" size="40">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
              ></v-img>
            </v-avatar>
            <span class="mx-1 font white--text tw-text-xs">
              {{ truncateAddress(metaMask.account, "address") }}</span
            >
            <svg
              :class="menu ? '' : 'flipVertical'"
              class="mx-2"
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 9L9 1.5L16.5 9"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </template>
      <div class="farm-menu">
        <v-list three-line color="#BE4924">
          <v-list-item>
            <div class="d-flex flex-column">
              <span class="font">Wallet's address</span>
              <v-text-field
                color="#6f123a"
                dark
                class="rounded-lg outlined"
                dense
                :value="truncateAddress(metaMask.account, 'address')"
                hide-details
                filled
                rounded
                outlined
                @click:append-outer="copyText(metaMask.account)"
                append-outer-icon="mdi-content-copy white--text"
              >
              </v-text-field>
              <span class="font mt-3">Ref link</span>
              <v-text-field
                color="#6f123a"
                dark
                class="rounded-lg outlined"
                :value="truncateAddress(refLinkValue, 'refLink')"
                @click:append-outer="copyText(refLinkValue)"
                dense
                hide-details
                filled
                rounded
                outlined
                append-outer-icon="mdi-content-copy white--text"
              >
              </v-text-field>
              <v-btn
                class="v-text-btn mt-8 mx-auto white--text text-capitalize"
                block
                shaped
                rounded-lg
                depressed
                @click="logout"
                color="#b24128"
              >
                Sign Out
              </v-btn>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </v-menu> -->

    <!-- <v-dialog v-else hide-overlay v-model="connectDialog" max-width="780">
      <template v-slot:activator="{ on, attrs }">
        <ConnectBtn
          v-bind="attrs"
          v-on="on"
          class="tw-mx-auto tw-relative connect-btn pointer"
        />
      </template>
      <v-img
        max-width="778.85px"
        max-height="500.41px"
        contain
        src="/img/connectDialog.png"
      >
        <v-row>
          <v-col align-self="start" align="center">
            <v-img max-width="583px" contain src="/img/connectHead.png">
              <v-row no-gutters class="full-h">
                <v-col align-self="center" align="center">
                  <GreenBarConnect />
                  <h2 class="connectHead mx-auto">Connect your wallet</h2>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
        <v-row no-gutters class="my-10">
          <v-col align-self="center" align="center">
            <v-img
              class="tw-mx-auto my-3"
              src="/svgs/StandBlock.svg"
              lazy-src
              @click="connectMetaMask"
              contain
              max-width="423px"
              max-height="119px"
            >
              <div class="d-flex full-h justify-center flex-column pointer">
                For Temporary Placing Img
                <v-img
                  class="tw-mx-auto my-3"
                  src="/img/socialIcons/Metamask.png"
                  contain
                  max-width="211px"
                  max-height="44.71px"
                ></v-img>
              </div>
            </v-img>
            <v-btn
              text
              @click.stop="connectDialog = false"
              class="
                my-5
                tw-text-2xl
                white--text
                font-weight-medium
                text-capitalize
                custom-font
              "
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-img>
    </v-dialog> -->

    <v-img
      max-width="1183px"
      class="mx-auto d-flex full-h align-center"
      position="center center"
      contain
      alt="header"
      src="/banners/header-bg.png"
      lazy-src="/banners/header-bg.png"
    >
      <v-img
        src="/banners/header-inner.png"
        lazy-src="/banners/header-inner.png"
        max-width="950px"
        contain
        position="center center"
        class="mx-auto d-flex align-center tw-z-0"
      >
        <div class="d-flex align-center justify-space-between">
          <HeaderLogo class="tw-z-40 pointer" />

          <div class="d-flex align-center flex-nowrap tw-gap-2 tw-z-10">
            <!-- <v-btn
              v-for="(items, index) in headerMenu"
              :key="`${items}-${index}`"
              :to="items.to"
              target="_blank"
              text
            >
              <h3 class="menu-text">{{ items.name }}</h3>
            </v-btn> -->

            <v-btn to="/marketplace" text>
              <h3 class="menu-text">Marketplace</h3>
            </v-btn>

            <a href="/whitepaper.pdf" target="_blank" text>
              <h3 class="menu-text">Whitepaper</h3>
            </a>

            <v-btn to="/dashboard" text v-if="user">
              <h3 class="menu-text">Dashboard</h3>
            </v-btn>
          </div>

          <MetamaskConnect />
        </div>
      </v-img>
    </v-img>
  </div>
</template>

<script>
import ConnectBtn from "@/assets/svg/ConnectButton.svg";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ConnectBtn,
  },
  data() {
    return {
      headerMenu: [
        {
          name: "Marketplace",
          to: "/marketplace",
        },
        {
          name: "Whitepaper",
          to: "/whitepaper.pdf",
        },
        {
          name: "Dashboard",
          to: "/dashboard",
        },
      ],
      connectDialog: false,
      menu: false,
      metaMaskLoggedIn: false,
      metaMask: {
        account: null,
      },
      account: "",
      accounts: [],
      refLinkValue: `${process.env.VUE_APP_API_URL}?ref=${
        this.metaMask ? this.metaMask.account : ""
      }`,
    };
  },
  watch: {},
  mounted() {
    if (localStorage && localStorage.getItem("mft_user")) {
      const user = JSON.parse(localStorage.getItem("mft_user"));
      this.metaMask.account = user.user.public_address;
      this.metaMaskLoggedIn = true;
    }
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    copyText(val) {
      if (val) {
        navigator.clipboard.writeText(val);
      }
    },
    truncateAddress(val, type) {
      if (val && type == "address") {
        let first4Char = val.slice(0, 5);
        let last4Char = val.slice(-4);
        let shortText = first4Char + "....." + last4Char;
        return shortText;
      }
      if (val && type == "refLink") {
        let first4Char = val.slice(0, 17);
        let shortText = first4Char + ".....";
        return shortText;
      }
    },
    validateMetaMask() {
      if (typeof window.ethereum !== "undefined") {
        console.log("ismetamask: ", ethereum);
      } else {
        // Todo: Toast
        alert("MetaMask not installed.");
        return false;
      }
    },
    async connectMetaMask() {
      this.validateMetaMask();
      // This will start the metamask extension.
      this.accounts = await ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (response) => {
          // We currently only ever provide a single account,
          // but the array gives us some room to grow.
          if (response && response.length >= 0) {
            this.metaMask.account = await response[0];
            console.log("response", this.metaMask);
            if (this.metaMask.account) {
              this.metaMaskLoggedIn = true;
              await this.$store.dispatch(
                "auth/checkExistUser",
                this.metaMask.account
              );
              // making refLink
              this.refLinkValue = `${process.env.VUE_APP_API_URL}?ref=${this.metaMask.account}`;
            }
            this.connectDialog = false;
          }
        })
        .catch((error) => {
          if (error && error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            alert("Please connect to MetaMask.");
            console.log("Please connect to MetaMask.");
          } else {
            console.error(error);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.header-logo {
  margin: auto;
  bottom: 120px;
  right: 452px;
}
// .menu-cls {
//   top: 140 !important;
//   z-index: 0 !important;
// }
.menu-text {
  // position: relative;
  // display: flex;
  // flex-direction: row;
  // justify-content: space-evenly;
  // max-width: 600px;
  // top: 210px;
  // right: 50px;
  // z-index: 1;
  font-family: Mitr;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: capitalize;
  color: white;
  // -webkit-text-stroke: 1px #741E00;
  text-shadow: -2px -2px 0 #741e00, 2px -2px 0 #741e00, -2px 2px 0 #741e00,
    2px 2px 0 #741e00;
}
.connect-btn {
  top: 149px;
  left: 379px;
  z-index: 1;
}
.header-bar {
  position: relative;
  top: 85px;
}
// Dialog
.connectHead {
  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 63px;
  /* identical to box height */
  color: #000000;
  display: block;
  position: absolute;
  left: 90px;
  bottom: 50px;
}
.v-menu__content {
  box-shadow: none !important;
}
.menu-btn {
  background-image: url("@/static/img/menu-btn.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 233.17px;
  height: 80.9px;
}
.farm-menu {
  .v-list {
    border: 5px solid #6f123a !important;
    box-sizing: border-box;
    border-radius: 0px 0px 20px 20px;
  }
  .outlined {
    .v-text-field--outlined >>> fieldset {
      border: 1px solid #6f123a !important;
    }
  }
  .font {
    font-family: Mitr;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height */
    color: #ff9e3c;
  }
}
</style>
