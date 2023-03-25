<template>
  <div>
    
    <!-- <LargeWoodenBlock class="tw-mx-auto" /> -->

    <v-img
      v-if="$vuetify.breakpoint.mobile"
      src="/img/partners-woodblock.png"
      lazy-src="/img/partners-woodblock.png"
      max-width="345px"
      height="223.76px"
      class="mx-auto tw-mb-24"
      contain
    >
      <v-row
        justify="center"
        class=""
        :class="$vuetify.breakpoint.mdAndUp ? 'tw-p-24 full-h' : 'pa-10'"
        no-gutters
      >
        <v-col
          cols="3"
          align="center"
          align-self="center"
          v-for="(partner, index) in partnerImg"
          :key="index"
        >
          <v-img
            alt="partners"
            max-width="150px"
            max-height="150px"
            class="ma-3"
            :src="partner.img"
            :lazy-src="partner.img"
          ></v-img>
        </v-col>
      </v-row>
    </v-img>

    <div v-else class="mx-5">
      <div class="partners-woodblock mx-auto d-flex tw-mb-32">
        <v-row
          justify="center"
          class=""
          :class="$vuetify.breakpoint.mdAndUp ? 'tw-p-24 full-h' : 'pa-10'"
          no-gutters
        >
          <v-col
            cols="3"
            align="center"
            align-self="center"
            v-for="(partner, index) in partnerImg"
            :key="index"
          >
            <v-img
              alt="partners"
              max-width="150px"
              max-height="150px"
              :src="partner.img"
              :lazy-src="partner.img"
            ></v-img>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnerImg: [
        { img: "/img/partners/MasterVenturesHorizontal.png" },
        { img: "/img/partners/Sparklogo.png" },
        { img: "/img/partners/vendetta.png" },
        { img: "/img/partners/ld.png" },
        // ],
        // partnerImgCol2: [
        { img: "/img/partners/moonwhale.png" },
        { img: "/img/partners/PancakeSwap.png" },
        { img: "/img/partners/poolz.png" },
        { img: "/img/partners/mirabo.png" },
        // ],
        // partnerImgCol3: [
        { img: "/img/partners/genBlock.png" },
        { img: "/img/partners/ngcVenture.png" },
        { img: "/img/partners/signum-capital-logo_transparent.png" },
        { img: "/img/partners/coinGeeko.png" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>