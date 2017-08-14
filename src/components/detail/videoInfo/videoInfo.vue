<template>
  <div class="video-info">
    <PlayerInfo />
    <Divider />
    <Download />
    <Divider />
    <RelateList />
    <Divider />
    <ReplyList />
    <Divider />
    <TagList />
    <FooterInfo />
    <Blur />
  </div>
</template>

<script>
import PlayerInfo from './playerInfo'
import Download from './download'
import Divider from './divider'
import RelateList from './relateList'
import ReplyList from './replyList'
import TagList from './tagList'
import FooterInfo from './footerInfo'
import Blur from './blur'

export default {
  name: "Container",
  components:{
    PlayerInfo,
    Download,
    Divider,
    RelateList,
    ReplyList,
    TagList,
    FooterInfo,
    Blur
  }
}
</script>

<style scoped>
  .video-info{
    position: relative;
  }
</style>
