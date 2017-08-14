<template>
  <div class="image-list">
    <img v-for="(gallery,index) in gallerys" :key="gallery" :src="gallery"
    :class="{hide:index !== playingIndex}">
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data: () => ({
    playingIndex:0,
    gallerys:[
      '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg',
      '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg',
      '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg',
      '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg',
      '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg',
      '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg',
      '//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg'
    ]
  }),
  mounted() {
    let index = 0;
    setInterval(
      ()=>{
        this.playingIndex = index;
        index = index === this.gallerys.length - 1 ? 0 : ++index
      },8000)
  }
}
</script>

<style scoped>
  @keyframes playGallery{
    0% {
    transform: translateZ(0);
    }
    100% {
      transform: translate3d(-5%, -2%, 0);
    }
  }
  .image-list{
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -200;
  }
  img{
    overflow: hidden;
    width: 120%;
    opacity: 1;
    transition: all 1.25s;
    position: absolute;
    animation: playGallery 8s ease infinite alternate;
  }
  img.hide {
    opacity: 0;
  }
</style>
