<template>
  <div class="video-cover-blurred" :style="{backgroundImage:`url(${detailVideoInfo.coverBlurred})`}"></div>
</template>

<script>
export default {
  name: "Blur",
  created() {
    const ID = this.$router.history.current.params.id;
    this.$store.dispatch('fetchVideoInfo',{
      $http:this.$http,
      id: ID
    });
  },
  computed:{
    detailVideoInfo() {
      return this.$store.getters.fetch_detailVideoInfo
    }
  }
}
</script>

<style scoped>
  .video-cover-blurred {
    background-position: 50%;
    background-size: 100% 100%;
    height: 100%;
    position: absolute;
    top: 0;
    transform: rotate(180deg) scaleX(-1);
    width: 100%;
    z-index: -10;
  }
</style>
