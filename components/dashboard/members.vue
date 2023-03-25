<template>
  <div
    class="d-flex flex-column align-center mx-2 default-text-color pointer-simple"
  >
    <div class="d-flex align-center justify-end eclipse-container">
      <div
        id="level"
        class="eclipse d-flex align-center justify-center custom-font-2 default-text-color"
        style="font-size: 10px"
      >
        <span>{{ count }}</span>
      </div>
    </div>

    <v-avatar size="52px">
      <v-img
        v-if="avatar == null"
        src="/dashboard/members/member-1.png"
        lazy-src="/dashboard/members/member-1.png"
        max-width="52px"
        height="52px"
        alt="member"
      ></v-img>
      <v-img
        v-else
        :src="avatar"
        :lazy-src="avatar"
        max-width="52px"
        height="52px"
        alt="member"
      ></v-img>
    </v-avatar>

    <!-- <div
      class="
        rect
        tw-text-xs
        d-flex
        align-center
        justify-center
        custom-font-2
        default-text-color
      "
    >
      24K
    </div> -->
    <span class="custom-font-2 tw-text-sm text-center">{{
      truncateAddress(name, "address")
    }}</span>
  </div>
</template>

<script>
export default {
  props: ["name", "avatar", "img", "count"],
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
.eclipse-container {
  width: 100%;
  max-width: 52px;
  position: relative;
  top: 15px;
  z-index: 1;
  left: 8px;
}
.eclipse {
  height: 24px;
  width: 24px;
  border-radius: 20px;
  background-color: white;
}
.rect {
  width: 52px;
  height: 20px;
  background: #ffffff;
  border-radius: 10px;
  bottom: 9px;
  position: relative;
}
</style>
