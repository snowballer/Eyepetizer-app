<template>
  <main>
    <section class="video" v-for="video in homeVideoList" :key="video.id" :style="{backgroundImage:`url(${video.coverForFeed})`}"
    @click="redirectDetail(video.id)">
        <div class="cover"></div>
        <div class="title">{{video.title}}</div>
        <div class="meta"># {{video.category}} / {{dateFormatter(video.duration * 1000)}}</div>
    </section>
  </main>
</template>

<script>
import { dateFormatter } from '../../utils'

export default {
  name: "VideoList",
  data: () => ({
    dateFormatter
  }),
  created() {
    this.$store.dispatch('fetchHomeFeed',{
      $http:this.$http
    })
  },
  computed:{
    homeVideoList() {
      return this.$store.getters.fetch_homeVideoList
    }
  },
  methods: {
    redirectDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>
  .video {
    background-position: 50%;
    background-size: cover;
    color: #fff;
    cursor: pointer;
    height: 450px;
    position: relative;
    text-align: center;
  }
  .cover {
    background: rgba(0,0,0,.4);
    height: 100%;
    position: absolute;
    transition: background .6s;
    width: 100%;
  }
  .video:hover .cover{
    background: transparent;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    transform: translateY(-24px);
    position: absolute;
    top: 50%;
    width: 100%;
  }
  .meta{
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(12px);
  }
  @media screen and (max-width: 1024px){
    .video {
        height: 225px
    }
    
  }
</style>
