<template>
  <!-- <div>
        <button v-on:click="getWeb3()" v-if="!address">Click de ket noi metamask</button>
        <div v-else>Địa chỉ ví: {{ address }}</div>
    </div> -->

  <div>
    <div class="tw-container header-main tw-h-36 tw-max-w-full tw-py-7">
      <!-- header -->
      <HeaderFull />

      <div>
        <Logo />

        <h3
          class="head-text-main tw-text-center tw-max-w-xl tw-mx-auto tw-py-2"
        >
          Revolutionary play-to-earn product for daily passive profit.
        </h3>

        <div
          :class="$vuetify.breakpoint.mobile ? 'tw-flex-wrap' : ''"
          class="tw-flex tw-max-w-2xl tw-mx-auto tw-gap-x-7 tw-my-0"
        >
          <WoodenBlocksButton :text="'Airdrop'" class="tw-mx-auto pointer" />

        </div>

        <div
          :class="$vuetify.breakpoint.mobile ? 'tw-flex-wrap' : ''"
          class="tw-flex tw-max-w-2xl tw-mx-auto tw-gap-x-7 tw-my-8"
        >


          <WoodenBlocksButton :text="'Play now'" class="tw-mx-auto pointer" />

          <WoodenBlocksButton :text="'Buy MFT'" class="tw-mx-auto pointer" />
        </div>


      </div>
    </div>

    <div class="second-block">
      <div
        class="max-wd tw-mx-auto"
        :class="$vuetify.breakpoint.mobile ? 'tw-py-7' : 'tw-py-20'"
      >
        <HeaderMidBanner class="mb-10" :text="'Become a farmer in 3 steps'" />

        <v-row no-gutters dense>
          <v-col
            :align="$vuetify.breakpoint.mobile ? 'center' : 'start'"
            align-self="center"
          >
            <!-- <WoodenBlocksStandBlocks v-if="!$vuetify.breakpoint.mobile" /> -->

            <v-img
              v-if="!$vuetify.breakpoint.mobile"
              contain
              class="pointer mx-auto"
              src="/img/buildFarm.png"
              lazy-src="/img/buildFarm.png"
              width="450"
              height="450"
            />

            <v-img
              v-else
              class="pointer"
              contain
              src="/img/buildFarm.png"
              lazy-src="/img/buildFarm.png"
              width="251"
              height="292"
            />
          </v-col>
          <v-col
            align="start"
            :alignSelf="$vuetify.breakpoint.mobile ? 'end' : 'start'"
          >
            <v-img
              contain
              class="my-5"
              src="/img/tractor.png"
              lazy-src="/img/tractor.png"
              width="509"
              height="509"
            />
          </v-col>
        </v-row>
      </div>
    </div>

    <div
      class="third-block tw-static"
      :style="$vuetify.breakpoint.mobile ? 'height: 650px' : ''"
    >
      <div class="tw-mx-auto">
        <div v-if="!$vuetify.breakpoint.mobile">
          <v-img
            class="leafs-position tw-mx-auto"
            lazy-src="/img/leafs1.png"
            src="/img/leafs1.png"
          >
            <v-img
              class="tw-mx-auto"
              lazy-src="/img/leafs2.png"
              src="/img/leafs2.png"
            ></v-img>
          </v-img>
        </div>

        <div v-else>
          <v-img
            :class="$vuetify.breakpoint.mobile ? '' : 'tree-position'"
            src="/img/mobLeafs.png"
            contain
            class="tw-bottom-11"
            position="top"
          >
            <v-img
              :class="$vuetify.breakpoint.mobile ? '' : 'tree-position'"
              src="/img/mobTree.png"
              style="z-index: -2"
              contain
              class="d-flex"
              position="center"
            >
              <!-- Tokenomics Blog -->
              <!-- <div class="mft-tokenomics mx-auto"></div> -->

              <!-- Finance -->
              <!-- <div class="mft-mob-finance"> -->

              <!-- </div> -->

              <div
                class="d-flex flex-column justify-center align-center tw-my-20"
              >
                <v-img
                  src="/img/tokenomics.png"
                  lazy-src="/img/tokenomics.png"
                  position="center"
                  height="274px"
                  max-width="368px"
                  contain
                  class="tw-my-2"
                />

                <v-img
                  src="/img/mobFinance.png"
                  class="tw-my-8"
                  lazy-src="/img/mobFinance.png"
                  contain
                  width="343px"
                />
              </div>
            </v-img>
          </v-img>
        </div>

        <!-- <Tree class="tree-position" /> -->

        <WoodenBlocksBig
          v-if="!$vuetify.breakpoint.mobile"
          class="tw-mx-auto tw-relative"
          style="bottom: 27rem"
        />
      </div>

      <div v-if="!$vuetify.breakpoint.mobile" class="mft-finance mx-auto"></div>
    </div>
    <div class="fourth-block">
      <v-img
        class="clouds-pos"
        src="/img/clouds.png"
        lazy-src="/img/clouds.png"
      ></v-img>

      <!-- <HeaderSmallBanner :text="'Roadmap'" /> -->

      <div class="mx-5">
        <div class="roadmap-banner mx-auto"></div>
      </div>

      <v-container>
        <v-row
          class="tw-mx-auto tw-justify-center"
          align-self="center"
          no-gutters
        >
          <v-col
            class="max-wd"
            align="center"
            cols="4"
            sm="6"
            md="6"
            lg="4"
            xl="4"
            v-for="(blocks, index) in roadmapBlocks"
            :key="index"
          >
            <WoodenBlocksRoadmapBlocks :content="blocks" :index="index" />
          </v-col>
        </v-row>
      </v-container>

      <div class="tw-mt-20">
        <HeaderSmallBanner :text="'Team'" />

        <v-container class="max-wd">
          <v-row class="max-wd" justify="center" no-gutters>
            <v-col
              align-self="center"
              align="center"
              cols="6"
              sm="6"
              md="6"
              lg="3"
              xl="3"
              v-for="(blocks, index) in frameBlocks"
              :key="`${index}-fb`"
            >
              <WoodenBlocksFrame
                :name="blocks.name"
                :title="blocks.title"
                :imgURL="blocks.imgURL"
                class="tw-m-5"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>

      <div>
        <HeaderLargeBanner
          :class="$vuetify.breakpoint.mobile ? 'my-3' : 'my-12'"
          :text="'Partners & Investors'"
        />
        <Partners />
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import GreenLeaves from "@/assets/svg/leaves.svg";
import GreenLeaves2 from "@/assets/svg/leaves-2.svg";
import Tree from "@/assets/svg/tree.svg";
import RoadmapBlocks from "@/assets/svg/Roadmap-blocks.svg";
import LargeWoodenBlock from "@/assets/svg/LargeWoodenBlock.svg";

