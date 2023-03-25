<template>
  <div :class="$vuetify.breakpoint.mobile ? 'tw-mx-3' : ''">
    <v-img
      class="tw-mx-auto d-flex align-center justify-center"
      contain
      src="/svgs/LogoBlock.svg"
      lazy-src="/svgs/LogoBlock.svg"
      max-width="593px"
    >
      <v-img
        class="tw-mx-auto"
        src="/img/LogoMyFarm.png"
        lazy-src="/img/LogoMyFarm.png"
        :max-width="$vuetify.breakpoint.mobile ? '150px' : '289px'"
        
        contain
      >
      </v-img>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>