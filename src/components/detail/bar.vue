<template>
  <div class="kyt-promotion-bar">
    <img src="http://img.kaiyanapp.com/5b374448f6fe145337ee41d363d436d6.png" @click="redirectHome">
  </div>
</template>

<script>
export default {
  name: "Bar",
  data: () => ({

  }),
  methods: {
    redirectHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .kyt-promotion-bar {
    bottom: 0;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 20;
  }
  .kyt-promotion-bar img {
    bottom: 0;
    height: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    cursor: pointer;
  }
</style>
