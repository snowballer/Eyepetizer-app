<template>
  <div class="kyt-download-area">
    <div class="logo"></div>
    <a href="https://lkme.cc/3rC/uQykMzPKI">
      <button></button>
    </a>
  </div>
</template>

<script>
export default {
  name: "Download"
}
</script>

<style scoped>
  .kyt-download-area {
    background: rgba(0,0,0,.3);
    height: 70px;
    position: relative;
    z-index: 10;
  }
  button{
    background: none;
    border: none;
  }
  .kyt-download-area button, .kyt-download-area div {
    background-size: cover;
    padding: 0;
    position: absolute;
  }
  .kyt-download-area .logo {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/logo_launch@3x.ff359b72.png);
    height: 44px;
    left: 8px;
    top: 12px;
    width: 174px;
  }
  .kyt-download-area button {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/btn_launch@3x.950ac618.png);
    height: 33px;
    right: 12px;
    top: 18px;
    width: 86px;
  }
</style>
