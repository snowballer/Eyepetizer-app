<template>
  <div class="relate-video-list">
    <div class="relate-video" v-for="video in detailVideoList" :key="video.id" @click="redirect(video.id)">
      <div class="photo" :style="{backgroundImage:`url(${video.coverForDetail})`}"></div>
      <div class="meta">
        <div class="title">{{video.title}}</div>
        <div class="category"># {{video.category}} / {{dateFormatter(video.duration * 1000)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormatter } from '../../../utils'

export default {
  name: "RelateList",
  data: () => ({
    dateFormatter
  }),
  created() {
    const ID = this.$router.history.current.params.id;
    this.$store.dispatch('fetchVideoList',{
      $http:this.$http,
      id: ID
    });
  },
  computed:{
    detailVideoList() {
      return this.$store.getters.fetch_detailVideoList
    }
  },
  methods: {
    redirect(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>
  .relate-video-list {
    background: rgba(0,0,0,.4);
    padding: 20px 15px 10px;
  }
  .relate-video {
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
  }
  .photo{
    background-position: 50%;
    background-size: cover;
    border: 1px solid hsla(0,0%,100%,.3);
    padding-top: 25%;
    width: 40%;
  }
  .meta {
    left: 40%;
    margin-left: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .meta .title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .meta .category {
    font-size: 13px;
    opacity: .85;
  }
</style>
