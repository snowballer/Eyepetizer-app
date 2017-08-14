<template>
  <div>
    <div v-if="detailVideoInfo&&detailVideoList&&detailReplyList">
      <div class="kyt-container">
        <Player />
        <VideoInfo />
      </div>
      <Bar />
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import Player from './player'
import VideoInfo from './videoInfo/videoInfo'
import Bar from './bar'
import Loading from './loading'

export default {
  name: "Detail",
  components: {
    Player,
    VideoInfo,
    Bar,
    Loading
  },
  created() {
    window.scrollTo(0, 0)
  },
  computed:{
    detailVideoInfo() {
      return this.$store.getters.fetch_detailVideoInfo
    },
    detailVideoList() {
      return this.$store.getters.fetch_detailVideoList
    },
    detailReplyList() {
      return this.$store.getters.fetch_detailReplyList
    }
  }
}
</script>

<style scoped>
  .kyt-container {
    margin: 0 auto;
    max-width: 700px;
    overflow: hidden;
    color: #fff;
  }
</style>
