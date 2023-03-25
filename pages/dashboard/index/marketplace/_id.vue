<template>
  <div class="tw-p-8">
    <nuxt-link to="/dashboard/marketplace" class="tw-mb-8">
      <img src="/dashboard/marketplace/back.svg" alt="back" />
    </nuxt-link>
    <div class="tw-mt-8" v-if="detailId.item != null">
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-6">
        <div class="tw-flex tw-full md:tw-w-2/4">
          <div class="tw-relative">
            <img src="/dashboard/marketplace/bg-detail.svg" alt="" />
            <div
              class="tw-absolute tw-top-[50%] tw-left-[50%]"
              style="transform: translate(-50%, -50%)"
            >
              <img
                :src="`/dashboard/marketplace/${detailId.item.logo}.png`"
                alt="tree"
              />
            </div>
          </div>
        </div>
        <div class="tw-flex tw-flex-col tw-full md:tw-w-2/4">
          <h2 class="tw-text-4xl tw-mb-4 default-text-color tw-font-semibold">
            {{ detailId.item.name }}
          </h2>
          <div class="tw-flex tw-items-center tw-gap-2 tw-mb-16">
            <img src="/dashboard/marketplace/usdt.png" alt="coin" />
            <div class="tw-text-sm tw-text-[32px] tw-text-[#375F2F]">
              {{ detailId.price }}
            </div>
          </div>
          <v-dialog v-model="dialog" width="500">
            <template #activator="{ on, attrs }">
              <button
                class="tw-relative tw-w-[40%]"
                v-bind="attrs"
                v-on="on"
                style="background-color: transparent; box-shadow: unset"
              >
                <img
                  src="/dashboard/marketplace/detail/frame.png"
                  alt="frame"
                />
              </button>
            </template>
            <div class="tw-py-2 tw-gap-x-8 tw-bg-[#D6B694] tw-rounded-2xl">
              <div
                class="default-text-color tw-text-sm tw-mb-2 tw-font-semibold tw-text-center"
              >
                Confirm
              </div>
              <div
                class="tw-text-center tw-text-[#b97a5b] tw-font-normal tw-mb-2"
              >
                Do you want to buy
                <span class="tw-text-[#a85639] tw-font-semibold"
                  >{{ detailId.item.name }}:
                </span>
                <span class="tw-text-[#a85639] tw-font-semibold"
                  >{{ detailId.price }} USDT (BEP-20)</span
                >
              </div>
              <div class="tw-flex tw-justify-center tw-gap-2">
                <button
                  class="tw-relative"
                  @click="confirmItem(detailId.price)"
                >
                  <img
                    src="/dashboard/marketplace/detail/frame.svg"
                    alt="frame"
                  />
                  <div
                    class="text-shadow-2 tw-text-base tw-absolute tw-top-[50%] tw-left-[50%]"
                    style="transform: translate(-50%, -50%)"
                  >
                    Buy
                  </div>
                </button>
                <button class="tw-relative" @click="dialog = false">
                  <img
                    src="/dashboard/marketplace/detail/frame.svg"
                    alt="frame"
                  />
                  <div
                    class="text-shadow-2 tw-text-base tw-absolute tw-top-[50%] tw-left-[50%]"
                    style="transform: translate(-50%, -50%)"
                  >
                    Cancel
                  </div>
                </button>
              </div>
            </div>
          </v-dialog>
        </div>
      </div>
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-6 tw-mt-8">
        <div
          class="tw-flex tw-flex-col tw-full md:tw-w-2/4 tw-bg-[#D6B694] tw-rounded-2xl tw-p-2"
        >
          <h3 class="tw-text-xl default-text-color tw-mb-4 tw-font-semibold">
            Description
          </h3>

          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2 tw-mb-4"
            style="line-height: 22px"
          >
            <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              {{ detailId.description }}
            </div>
          </div>
          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2"
            style="line-height: 22px"
          >
            <!-- <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              When enough exp will be promoted to a higher tree, enjoying the
              benefits of a higher tree
            </div> -->
          </div>
        </div>
        <div
          class="tw-flex tw-flex-col tw-full md:tw-w-2/4 tw-bg-[#D6B694] tw-rounded-2xl tw-p-2"
        >
          <h3 class="tw-text-xl default-text-color tw-mb-4 tw-font-semibold">
            Growth process
          </h3>

          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2 tw-mb-4"
            style="line-height: 22px"
          >
            <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              <p v-html="detailId.process"></p>
            </div>
          </div>
          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2"
            style="line-height: 22px"
          >
            <!-- <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              Play gold digging game to get tree experience Or use tools such as
              hoe, shovel, fertilizer
            </div> -->
          </div>
          <!-- <div class="tw-flex tw-justify-center tw-gap-2 tw-mt-4">
            <div class="tw-p-2 tw-bg-[#C56F63] tw-rounded-xl">
              <img src="/dashboard/marketplace/detail/hoe.png" alt="hoe" />
            </div>
            <div class="tw-p-2 tw-bg-[#C56F63] tw-rounded-xl">
              <img src="/dashboard/marketplace/detail/shovel.png" alt="hoe" />
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="tw-mt-8" v-else-if="detailId.tree != null">
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-6">
        <div class="tw-flex tw-full md:tw-w-2/4">
          <div class="tw-relative">
            <img src="/dashboard/marketplace/bg-detail.svg" alt="" />
            <div
              class="tw-absolute tw-top-[50%] tw-left-[50%]"
              style="transform: translate(-50%, -50%)"
            >
              <img
                :src="`/dashboard/marketplace/${detailId.tree.logo}.png`"
                alt="tree"
              />
            </div>
          </div>
        </div>
        <div class="tw-flex tw-flex-col tw-full md:tw-w-2/4">
          <h2 class="tw-text-4xl tw-mb-4 default-text-color tw-font-semibold">
            {{ detailId.tree.name }}
          </h2>
          <div class="tw-flex tw-items-center tw-gap-2 tw-mb-16">
            <img src="/dashboard/marketplace/usdt.png" alt="coin" />
            <div class="tw-text-sm tw-text-[32px] tw-text-[#375F2F]">
              {{ detailId.price }}
            </div>
          </div>
          <v-dialog v-model="dialog" width="500">
            <template #activator="{ on, attrs }">
              <button
                class="tw-relative tw-w-[40%]"
                v-bind="attrs"
                v-on="on"
                style="background-color: transparent; box-shadow: unset"
              >
                <img
                  src="/dashboard/marketplace/detail/frame.png"
                  alt="frame"
                />
              </button>
            </template>
            <div class="tw-py-2 tw-gap-x-8 tw-bg-[#D6B694] tw-rounded-2xl">
              <div
                class="default-text-color tw-text-sm tw-mb-2 tw-font-semibold tw-text-center"
              >
                Confirm
              </div>
              <div
                class="tw-text-center tw-text-[#b97a5b] tw-font-normal tw-mb-2"
              >
                Do you want to buy
                <span class="tw-text-[#a85639] tw-font-semibold"
                  >{{ detailId.tree.name }}:
                </span>
                <span class="tw-text-[#a85639] tw-font-semibold"
                  >{{ detailId.price }} USDT (BEP-20)</span
                >
                <!-- <span class="tw-text-[#a85639] tw-font-semibold">a</span> -->
              </div>
              <div class="tw-flex tw-justify-center tw-gap-2">
                <button
                  class="tw-relative"
                  @click="confirmTree(detailId.price)"
                >
                  <img
                    src="/dashboard/marketplace/detail/frame.svg"
                    alt="frame"
                  />
                  <div
                    class="text-shadow-2 tw-text-base tw-absolute tw-top-[50%] tw-left-[50%]"
                    style="transform: translate(-50%, -50%)"
                  >
                    Buy
                  </div>
                </button>
                <button class="tw-relative" @click="dialog = false">
                  <img
                    src="/dashboard/marketplace/detail/frame.svg"
                    alt="frame"
                  />
                  <div
                    class="text-shadow-2 tw-text-base tw-absolute tw-top-[50%] tw-left-[50%]"
                    style="transform: translate(-50%, -50%)"
                  >
                    Cancel
                  </div>
                </button>
              </div>
            </div>
          </v-dialog>
        </div>
      </div>
      <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-6 tw-mt-8">
        <div
          class="tw-flex tw-flex-col tw-full md:tw-w-2/4 tw-bg-[#D6B694] tw-rounded-2xl tw-p-2"
        >
          <h3 class="tw-text-xl default-text-color tw-mb-4 tw-font-semibold">
            Description
          </h3>

          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2 tw-mb-4"
            style="line-height: 22px"
          >
            <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              {{ detailId.description }}
            </div>
          </div>
          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2"
            style="line-height: 22px"
          >
            <!-- <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              When enough exp will be promoted to a higher tree, enjoying the
              benefits of a higher tree
            </div> -->
          </div>
        </div>
        <div
          class="tw-flex tw-flex-col tw-full md:tw-w-2/4 tw-bg-[#D6B694] tw-rounded-2xl tw-p-2"
        >
          <h3 class="tw-text-xl default-text-color tw-mb-4 tw-font-semibold">
            Growth process
          </h3>

          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2 tw-mb-4"
            style="line-height: 22px"
          >
            <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              <p v-html="detailId.process"></p>
              <!-- <p v-html="detailId.process.documentText.replace(/(?:\r\n|\r|\n)/g, '<br />')"></p> -->
            </div>
          </div>
          <div
            class="tw-text-[#A85639] tw-text-sm tw-flex tw-items-baseline tw-gap-2"
            style="line-height: 22px"
          >
            <!-- <img src="/dashboard/marketplace/detail/icon-li.svg" alt="icon" />
            <div>
              Play gold digging game to get tree experience Or use tools such as
              hoe, shovel, fertilizer
            </div> -->
          </div>
          <!-- <div class="tw-flex tw-justify-center tw-gap-2 tw-mt-4">
            <div class="tw-p-2 tw-bg-[#C56F63] tw-rounded-xl">
              <img src="/dashboard/marketplace/detail/hoe.png" alt="hoe" />
            </div>
            <div class="tw-p-2 tw-bg-[#C56F63] tw-rounded-xl">
              <img src="/dashboard/marketplace/detail/shovel.png" alt="hoe" />
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div v-if="waitingDeposit">
      <v-dialog v-model="waitingDeposit" width="500">
        <!-- <div class="tw-p-4 tw-relative">
          <button
            class="tw-absolute tw-top-0 tw-right-0"
            @click="buyStatus = false"
          >
            <img src="/dashboard/marketplace/detail/close.svg" alt="close" />
          </button>
          <div class="tw-py-4 tw-bg-[#D6B694] tw-rounded-2xl">
            <div class="tw-flex tw-justify-center tw-mb-2">
              <img src="/dashboard/marketplace/detail/done.svg" alt="done" />
            </div>
            <div class="text-shadow-2 tw-text-center">Done</div>
          </div>
        </div> -->
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
          <div class="text-shadow-2 tw-text-xl tw-text-center">Waiting...</div>
        </div>
      </v-dialog>
    </div>

    <div v-if="buyStatus">
      <v-dialog v-model="buyStatus" width="500">
        <div class="tw-p-4 tw-relative">
          <button
            class="tw-absolute tw-top-0 tw-right-0"
            @click="buyStatus = false"
          >
            <img src="/dashboard/marketplace/detail/close.svg" alt="close" />
          </button>
          <div class="tw-py-4 tw-bg-[#D6B694] tw-rounded-2xl">
            <div class="tw-flex tw-justify-center tw-mb-2">
              <img src="/dashboard/marketplace/detail/done.svg" alt="done" />
            </div>
            <div class="text-shadow-2 tw-text-center">Done</div>
          </div>
        </div>
      </v-dialog>
    </div>
    <div v-if="buyFail">
      <v-dialog v-model="buyFail" width="500">
        <div class="tw-p-4 tw-relative">
          <button
            class="tw-absolute tw-top-0 tw-right-0"
            @click="buyFail = false"
          >
            <img src="/dashboard/marketplace/detail/close.svg" alt="close" />
          </button>
          <div class="tw-py-4 tw-bg-[#D6B694] tw-rounded-2xl">
            <div class="tw-flex tw-justify-center tw-mb-2">
              <img src="/dashboard/marketplace/detail/fail.svg" alt="fail" />
            </div>
            <div class="text-shadow-2 tw-text-center">
              Please check balance in your wallet
            </div>
          </div>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Web3 from "web3";
