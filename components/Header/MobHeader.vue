<template>
  <div>
    <!-- <v-navigation-drawer
      v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      color="#cc7c0a"
      fixed
      app
    >
      <v-list color="#cc7c0a">
        <v-list-item
          :to="item.to"
          target="_blank"
          v-for="(item, i) in items"
          :key="i"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title
              class="white--text custom-font"
              v-text="item.name"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <div
      class="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-[100vh] tw-bg-[#333333b0] tw-z-[999]"
      v-if="$vuetify.breakpoint.mobile && drawer"
    >
      <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-8">
        <div class="tw-w-[48px] tw-mb-10" @click.stop="drawer = !drawer">
          <v-img
            src="/menu/menu-close.svg"
            class="test"
            alt="menu-close"
          ></v-img>
        </div>
        <div class="mobheader-exact" @click="drawer = !drawer">
          <nuxt-link to="/" class="tw-flex tw-flex-col tw-relative tw-mb-4">
            <v-img src="/menu/frame.svg"></v-img>
            <div
              class="text-shadow text-navigation tw-absolute tw-top-[50%] tw-left-[50%] tw-text-2xl tw-text-white tw-opacity-40"
              style="transform: translate(-50%, -50%)"
            >
              Home
            </div>
          </nuxt-link>
        </div>

        <div class="mobheader-exact" @click="drawer = !drawer">
          <nuxt-link
            to="/marketplace"
            class="tw-flex tw-flex-col tw-relative tw-mb-4"
          >
            <v-img src="/menu/frame.svg"></v-img>
            <div
              class="text-shadow text-navigation tw-absolute tw-top-[50%] tw-left-[50%] tw-text-2xl tw-text-white tw-opacity-40"
              style="transform: translate(-50%, -50%)"
            >
              Marketplace
            </div>
          </nuxt-link>
        </div>

        <div class="mobheader-exact" @click="drawer = !drawer">
          <a
            href="/whitepaper.pdf"
            target="_blank"
            class="tw-flex tw-flex-col tw-relative tw-mb-4"
          >
            <v-img src="/menu/frame.svg"></v-img>
            <div
              class="text-shadow text-navigation tw-absolute tw-top-[50%] tw-left-[50%] tw-text-2xl tw-text-white tw-opacity-40"
              style="transform: translate(-50%, -50%)"
            >
              Whitepaper
            </div>
          </a>
        </div>

        <div class="mobheader-exact-2" @click="drawer = !drawer" v-if="user">
          <nuxt-link
            to="/dashboard"
            class="tw-flex tw-flex-col tw-relative tw-mb-4"
          >
            <v-img src="/menu/frame.svg"></v-img>
            <div
              class="text-shadow text-navigation tw-absolute tw-top-[50%] tw-left-[50%] tw-text-2xl tw-text-white tw-opacity-40"
              style="transform: translate(-50%, -50%)"
            >
              Dashboard
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <v-app-bar
      v-if="$vuetify.breakpoint.mobile"
      color="transparent"
      :clipped-left="clipped"
      class="elevation-0"
      hide-on-scroll
      fixed
      height="90px"
    >
      <!-- Will only render on mobile -->
      <v-app-bar-nav-icon color="#cc7c0a" @click.stop="drawer = !drawer" />

      <v-spacer></v-spacer>

      <MetamaskConnect class="ma-0" />

      <v-spacer></v-spacer>
      <div v-if="user" @click="$nuxt.$emit('open-contact-form')">
        <v-img src="/menu/menu-mft.svg"> </v-img>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
    };
  },
  watch: {},
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.mobheader-exact .nuxt-link-exact-active .text-navigation {
  opacity: 1 !important;
}

.mobheader-exact-2 .nuxt-link-active .text-navigation {
  opacity: 1 !important;
}
</style>
