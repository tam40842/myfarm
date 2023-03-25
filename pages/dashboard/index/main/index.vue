<template>
  <div class="tw-px-4 tw-pt-10 tw-pb-16">
    <div style="overflow: auto" v-if="!$vuetify.breakpoint.mobile">
      <div v-for="(data, index) in dashboardAll" :key="index">
        <div class="d-flex flex-column btn-text-color text-center">
          <h1 class="custom-font tw-text-3xl tw-font-black">Dashboard <span class="version">Version 1.0.1</span></h1>
          <h3 class="tw-text-xl">
            Welcome
            <span class="heading-fm">{{
              truncateAddress(data.user.public_address, "address")
            }}</span>
            <!-- <span class="">{{
              version
            }}</span> -->
          </h3>
        </div>
        <div class="d-flex flex-row justify-center">
          <div>
            <v-col align="center">
              <span class="subtitle-text">Rank</span>
              <v-img
                height="160px"
                class="my-3"
                :src="`/rank/${data.rank.logo}.png`"
              >
              </v-img>
              <h3 class="custom-font tw-text-2xl btn-text-color tw-font-black">
                {{ data.rank.name }}
              </h3>
            </v-col>
          </div>
          <div class="tw-px-28">
            <DashboardRankReward
              :column="true"
              :rankTicket="data.rank.ticket"
              :rankReward="data.rank.reward"
            />
          </div>
        </div>
        <div class="next-rank mx-5 d-flex align-center justify-center">
          <v-col cols="3" align="center" align-self="start">
            <span class="subtitle-text">Rank</span>
            <v-img
              height="120px"
              max-width="100%"
              contain
              class="my-1"
              :src="`/rank/${data.next_rank.logo}.png`"
            >
            </v-img>
            <!-- <p>{{ data.next_rank.logo }}</p> -->
            <h3 class="custom-font tw-text-xl btn-text-color tw-font-black">
              {{ data.next_rank.name }}
            </h3>
          </v-col>
          <v-col align="start" align-self="start">
            <span class="subtitle-text">Condition</span>
            <div class="my-1">
              <ul
                class="tw-text-base custom-font-2 tw-lowercase btn-text-color"
              >
                <li class="custom-font-2 d-flex align-center">
                  <!-- Icon -->
                  <checkCircle
                    class="mx-2"
                    v-if="data.is_achieve_condition_1 === 1"
                  />
                  <crossIcon class="mx-2" v-else />
                  {{ data.next_rank.condition1 }}
                </li>
                <li class="custom-font-2 d-flex align-center">
                  <!-- Icon -->
                  <checkCircle
                    class="mx-2"
                    v-if="data.is_achieve_condition_2 === 1"
                  />
                  <crossIcon class="mx-2" v-else />
                  {{ data.next_rank.condition2 }}
                </li>
              </ul>
              <DashboardRankReward
                :nextRankTicket="data.next_rank.ticket"
                :nextRankReward="data.next_rank.reward"
              />
            </div>
          </v-col>
        </div>
      </div>
    </div>
    <div class="" v-else>
      <div v-for="(data, index) in dashboardAll" :key="index">
        <div class="tw-flex tw-flex-col btn-text-color">
          <div class="d-flex flex-column btn-text-color text-center">
            <h1 class="custom-font tw-text-3xl tw-font-black">Dashboard</h1>
            <h3 class="tw-text-xl">
              Welcome
              <span class="heading-fm">{{
                truncateAddress(data.user.public_address, "address")
              }}</span>
            </h3>
          </div>
          <div class="d-flex flex-row tw-justify-between">
            <div>
              <v-col align="center">
                <span class="subtitle-text">Rank</span>
                <v-img class="my-3" :src="`/rank/${data.rank.logo}.png`">
                </v-img>
                <h3
                  class="custom-font tw-text-2xl btn-text-color tw-font-black"
                >
                  {{ data.rank.name }}
                </h3>
              </v-col>
            </div>
            <div class="">
              <DashboardRankReward
                :column="true"
                :rankTicket="data.rank.ticket"
                :rankReward="data.rank.reward"
              />
            </div>
          </div>
        </div>
        <div class="tw-flex tw-flex-row tw-items-center">
          <v-col cols="4" align="center" align-self="start">
            <span class="subtitle-text">Next rank</span>
            <v-img
              height="120px"
              max-width="100%"
              contain
              class="my-1"
              :src="`/rank/${data.next_rank.logo}.png`"
            >
            </v-img>
            <!-- <p>{{ data.next_rank.logo }}</p> -->
            <h3 class="custom-font tw-text-xl btn-text-color tw-font-black">
              {{ data.next_rank.name }}
            </h3>
          </v-col>
          <v-col cols="8">
            <div
              class="d-flex flex-row align-center tw-justify-end md:tw-h-40 tw-my-10 md:tw-my-3 tw-gap-2"
            >
              <div
                class="reward-bg d-flex flex-column align-center justify-center"
              >
                <v-img
                  class="tw-w-[36px] md:tw-w-[68px] md:tw-max-h-16"
                  src="/dashboard/tickets.png"
                ></v-img>

                <span class="white--text tw-font-medium"
                  >x{{ data.next_rank.ticket }}</span
                >
              </div>

              <div
                class="rank-reward d-flex flex-column align-center justify-center"
              >
                <span
                  class="white--text heading-fm tw-font-medium tw-text-base md:tw-text-2xl"
                  >{{ data.next_rank.reward }}</span
                >

                <v-img
                  max-height="32px"
                  width="32px"
                  class="my-2"
                  src="/dashboard/mft-sm.png"
                ></v-img>
              </div>
            </div>
          </v-col>
        </div>
        <div class="tw-flex tw-flex-col">
          <span class="subtitle-text tw-text-center">Condition</span>
          <div class="my-1">
            <ul
              class="tw-text-base custom-font-2 tw-lowercase btn-text-color"
              style="padding-left: 0px"
            >
              <li class="custom-font-2 d-flex align-center">
                <!-- Icon -->
                <checkCircle
                  class="mx-2"
                  v-if="data.is_achieve_condition_1 === 1"
                />
                <crossIcon class="mx-2" v-else />
                {{ data.next_rank.condition1 }}
              </li>
              <li class="custom-font-2 d-flex align-center">
                <!-- Icon -->
                <checkCircle
                  class="mx-2"
                  v-if="data.is_achieve_condition_2 === 1"
                />
                <crossIcon class="mx-2" v-else />
                {{ data.next_rank.condition2 }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import crossIcon from "@/assets/icons/XCircle.svg";
import checkCircle from "@/assets/icons/CheckCircle.svg";
export default {
  components: {
    crossIcon,
    checkCircle,
  },
  data() {
    return {
      version: process.env.version,
    };
  },
  async created() {
    await this.$store.dispatch("dashboard/getDashboardAll");
  },
  computed: {
    ...mapGetters("dashboard", ["dashboardAll"]),
  },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
.next-rank {
  height: 227px;
  background-color: #d6b694;
  border-radius: 30px;
}

.reward-bg {
  border-radius: 12px;
  background: #bc4a4b;
  margin: 0px;
  padding: 8px 21px;
}

.rank-reward {
  border-radius: 12px;
  background: #bc4a4b;
  margin: 0px;
  padding: 2px 12px;
}

.version {
  font-size: 12px;
}
</style>