export default {
  data() {
    return {
      dialog: false,
      buyStatus: false,
      buyFail: false,
      url_base: process.env.link_api,
      detailId: {},
      waitingDeposit: false,
    };
  },
  mounted() {
    this.getDetailMarketplace();
  },
  methods: {
    confirm() {
      this.dialog = false;
      this.buyFail = true;
    },
    async getDetailMarketplace() {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const detail = await axios.get(
        this.url_base + `/api/buy-shop/${this.$route.params.id}`,
        config
      );
      this.detailId = detail.data.results;
    },
    async confirmItem(price) {
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
              const amount = price;
              const tokens = this.web3.utils.toWei(amount.toString(), "ether");
              const bntokens = this.web3.utils.toBN(tokens);
              const transfer = await myContract.methods.transfer(
                "0x7B756992bE3201172e368Fa10F4B5811DD98A4B1",
                bntokens
              );
              const data = await transfer.encodeABI();
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
                  console.log(responseTransaction);
                  const config = {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  };
                  const test = axios.post(
                    this.url_base + `/api/buy-shop/${this.$route.params.id}`,
                    {
                      txHash: responseTransaction.transactionHash,
                    },
                    config
                  );
                  this.dialog = false;
                  this.buyFail = false;
                  this.buyStatus = true;
                  this.waitingDeposit = false;
                })
                .catch((error) => {
                  this.dialog = false;
                  this.buyFail = true;
                  this.buyStatus = false;
                  this.waitingDeposit = false;
                });
            }
          }
        })
        .catch((error) => {
          if (error && error.code === 4001) {
            alert("Please connect to MetaMask.");
          } else {
            console.error(error);
          }
        });
    },
    async confirmTree(price) {
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
              const amount = price;
              const tokens = this.web3.utils.toWei(amount.toString(), "ether");
              const bntokens = this.web3.utils.toBN(tokens);
              const transfer = await myContract.methods.transfer(
                "0x7B756992bE3201172e368Fa10F4B5811DD98A4B1",
                bntokens
              );
              const data = await transfer.encodeABI();
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
                  const rs = axios.post(
                    this.url_base + `/api/buy-shop/${this.$route.params.id}`,
                    {
                      txHash: responseTransaction.transactionHash,
                    },
                    config
                  );
                  console.log(rs);
                  this.dialog = false;
                  this.buyFail = false;
                  this.buyStatus = true;
                  this.waitingDeposit = false;
                })
                .catch((error) => {
                  this.dialog = false;
                  this.buyFail = true;
                  this.buyStatus = false;
                  this.waitingDeposit = false;
                });
            }
          }
        })
        .catch((error) => {
          if (error && error.code === 4001) {
            alert("Please connect to MetaMask.");
          } else {
            console.error(error);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.text-shadow-2 {
  color: white;
  text-shadow: 2px 2px 0 #741e00, 2px -2px 0 #741e00, -2px 2px 0 #741e00,
    -2px -2px 0 #741e00, 2px 0px 0 #741e00, 0px 2px 0 #741e00,
    -2px 0px 0 #741e00, 0px -2px 0 #741e00;
}
.pre-formatted {
  white-space: pre;
}
</style>
