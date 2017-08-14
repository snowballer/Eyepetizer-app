<template>
  <div class="kyt-player">
    <video ref="video" playsinline="true" preload="none" :controls='isPlaying' :src="detailVideoInfo.playUrl"></video>
    <div class="cover"
    :style="{backgroundImage:`url(${detailVideoInfo.coverForDetail})`}"
    v-if="!isPlaying"
    ></div>
    <div class="play-button" v-if="!isPlaying" @click="play"></div>
  </div>
</template>

<script>
export default {
  name: "Player",
  data: () => ({
    isPlaying: false
  }),
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
  },
  methods: {
    play() {
      this.isPlaying = true;
      this.$refs.video.play();
    }
  }
}
</script>

<style scoped>
  .kyt-player {
    background: #000;
    height: 395px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .kyt-player div, .kyt-player video {
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
  }
  .cover {
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .kyt-player .play-button {
    background-color: rgba(0,0,0,.15);
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_play@2x.3b9f9ba5.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 60px 60px;
    cursor: pointer;
    transition: background-color .5s;
  }
  .play-button:hover {
    background-color: rgba(0,0,0,.5);
  }

</style>
