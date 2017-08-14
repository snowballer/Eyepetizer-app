<template>
  <div id="home">
    <Banner />
    <Divider />
    <VideoList />
    <Download />
    <FooterInfo />
  </div>
</template>

<script>
import Banner from './banner'
import Divider from './divider'
import VideoList from './videoList'
import Download from './download'
import FooterInfo from './FooterInfo'

export default {
  name: "Home",
  created() {
    window.scrollTo(0, 0)
  },
  components:{
    Banner,
    Divider,
    VideoList,
    Download,
    FooterInfo
  }
}
</script>

<style scoped>
  #home{
    height: 100%;
  }
</style>
