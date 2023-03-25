<template>
  <div>
    <WoodenBlocksLogo @click="$router.push('/')" class="my-5 pointer" />

    <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center">
      <div v-for="(icon, index) in socialIcons" :key="index">
        <WoodenBlocksIcons :to="icon.to" class="my-2" :imgURL="icon.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        { url: "/img/socialIcons/Reddit - Negative.png",
          to: 'https://www.reddit.com/r/mftgame/'
        },
        { url: "/img/socialIcons/Twitter.png", to: 'https://twitter.com/MftFinance' },
        { url: "/img/socialIcons/youtubeLogo.png", to: 'https://www.youtube.com/channel/UCxLExVP88HKZU9Rh5OLvWIg' },
        { url: "/img/socialIcons/Telegram.png", to: 'https://t.me/mftgamechannel' },
        { url: "/img/socialIcons/Medium - Negative.png", to: 'https://mft-finance.medium.com' },
      ],
    };
  },
};
</script>

<style>
</style>