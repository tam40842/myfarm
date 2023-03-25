<template>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCzjDC8loWi1Y8PKorrt5LfjivjvknyWG58zk87PWu5C90NQ/viewform" target="_blank">
    <v-img
      src="/Buttons/button-1.png"
      lazy-src="/Buttons/button-1.png"
      contain
      class="d-flex justify-center align-center ma-2"
      width="290px"
      height="114px"
    >
      <h3 class="text-center btn-text-wd">{{ text }}</h3>
    </v-img>
  </a>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss">

</style>