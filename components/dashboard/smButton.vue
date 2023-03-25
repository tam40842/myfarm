<template>
  <div class="sm-btn d-flex justify-center align-center">
    <span
      :class="classes"
      class="tw-text-base custom-font tw-font-semibold text-shadow"
    >
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["text", "classes"],
};
</script>

<style lang="scss" scoped>
.sm-btn {
  background-image: url("../../static/dashboard/smButton.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 124px;
  height: 35px;
}

.text-shadow {
  text-shadow: -2px -2px 0 #741e00, 2px -2px 0 #741e00, -2px 2px 0 #741e00,
    2px 2px 0 #741e00;
  color: white;
}

.sm-btn.lazy {
  background-image: none;
  background-color: #f1f1fa;
}
</style>
