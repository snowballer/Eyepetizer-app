<template>
  <section class="download" @click="changeModalState">
    <div class="intro"></div>
    <div class="image-list">
      <div class="icon"></div>
      <div class="logo"></div>
      <div class="download-button-list">
        <button class="ios" @click.stop='modalIOS'></button>
        <button class="android" @click.stop='modalAndroid'></button>
      </div>
    </div>
    <Android v-if="modalState.android"/>
    <AppleIOS v-if="modalState.ios"/>
  </section>
</template>

<script>
import Android from './modal/android'
import AppleIOS from './modal/appleios'

export default {
  name: "Download",
  components: {
    Android,
    AppleIOS
  },
  data: () => ({
    modalState:{
      android:false,
      ios:false
    }
  }),
  methods: {
    modalAndroid() {
      this.modalState.android = true;
    },
    modalIOS(){
      this.modalState.ios = true;
    },
    changeModalState(){
      this.modalState.android =false;
      this.modalState.ios = false;
    }
  }
}
</script>

<style scoped>
  .download {
    padding: 60px 0;
    background: #fff;
  }
  .intro {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 428px;
    height: 22px;
    margin: 0 auto 50px;
    width: 428px;
  }
  .image-list {
    font-size: 0;
    margin: 0 auto;
    width: 482px;
    display: flex;
    align-items: center;
  }
  .icon,.logo {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
    background-repeat: no-repeat;
    margin-right: 50px;
  }
  .icon {
    background-position: 0 40.79045%;
    background-size: 428px;
    border: 1px solid #888;
    border-radius: 20px;
    height: 100px;
    width: 100px;
  }
  .logo {
    background-position: 0 95.2381%;
    background-size: 642px;
    height: 75px;
    width: 120px;
  }
  .download-button-list {
    height: 120px;
    position: relative;
    width: 162px;
  }
  button {
    background: none;
    border: none;
    height: 52px;
    position: absolute;
    width: 162px;
  }
  .ios,.android {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
    background-repeat: no-repeat;
    background-size: 642px;
  }
  .ios {
    background-position: 0 28.49707%;
    top: 0;
  }
  .android {
    background-position: 0 14.3136%;
    bottom: 0;
  }
  @media screen and (max-width: 1024px){
    .intro {
      background-image: url('//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png');
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 285px;
      height: 15px;
      width: 285px
    }
    .image-list {
      display: flex;
      flex-direction: column;
      width: 162px
    }
    .image-list>div{
      display: block;
    }
    .icon,.logo {
        margin: 0 0 30px
    }
    .android,.ios {
        left: 0
    }
  }
</style>
