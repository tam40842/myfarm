<template>
  <div class="d-flex flex-column align-center justify-center tw-h-full">
    <h1 class="custom-font tw-text-3xl btn-text-color tw-font-black"></h1>
    <vue-winwheel :segments="dataSpin" />
    <!-- <div class="text-center">
      <v-btn
        v-for="pk in pakage"
        :key="pk.id"
        style="background-color: #bd5345"
        color="#d6b694"
        class="ma-2"
        @click="buyPakage(pk.id)"
      >
        {{ pk.name }} / {{ pk.value }} MFT
      </v-btn>
    </div> -->
  </div>
</template>

<script>
require("@/assets/js/konva.min.js");
import VueWinwheel from "vue-winwheel/vue-winwheel";
import axios from "axios";
export default {
  components: {
    VueWinwheel,
  },
  data() {
    return {
      slotUser: null,
      dataPakage: null,
      pakage: [
        {
          id: "1",
          name: "1 Slot",
          num: 1,
          value: "30",
        },
        {
          id: "2",
          name: "5 Slot",
          num: 5,
          value: "150",
        },
        {
          id: "3",
          name: "10 Slot",
          num: 10,
          value: "300",
        },
      ],
      url_base: process.env.link_api,
      dataSpin: [
        {
          color: "orange",
          fillStyle: "#ff6600",
          id: 19,
          name: "60 MFT",
          text: "60 MFT",
          textFillStyle: "#fff",
        },
        {
          color: "orange",
          fillStyle: "#ff6600",
          id: 18,
          name: "120 MFT",
          text: "120 MFT",
          textFillStyle: "#fff",
        },
        {
          color: "orange",
          fillStyle: "#ff6600",
          id: 17,
          name: "60 MFT",
          text: "60 MFT",
          textFillStyle: "#fff",
        },
        {
          color: "green",
          fillStyle: "#339966",
          id: 16,
          name: "$2000",
          text: "2000$",
          textFillStyle: "#fff",
        },
        {
          color: "orange",
          fillStyle: "#ff6600",
          id: 15,
          name: "120 MFT",
          text: "120 MFT",
          textFillStyle: "#fff",
        },
        {
          color: "orange",
          fillStyle: "#ff6600",
          id: 14,
          name: "60 MFT",
          text: "60 MFT",
          textFillStyle: "#fff",
        },
        {
          color: "blue",
          fillStyle: "#0066ff",
          id: 13,
          name: "fertilizers",
          text: "fertilizers",
          textFillStyle: "#fff",
        },
        {
          color: "orange",
          fillStyle: "#ff6600",
          id: 12,
          name: "60 MFT",
          text: "60 MFT",
          textFillStyle: "#fff",
        },
        {
          color: "red",
          fillStyle: "#ff0000",
          id: 11,
          name: "$5000",
          text: "5000$",
          textFillStyle: "#fff",
        },
        {
          color: "orange",
          fillStyle: "#ff6600",
          id: 10,
          name: "120 MFT",
          text: "120 MFT",
          textFillStyle: "#fff",
        },
        {
          color: "white",
          fillStyle: "#ffffff",
          id: 9,
          name: "15 MFT",
          text: "15 MFT",
          textFillStyle: "#001a00",
        },
        {
          color: "blue",
          fillStyle: "#0066ff",
          id: 8,
          name: "shovel",
          text: "shovel",
          textFillStyle: "#fff",
        },
        {
          color: "white",
          fillStyle: "#ffffff",
          id: 7,
          name: "12 MFT",
          text: "12 MFT",
          textFillStyle: "#001a00",
        },
        {
          color: "green",
          fillStyle: "#339966",
          id: 6,
          name: "$500",
          text: "500$",
          textFillStyle: "#fff",
        },
        {
          color: "white",
          fillStyle: "#ffffff",
          id: 5,
          name: "9 MFT",
          text: "9 MFT",
          textFillStyle: "#001a00",
        },
        {
          color: "white",
          fillStyle: "#ffffff",
          id: 4,
          name: "6 MFT",
          text: "6 MFT",
          textFillStyle: "#001a00",
        },
        {
          color: "blue",
          fillStyle: "#0066ff",
          id: 3,
          name: "hoe",
          text: "hoe",
          textFillStyle: "#fff",
        },
        {
          color: "white",
          fillStyle: "#ffffff",
          id: 2,
          name: "3 MFT",
          text: "3 MFT",
          textFillStyle: "#001a00",
        },
        {
          color: "red",
          fillStyle: "#ff0000",
          id: 1,
          name: "$10000",
          text: "10000$",
          textFillStyle: "#fff",
        },
      ],
    };
  },
  async created() {
    this.getSpin();
    this.getSlotUser();
  },
  mounted() {},
  methods: {
    async getSlotUser() {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
        const listDataSlotUser = await axios.get(
          this.url_base + "/api/auth/user-profile",
          config
        );
        this.slotUser = listDataSlotUser.data.results.package.numRemain;
      } catch (error) {}
    },
    async getSpin() {
      try {
        const config = {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
        const listData = await axios.get(this.url_base + "/api/spins", config);
        console.log(listData.data.results);
      } catch (error) {}
    },
  },
};
</script>

<style>
h1[data-v-78bf01f8] {
  color: #882900 !important;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 18px !important;
  line-height: 90px;
  letter-spacing: 4px;
  margin: 0;
}

.v-btn__content {
  color: white;
}
</style>
