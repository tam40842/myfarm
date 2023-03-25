<template>
  <div>
    <h1
      class="custom-font tw-mt-4 md:tw-mt-0 tw-text-center tw-text-3xl btn-text-color tw-font-black tw-mb-40"
    >
      Withdraw
    </h1>
    <div class="tw-w-full md:tw-w-4/6 tw-mx-auto">
      <v-stepper v-model="e1" class="custom-stepper">
        <v-stepper-items>
          <v-stepper-content
            step="1"
            class="tw-flex tw-justify-center tw-flex-col"
          >
            <v-form v-model="valid" @submit.prevent="formAmount">
              <v-text-field
                v-model="amount"
                :rules="amountRules"
                solo
                label="Input Amount MFT Balance..."
                class="deposit-label"
                rounded
                clearable
              ></v-text-field>
              <div
                class="tw-flex tw-items-center tw-gap-2 mb-4 tw-font-normal tw-text-sm tw-text-[#882900] tw-opacity-60"
              >
                <div>Transaction Fee:</div>
                <div>{{fee_withdraw}} <span> MFT</span></div>
              </div>
              <!-- <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
                <div class="tw-text-lg tw-text-[#882900]">You will get:</div>
                <div>
                  <div class="tw-text-3xl tw-text-white">
                    {{amount}} <span> MFT</span>
                  </div>
                </div>
              </div> -->
              <button
                :disabled="!valid"
                class="tw-relative tw-cursor-pointer tw-transition-all tw-ease-linear tw-duration-300 hover:tw-opacity-80"
                @click="e1 = 2"
                style="width: 100%"
              >
                <img src="/dashboard/deposit/frame.svg" class="mx-auto" />
                <span
                  class="text-shadow tw-absolute tw-top-[50%] tw-left-[50%] tw-font-bold"
                  style="transform: translate(-50%, -50%)"
                  >Confirm</span
                >
              </button>
              <!-- <v-btn color="primary" @click="e1 = 2"> Next </v-btn> -->
            </v-form>
          </v-stepper-content>

          <v-stepper-content step="2">
            <div class="tw-w-[80%] tw-mx-auto">
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-8">
                <div class="tw-text-lg tw-text-[#882900]">Amount:</div>
                <div class="tw-text-3xl tw-text-white">
                  {{ amount }} <span class="tw-text-lg">MFT</span>
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-8">
                <div class="tw-opacity-40 tw-text-[#882900]">
                  Transaction fee:
                </div>
                <div class="tw-opacity-40 tw-text-[#882900]">
                  {{fee_withdraw}} <span>MFT</span>
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-8">
                <div class="tw-text-lg tw-text-[#882900]">You will get:</div>
                <div class="tw-text-3xl tw-text-white">
                  {{ amount - fee_withdraw }} <span class="tw-text-lg">MFT</span>
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-justify-center tw-gap-2">
                <div
                  class="tw-relative tw-cursor-pointer tw-transition-all tw-ease-linear tw-duration-300 hover:tw-opacity-80"
                  @click="e1 = 1"
                >
                  <img src="/dashboard/deposit/frame.svg" class="mx-auto" />
                  <span
                    class="text-shadow tw-absolute tw-top-[50%] tw-left-[50%] tw-font-bold"
                    style="transform: translate(-50%, -50%)"
                    >Back</span
                  >
                </div>
                <div
                  class="tw-relative tw-cursor-pointer tw-transition-all tw-ease-linear tw-duration-300 hover:tw-opacity-80"
                  @click="withdraw()"
                >
                  <img src="/dashboard/deposit/frame.svg" class="mx-auto" />
                  <span
                    class="text-shadow tw-absolute tw-top-[50%] tw-left-[50%] tw-font-bold"
                    style="transform: translate(-50%, -50%)"
                    >Withdraw</span
                  >
                </div>
              </div>
            </div>
            <!-- <div v-else>
              <div class="tw-flex tw-flex-col tw-justify-center tw-gap-4">
                <div
                  class="tw-min-h-[40px] tw-flex tw-items-center tw-gap-2 tw-mx-auto"
                >
                  <img
                    class="tw-animate-bounce"
                    src="/dashboard/deposit/loading.svg"
                    alt="loading"
                    style="animation-delay: 0.3s"
                  />
                  <img
                    class="tw-animate-bounce"
                    src="/dashboard/deposit/loading.svg"
                    alt="loading"
                    style="animation-delay: 0.6s"
                  />
                  <img
                    class="tw-animate-bounce"
                    src="/dashboard/deposit/loading.svg"
                    alt="loading"
                    style="animation-delay: 0.9s"
                  />
                </div>
                <div class="text-shadow-2 tw-text-xl tw-text-center">
                  Waiting...
                </div>
              </div>
            </div> -->
          </v-stepper-content>
          <v-stepper-content step="3" v-if="waitingDeposit">
            <div class="tw-flex tw-flex-col tw-justify-center tw-gap-4">
              <div
                class="tw-min-h-[40px] tw-flex tw-items-center tw-gap-2 tw-mx-auto"
              >
                <img
                  class="tw-animate-bounce"
                  src="/dashboard/deposit/loading.svg"
                  alt="loading"
                  style="animation-delay: 0.3s"
                />
                <img
                  class="tw-animate-bounce"
                  src="/dashboard/deposit/loading.svg"
                  alt="loading"
                  style="animation-delay: 0.6s"
                />
                <img
                  class="tw-animate-bounce"
                  src="/dashboard/deposit/loading.svg"
                  alt="loading"
                  style="animation-delay: 0.9s"
                />
              </div>
              <div class="text-shadow-2 tw-text-xl tw-text-center">
                Waiting...
              </div>
            </div>
          </v-stepper-content>
          <v-stepper-content step="3" v-else-if="deposit">
            <div class="tw-flex tw-flex-col">
              <div>
                <img
                  src="/dashboard/deposit/done.svg"
                  alt="done"
                  class="mx-auto"
                />
              </div>
              <div class="tw-text-center text-shadow-2">Done</div>
            </div>
          </v-stepper-content>
          <v-stepper-content step="3" v-else>
            <div class="tw-flex tw-flex-col">
              <div>
                <img
                  src="/dashboard/deposit/fail.svg"
                  alt="done"
                  class="mx-auto tw-mb-4"
                />
              </div>
              <div class="tw-text-center text-shadow-2 tw-font-bold">
                Error ! Please check connect wallet, again
              </div>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </div>
