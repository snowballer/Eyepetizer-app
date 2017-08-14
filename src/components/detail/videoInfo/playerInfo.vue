<template>
  <div class="playerinfo">
    <h1>{{detailVideoInfo.title}}</h1>
    <div class="kyt-divider-short"></div>
    <p>{{detailVideoInfo.category}} / {{dateFormatter(detailVideoInfo.duration * 1000)}}</p>
    <p class="description">{{detailVideoInfo.description}}</p>
  </div>
</template>

<script>
import { dateFormatter } from '../../../utils'

export default {
  name: "PlayerInfo",
  data: () => ({
    dateFormatter
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
  }
}
</script>

<style scoped>
  .playerinfo {
    background: rgba(0,0,0,.2);
    padding: 15px;
    padding-bottom: 4px;
  }
  .playerinfo h1 {
    font-size: 20px;
    margin: 0;
    margin-bottom: 7px;
    line-height: 1.5;
  }
  .kyt-divider-short {
    width: 40px;
    height: 1px;
    background: #fff;
    margin-bottom: 7px;
  }
  .playerinfo p {
    margin: 0;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  .description {
    margin-bottom: 11px;
    opacity: .85;
  }
</style>
