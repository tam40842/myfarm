<template>
  <v-col v-if="column" align="center">
    <span class="subtitle-text">Rank reward</span>

    <div
      class="d-flex flex-row align-center justify-space-between md:tw-h-40 tw-my-10 md:tw-my-3 tw-gap-2"
    >
      <div class="reward-bg d-flex flex-column align-center justify-center">
        <v-img
          class="tw-w-[36px] md:tw-w-[68px] md:tw-max-h-16"
          src="/dashboard/tickets.png"
        ></v-img>

        <span class="white--text tw-font-medium">x{{ rankTicket }}</span>
      </div>

      <div class="rank-reward d-flex flex-column align-center justify-center">
        <span
          class="white--text heading-fm tw-font-medium tw-text-base md:tw-text-2xl"
          >{{ rankReward }}</span
        >

        <v-img
          max-height="32px"
          width="32px"
          class="my-2"
          src="/dashboard/mft-sm.png"
        ></v-img>
      </div>
    </div>

    <DashboardSmButton :classes="''" :text="'Claim'" />
  </v-col>

  <div class="d-flex" v-else>
    <div class="d-flex flex-row align-center justify-space-between my-3">
      <span class="subtitle-text mr-5">Rank reward</span>

      <div class="reward-sm-bg d-flex flex-column align-center justify-center">
        <v-img
          max-height="32px"
          width="32px"
          contain
          src="/dashboard/tickets.png"
        ></v-img>

        <span class="white--text tw-font-medium">x{{ nextRankTicket }}</span>
      </div>

      <div class="reward-sm-bg d-flex flex-column align-center justify-center">
        <span class="white--text heading-fm tw-font-medium tw-text-xs">{{
          nextRankReward
        }}</span>

        <v-img
          max-height="16px"
          width="16px"
          class="my-2"
          src="/dashboard/mft-sm.png"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "column",
    "row",
    "rankTicket",
    "rankReward",
    "nextRankTicket",
    "nextRankReward",
  ],
};
</script>

<style lang="scss" scoped>
.reward-bg {
  height: 120px;
  width: 120px;
  border-radius: 30px;
  background: #bc4a4b;
  margin: 5px;
}

.rank-reward {
  height: 120px;
  width: 120px;
  border-radius: 30px;
  background: #bc4a4b;
  margin: 5px;
}

.reward-sm-bg {
  height: 64px;
  width: 64px;
  border-radius: 10px;
  background: #bc4a4b;
  margin: 5px;
}

// Mobile: width < 740px
@media only screen and (max-width: 46.1875em) {
  .reward-bg {
    width: unset;
    height: unset;
    padding: 8px 21px;
    border-radius: 12px;
    margin: 0;
  }

  .rank-reward {
    width: unset;
    height: unset;
    padding: 2px 12px;
    border-radius: 12px;
    margin: 0;
  }
}
</style>