</template>

<script>
import Button from "../../../../components/WoodenBlocks/Button.vue";
import axios from "axios";
export default {
  components: { Button },
  data() {
    return {
      waitingDeposit: false,
      url_base: process.env.link_api,
      e1: 1,
      deposit: false,
      loading: true,
      message2: "",
      settings: null,
      valid: false,
      amount: "",
      min_withdraw: 0,
      fee_withdraw: 0,
      amountRules: [
        (v) => !!v || "Please enter the amount",
        (v) =>
          /^-{0,1}\d*\.{0,1}\d+$/.test(v) ||
          "Amount is not in the correct format",
          (v) =>
          v >= this.min_withdraw  || "Minimum transfer 100 MFT",
      ],
    };
  },
  mounted() {
    this.dataSettings();
  },
  methods: {
    async dataSettings() {
      await axios
        .get(
          this.url_base + "/api/settings",
        )
        .then((response) => {
          console.log(response.data.results.data);
          this.settings = response.data
          this.min_withdraw = response.data.results.data[2].setting_value
          // console.log(this.min_withdraw);
          this.min_withdraw = +this.min_withdraw
          this.fee_withdraw = response.data.results.data[3].setting_value
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async formAmount() {},
    async withdraw() {
      this.e1 = 3;
      this.waitingDeposit = true;
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
        const withdrawMember = await axios.post(
          this.url_base + "/api/withdraws",
          {
            amount: this.amount,
            symbol: "MFT",
          },
          config
        );
        if (withdrawMember.data.status == 200) {
          this.e1 = 3;
          this.waitingDeposit = false;
          this.deposit = true;
        } else {
          this.e1 = 3;
          this.waitingDeposit = false;
          this.deposit = false;
        }
      } catch (error) {
        this.e1 = 3;
        this.waitingDeposit = false;
        this.deposit = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-stepper {
  background: transparent !important;
  box-shadow: unset !important;
}
.text-shadow-2 {
  color: white;
  text-shadow: 2px 2px 0 #741e00, 2px -2px 0 #741e00, -2px 2px 0 #741e00,
    -2px -2px 0 #741e00, 2px 0px 0 #741e00, 0px 2px 0 #741e00,
    -2px 0px 0 #741e00, 0px -2px 0 #741e00;
}
</style>
