<template>
  <div>
    <h1
      class="custom-font tw-mt-4 md:tw-mt-0 tw-text-center tw-text-3xl btn-text-color tw-font-black tw-mb-40"
    >
      Profile Member
    </h1>
    <div class="tw-w-full md:tw-w-4/6 tw-mx-auto">
      <div class="custom-stepper">
        <div class="tw-flex tw-justify-center tw-flex-col">
          <v-form method="POST" @submit.prevent="formProfile">
            <v-text-field
              v-model="username"
              solo
              label="Username"
              class="deposit-label"
              rounded
              clearable
            ></v-text-field>
            <v-text-field
              v-model="password"
              solo
              label="Password"
              class="deposit-label"
              rounded
              clearable
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="password_confirmation"
              solo
              label="Password Confirmation"
              class="deposit-label"
              rounded
              clearable
              type="password"
            ></v-text-field>
            <div
              @click="updateProfile"
              style="width: 100%"
              class="tw-relative tw-cursor-pointer tw-transition-all tw-ease-linear tw-duration-300 hover:tw-opacity-80"
            >
              <img src="/dashboard/deposit/frame.svg" class="mx-auto" />
              <span
                class="text-shadow tw-absolute tw-top-[50%] tw-left-[50%] tw-font-bold"
                style="transform: translate(-50%, -50%)"
                >Update</span
              >
            </div>
          </v-form>
        </div>
      </div>
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
            <div class="text-shadow-2 tw-text-center">
              Update profile success
            </div>
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
            <div class="text-shadow-2 tw-text-center">Update profile fail</div>
          </div>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import Button from "../../../../components/WoodenBlocks/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      url_base: process.env.link_api,
      profile: null,
      loading: false,
      username: "",
      password: "",
      password_confirmation: "",
      access_token: "",
      users: null,
      buyStatus: false,
      buyFail: false,
      profile_pass: null,
    };
  },
  async created() {
    await this.$store.dispatch("dashboard/getDashboardAll");
    this.username = this.dashboardAll[0].user.username;
  },
  mounted() {
    this.dataUser();
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("dashboard", ["dashboardAll"]),
  },
  methods: {
    formProfile() {},
    async updateProfile() {
      const config = {
        headers: {
          Authorization: "Bearer " + this.users.access_token,
        },
      };
      if (
        this.username != "" &&
        (this.password == "" || this.password_confirmation == "")
      ) {
        try {
          this.profile = await axios.patch(
            this.url_base + "/api/user/update-username",
            {
              username: this.username,
            },
            config
          );
          if (this.profile.status == 200) {
            this.buyStatus = true;
          }
        } catch (error) {
          this.buyFail = true;
        }
      }
      if (
        this.username != "" &&
        this.password == "" &&
        this.password_confirmation == ""
      ) {
        try {
          this.profile = await axios.patch(
            this.url_base + "/api/user/update-username",
            {
              username: this.username,
            },
            config
          );
          if (this.profile.status == 200) {
            this.buyStatus = true;
          }
        } catch (error) {
          this.buyFail = true;
        }
      }
      if (
        this.password != "" &&
        this.password_confirmation != "" &&
        this.username == ""
      ) {
        try {
          this.profile_pass = await axios.patch(
            this.url_base + "/api/user/update-password",
            {
              password: this.password,
              password_confirmation: this.password_confirmation,
            },
            config
          );
          if (this.profile_pass.status == 200) {
            this.buyStatus = true;
          }
        } catch (error) {
          this.buyFail = true;
        }
      }

      if (
        this.password != "" &&
        this.password_confirmation != "" &&
        this.username != ""
      ) {
        try {
          this.profile = await axios.patch(
            this.url_base + "/api/user/update-password",
            {
              password: this.password,
              password_confirmation: this.password_confirmation,
            },
            config
          );
        } catch (error) {
          this.buyFail = true;
        }

        try {
          this.profile_pass = await axios.patch(
            this.url_base + "/api/user/update-username",
            {
              username: this.username,
            },
            config
          );
        } catch (error) {
          this.buyFail = true;
        }
        // console.log(this.profile.status);
        // console.log(this.profile_pass.status);
        if (this.profile.status == 200 && this.profile_pass.status == 200) {
          this.buyStatus = true;
        } else {
          this.buyFail = true;
        }
      }
    },
    dataUser() {
      this.users = JSON.parse(localStorage.getItem("mft_user"));
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
