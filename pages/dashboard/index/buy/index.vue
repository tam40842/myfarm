<template>
  <div>
    <h1
      class="custom-font tw-mt-4 md:tw-mt-0 tw-text-center tw-text-3xl btn-text-color tw-font-black tw-mb-40"
    >
      Buy
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
                :rules="amountRules"
                v-model="amount"
                solo
                label="Input Amount USDT..."
                class="deposit-label"
                rounded
                clearable
              ></v-text-field>
              <div
                class="tw-flex tw-items-center tw-gap-2 mb-4 tw-font-normal tw-text-sm tw-text-[#882900] tw-opacity-60"
              >
                <div>1 <span>USDT</span> =</div>
                <div>10 <span> MFT</span></div>
              </div>
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
                <div class="tw-text-lg tw-text-[#882900]">You will get:</div>
                <div>
                  <div class="tw-text-3xl tw-text-white">
                    {{ amount * 10 }} <span> MFT</span>
                  </div>
                </div>
              </div>

              <button
                style="width: 100%"
                :disabled="!valid"
                class="tw-relative tw-cursor-pointer tw-transition-all tw-ease-linear tw-duration-300 hover:tw-opacity-80"
                @click="e1 = 2"
              >
                <img src="/dashboard/deposit/frame.svg" class="mx-auto" />
                <span
                  class="text-shadow tw-absolute tw-top-[50%] tw-left-[50%] tw-font-bold"
                  style="transform: translate(-50%, -50%)"
                  >Confirm</span
                >
              </button>
            </v-form>
            <!-- <v-btn color="primary" @click="e1 = 2"> Next </v-btn> -->
          </v-stepper-content>

          <v-stepper-content step="2">
            <div class="tw-w-[80%] tw-mx-auto">
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-8">
                <div class="tw-text-lg tw-text-[#882900]">Amount:</div>
                <div class="tw-text-3xl tw-text-white">
                  {{ amount }} <span class="tw-text-lg">USDT</span>
                </div>
              </div>
              <div
                class="tw-flex tw-items-center tw-gap-2 mb-4 tw-font-normal tw-text-sm tw-text-[#882900] tw-opacity-60"
              >
                <div>1 <span>USDT</span> =</div>
                <div>10 <span> MFT</span></div>
              </div>
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-8">
                <div class="tw-text-lg tw-text-[#882900]">You will get:</div>
                <div class="tw-text-3xl tw-text-white">
                  {{ amount * 10 }}
                  <span class="tw-text-lg">MFT</span>
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
                  @click="buyUSDT()"
                >
                  <img src="/dashboard/deposit/frame.svg" class="mx-auto" />
                  <span
                    class="text-shadow tw-absolute tw-top-[50%] tw-left-[50%] tw-font-bold"
                    style="transform: translate(-50%, -50%)"
                    >Buy</span
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
import Web3 from "web3";
import axios from "axios";
export default {
  components: { Button },
  data() {
    return {
      url_base: process.env.link_api,
      e1: 1,
      deposit: false,
      loading: true,
      waitingDeposit: false,
      amount: "",
      valid: false,
      amountRules: [
        (v) => !!v || "Please enter the amount",
        (v) =>
          /^-{0,1}\d*\.{0,1}\d+$/.test(v) ||
          "Amount is not in the correct format",
      ],
    };
  },
  mounted() {},
  methods: {
    formAmount() {},
    async buyUSDT() {
      this.accounts = await ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (response) => {
          if (response && response.length >= 0) {
            if (window.ethereum) {
              this.web3 = new Web3(window.ethereum);
              const ABI = [
                {
                  inputs: [],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "constructor",
                },
                {
                  anonymous: false,
                  inputs: [
                    {
                      indexed: true,
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      indexed: true,
                      internalType: "address",
                      name: "spender",
                      type: "address",
                    },
                    {
                      indexed: false,
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                  ],
                  name: "Approval",
                  type: "event",
                },
                {
                  anonymous: false,
                  inputs: [
                    {
                      indexed: true,
                      internalType: "address",
                      name: "previousOwner",
                      type: "address",
                    },
                    {
                      indexed: true,
                      internalType: "address",
                      name: "newOwner",
                      type: "address",
                    },
                  ],
                  name: "OwnershipTransferred",
                  type: "event",
                },
                {
                  anonymous: false,
                  inputs: [
                    {
                      indexed: true,
                      internalType: "address",
                      name: "from",
                      type: "address",
                    },
                    {
                      indexed: true,
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      indexed: false,
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                  ],
                  name: "Transfer",
                  type: "event",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "_decimals",
                  outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "_name",
                  outputs: [
                    { internalType: "string", name: "", type: "string" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "_symbol",
                  outputs: [
                    { internalType: "string", name: "", type: "string" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [
                    { internalType: "address", name: "owner", type: "address" },
                    {
                      internalType: "address",
                      name: "spender",
                      type: "address",
                    },
                  ],
                  name: "allowance",
                  outputs: [
                    { internalType: "uint256", name: "", type: "uint256" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "address",
                      name: "spender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  name: "approve",
                  outputs: [{ internalType: "bool", name: "", type: "bool" }],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
                    },
                  ],
                  name: "balanceOf",
                  outputs: [
                    { internalType: "uint256", name: "", type: "uint256" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  name: "burn",
                  outputs: [{ internalType: "bool", name: "", type: "bool" }],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "decimals",
                  outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "address",
                      name: "spender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "subtractedValue",
                      type: "uint256",
                    },
                  ],
                  name: "decreaseAllowance",
                  outputs: [{ internalType: "bool", name: "", type: "bool" }],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "getOwner",
                  outputs: [
                    { internalType: "address", name: "", type: "address" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "address",
                      name: "spender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "addedValue",
                      type: "uint256",
                    },
                  ],
                  name: "increaseAllowance",
                  outputs: [{ internalType: "bool", name: "", type: "bool" }],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  name: "mint",
                  outputs: [{ internalType: "bool", name: "", type: "bool" }],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "name",
                  outputs: [
                    { internalType: "string", name: "", type: "string" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "owner",
                  outputs: [
                    { internalType: "address", name: "", type: "address" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [],
                  name: "renounceOwnership",
                  outputs: [],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "symbol",
                  outputs: [
                    { internalType: "string", name: "", type: "string" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: true,
                  inputs: [],
                  name: "totalSupply",
                  outputs: [
                    { internalType: "uint256", name: "", type: "uint256" },
                  ],
                  payable: false,
                  stateMutability: "view",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  name: "transfer",
                  outputs: [{ internalType: "bool", name: "", type: "bool" }],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                  ],
                  name: "transferFrom",
                  outputs: [{ internalType: "bool", name: "", type: "bool" }],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
                {
                  constant: false,
                  inputs: [
                    {
                      internalType: "address",
                      name: "newOwner",
                      type: "address",
                    },
                  ],
                  name: "transferOwnership",
                  outputs: [],
                  payable: false,
                  stateMutability: "nonpayable",
                  type: "function",
                },
              ];
              const contractAddress =
                "0x55d398326f99059ff775485246999027b3197955";
              const myContract = new this.web3.eth.Contract(
                ABI,
                contractAddress
              );
              const amount = this.amount;
              const tokens = this.web3.utils.toWei(amount.toString(), "ether");
              const bnToken = this.web3.utils.toBN(tokens);
              const transfer = await myContract.methods.transfer(
                "0x7B756992bE3201172e368Fa10F4B5811DD98A4B1",
                bnToken
              );
              const data = await transfer.encodeABI();
              this.e1 = 3;
              this.waitingDeposit = true;
              this.web3.eth
                .sendTransaction({
                  from: response[0],
                  to: "0x55d398326f99059ff775485246999027b3197955",
                  gasPrice: "20000000000",
                  gas: "63000",
                  data: data,
                })
                .then((responseTransaction) => {
                  const config = {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  };
                  axios
                    .post(
                      this.url_base + "/api/buys",
                      {
                        amount_in: amount,
                        rate: 0.1,
                        txHash: responseTransaction.transactionHash,
                      },
                      config
                    )
                    .then((responseBuy) => {
                      this.$store.commit("user/setBalance", responseBuy.data.results.user.live_balance)
                      this.waitingDeposit = false;
                      this.deposit = true;
                      this.e1 = 3;
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                })
                .catch((error) => {
                  this.waitingDeposit = false;
                  this.deposit = false;
                  this.e1 = 3;
                });
            }
          }
        })
        .catch((error) => {
          if (error && error.code === 4001) {
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

.tw-text-white {
  font-size: 24px;
}
</style>
