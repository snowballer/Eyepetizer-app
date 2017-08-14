<template>
  <header class="banner" @click="changeModalState">
    <div class="menu">
      <button class="wechat" @click.stop='modalWeChat'></button>
      <a target="_blank" href="//weibo.com/eyepetizer">
        <button class="weibo"></button>
      </a>
      <a href="mailto:bd@eyepetizer.net">
        <button class="email"></button>
      </a>
    </div>
    <div class="content">
      <div class="logo"></div>
      <div class="intro"></div>
      <div class="download-button-list">
        <button class="ios" @click.stop='modalIOS'></button>
        <button class="android" @click.stop='modalAndroid'></button>
      </div>
      <div class="entry-button">
        <a target="_blank" href="http://open.eyepetizer.net/#!/landing">
          <button class="audit"></button>
          <p>作者入口</p>
        </a>
      </div>
    </div>
    <div class="cover"></div>
    <div class="bannervideo" v-if="isShowVideo">
      <video autoplay loop  poster="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_poster.43ddf261.jpg" src="//static.kaiyanapp.com/eyepetizer-web/homepage.mp4">
      </video>
    </div>
    <Gallery v-else />
    <Android v-if="modalState.android"/>
    <AppleIOS v-if="modalState.ios"/>
    <WeChat v-if="modalState.wechat"/>
  </header>
</template>

<script>
import Android from './modal/android'
import AppleIOS from './modal/appleios'
import WeChat from './modal/wechat'
import Gallery from './gallery'

export default {
  name: "Banner",
  components: {
    Android,
    AppleIOS,
    WeChat,
    Gallery
  },
  data: () => ({
    isShowVideo:true,
    modalState:{
      android:false,
      ios:false,
      wechat:false
    }
  }),
  created() {
    this.isShowVideo = !(window.innerWidth <= 1024)
  },
  mounted() {
    window.onresize=()=>{
      this.isShowVideo = !(window.innerWidth <= 1024)
    }
  },
  methods: {
    modalAndroid() {
      this.modalState.android = true;
    },
    modalIOS(){
      this.modalState.ios = true;
    },
    modalWeChat(){
      this.modalState.wechat = true;
    },
    changeModalState(){
      this.modalState.android =false;
      this.modalState.ios = false;
      this.modalState.wechat = false;
    }
  }
}
</script>

<style scoped>
  .banner{
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .menu {
    font-size: 0;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
  }
  .wechat,.weibo,.email{
    background: none;
    background-image: url(http://static.kaiyanapp.com/eyepetizer-web/assets/images/sprite_share.bc0f4494.png);
    background-repeat: no-repeat;
    background-size: 36px;
    opacity: .7;
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 0 8px;
  }
  .wechat {
    background-position: 0 -26px;
  }
  .weibo {
    background-position: 0 -63px;
  }
  .email {
    background-size: 54px;
    background-position: 0 0;
  }
  .content div {
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
  }
  .logo {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
    background-repeat: no-repeat;
    background-size: 642px;
    background-position: 0 81.02435%;
    height: 225px;
    top: 30%;
    width: 180px;
  }
  .intro {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
    background-repeat: no-repeat;
    background-size: 642px;
    background-position: 0 55.5773%;
    height: 54px;
    top: 54%;
    width: 351px;
  }
  .download-button-list {
    font-size: 0;
    height: 52px;
    top: 67%;
  }
  .android,.ios {
    background: none;
    border: none;
    height: 52px;
    margin: 0 14px;
    opacity: .9;
    transition: opacity .3s;
    width: 162px;
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
    background-repeat: no-repeat;
    background-size: 642px;
  }
  .ios {
    background-position: 0 21.40534%;
  }
  .android {
    background-position: 0 7.22186%;
  }
  .entry-button {
    height: 52px;
    margin-top: 120px;
    top: 67%;
  }
  .audit {
    background: none;
    border: none;
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 642px;
    height: 53px;
    margin: 0 14px;
    opacity: .4;
    transition: opacity .3s;
    width: 220px;
    cursor: pointer
  }
  p {
    margin: 0;
    position: absolute;
    font-size: 14px;
    text-align: center;
    pointer-events: none;
    color: #fff;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 52px;
    letter-spacing: 4px;
  }
  .cover {
    background: rgba(0,0,0,.4);
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -10;
  }
  .bannervideo{
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -100;
  }
  video {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 1024px){
    .logo{
      background-size: 428px;
      height: 150px;
      top: 28%;
      width: 120px;
    }
    .intro {
        background-position: 0 55.5773%;
        background-size: 528.59829px;
        height: 44px;
        top: 54%;
        width: 289px
    }
    .download-button-list {
        height: 124px;
        top: 77%;
        width: 162px
    }
    .download-button-list button {
        margin: 0;
        position: absolute
    }
    .download-button-list button.android {
        bottom: 0
    }
    .video-container,.entry-button {
        display: none
    }
  }
</style>