export default {
  layouts: "default",
  name: "IndexPage",
  components: {
    Tree,
    RoadmapBlocks,
    LargeWoodenBlock,
    GreenLeaves,
    GreenLeaves2,
  },
  data() {
    return {
      web3: null,
      accounts: [],
      address: null,
      roadmapBlocks: [
        {
          id: 1,
          subtitle: "Q4 - 2021",
          items: [
            "Martket Research, Brainstorming & Team Formation",
            "Graphic designs for My Farm",
            "Smart Contract Development",
          ],
        },
        {
          id: 2,
          subtitle: "Q1 - 2022",
          items: [
            "Private Sale, Public Sale",
            "Testnet Launch",
            "Marketing & Partnership",
            "Launch Game ",
          ],
        },
        {
          id: 3,
          subtitle: "Q2 - 2022",
          items: [
            "Marketing, Partnership and Onboarding more users",
            "Game version 2 Release",
            "Add more mini-games",
            "Reach 100,000 users",
            "Marketplace Launch",
          ],
        },
        {
          id: 4,
          subtitle: "Q3 - 2022",
          items: [
            "Launch of full My Farm Metaverse",
            "Graphics and user experience improvements",
            "Marketing, Partnership, and Onboarding more users",
          ],
        },
        {
          id: 5,
          subtitle: "Q4 - 2022",
          items: [
            "Launch of full My Farm Game",
            "Reach 500,000 users",
            "Game version 3. Release: 3D, player avatar creation & Multiplayer",
            "Breeding room and campaign",
          ],
        },
        {
          id: 6,
          subtitle: "Q2 - 2023",
          items: [
            "Game VR",
            "Reach 1,000,000 users",
            "Grown in more than 20 countries",
          ],
        },
      ],
      frameBlocks: [
        {
          name: "James Chichester",
          title: "CEO",
          imgURL: "/img/team/CEO-JamesChichester.jpg",
        },
        {
          name: "Jung Ho Seok",
          title: "CTO",
          imgURL: "/img/team/CTO-Jung Ho Seok.jpg",
        },
        {
          name: "Caroline Castle",
          title: "CFO",
          imgURL: "/img/team/CFO- Caroline Castle.jpg",
        },
        {
          name: "Paul McKellen",
          title: "CMO-Sir",
          imgURL: "/img/team/CMO-Sir Paul McKellen.jpg",
        },
        {
          name: "Emily Jackson",
          title: "Design Manager",
          imgURL: "/img/team/Design Manager- Emily Jackson.jpg",
        },
        {
          name: "Mary Schooling",
          title: "Media Manager",
          imgURL: "/img/team/Media Manager- Mary Schooling.jpg",
        },
        {
          name: "Baek Sung Hyun",
          title: "VR 3D Manager",
          imgURL: "/img/team/VR 3D Manager-Baek Sung Hyun.jpg",
        },
        {
          name: "William Lee",
          title: "Blockchain Dev Manager",
          imgURL: "/img/team/Blockchain Dev Manager- William Lee.jpg",
        },
        {
          name: "Joseph Johnson",
          title: "Advisior",
          imgURL: "/img/team/Advisior- Joseph Johnson.jpg",
        },
        {
          name: "Ahmed Hassan Zewait",
          title: "Advisior 2",
          imgURL: "/img/team/Advisior 2- Ahmed Hassan Zewait.jpg",
        },
      ],
    };
  },
  methods: {
    async getWeb3() {
      if (window.ethereum) {
        this.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          this.accounts = await this.web3.eth.getAccounts();
          this.address = this.accounts[0];
        } catch (error) {
          console.error(error);
        }
      } else if (window.web3) {
        console.log("Injected web3 detected.", window.web3);
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.max-wd {
  max-width: 1440px !important;
}

.align-tx {
  display: block;
}

.head-text-main {
  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 47px;
  text-align: center;

  color: #000000;
}

.header-main {
  background-image: url("../static/img/bg-1.png");
  background-size: cover;
  height: 1120px;
  width: 100%;
  object-fit: cover;
}

.second-block {
  background-image: url("../static/img/bg-2.png");
  background-size: cover;
  height: 1120px;
  width: 100%;
  object-fit: cover;
}

.third-block {
  background: linear-gradient(180deg, #ccecfb 0%, #76ceff 100%);
  display: block;
  position: relative;
  z-index: 0;
  height: 2031px;
}

.third-block::after {
  @media screen and (min-width: 1440px) {
    content: "";
    background-image: url("../static/img/tree.png");
    // background-size: contain;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}

.fourth-block {
  background-image: url("../static/img/bg-4.png");
  height: fit-content;
  background-size: cover;
  object-fit: cover;
}

.leafs-position {
  position: relative;
  // bottom: 80px;
  bottom: 100px;
  z-index: 1;

  @media screen and (max-width: 600px) {
    bottom: 50px !important;
  }
}

// .leafs2-position {
//   position: relative;
//   // bottom: 550px;
//   bottom: 720px;
//   z-index: 2;

//   @media screen and (max-width: 600px) {
//     bottom: 210px !important;
//   }
// }

.max-wd {
  max-width: 1440px;
}

// .tree-position {
//   position: relative !important;
//   // bottom: 890px;
//   // bottom: 1100px;
//   z-index: 0;
// }

.clouds-pos {
  position: relative;
  bottom: 155px;

  @media screen and (max-width: 600px) {
    bottom: 50px !important;
  }
}

.partners-woodblock {
  background-image: url("../static/img/partners-woodblock.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 824px;
  max-width: 1271px;
  // display: flex;
  // flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.mft-finance {
  background-image: url("../static/img/Finance.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  bottom: 25rem;
  max-width: 1165.45px;
  height: 815.6px;

  @media (min-width: 600) and (max-width: 1920px) {
    top: 650px !important;
    position: relative;
  }
}

.mft-mob-finance {
  background-image: url("../static/img/mobFinance.png");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 100%;
  max-width: 343px;
}

.mft-tokenomics {
  background-image: url("../static/img/tokenomics.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
  max-width: 1180px;
  margin: 5rem 0px;
  height: 813px;
}

.roadmap-banner {
  background-image: url("../static/img/Roadmap.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 132px;
  max-width: 600px;
}

.footer-bg {
  height: 900px;
  background: #2a7218;
  position: absolute;

  width: 100%;
  z-index: -1;
}
</style>
