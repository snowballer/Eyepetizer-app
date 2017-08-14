<template>
  <div class="tag-list-container" v-if="detailVideoInfo.tags===undefined">
    <div class="header">热门标签</div>
    <div class="tag-list">
      <span class="tag" v-for="tag in detailVideoInfo.tags" :key="tag.actionUrl">{{tag.name}}</span>
    </div>
    <Divider />
  </div>
</template>

<script>
import Divider from './divider'

export default {
  name: "TagList",
  data: () => ({

  }),
  components: {
    Divider
  },
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
  .tag-list-container {
    background: rgba(0,0,0,.4);
  }
  .tag-list-container .header {
    padding: 16px 0;
    text-align: center;
  }
  .tag-list {
    padding: 0 37px 16px;
    text-align: center;
  }
  .tag {
    background: hsla(0,0%,100%,.3);
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 3px;
    line-height: 22px;
    margin: 4px;
    padding: 0 6px 0 9px;
  }
</style>
