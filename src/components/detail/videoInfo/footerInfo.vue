<template>
  <div class="kyt-footer">
    <div class="bottom-logo" @click="redirectHome"></div>
    <img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.243f15a2.png">
    <div class="qr-tips">
      长按二维码关注「开眼 Eyepetizer」微信公众号
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterInfo",
  methods: {
    redirectHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .kyt-footer {
    background: rgba(0,0,0,.4);
    padding: 40px 0 60px;
  }
  .kyt-footer div {
    background-size: cover;
    display: block;
    margin: 0 auto 40px;
  }
  .kyt-footer .bottom-logo {
    background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/bottom_logo@3x.556cae6b.png);
    height: 94px;
    width: 90px;
    cursor: pointer;
  }
  .kyt-footer img {
    display: block;
    margin: 0 auto 20px;
    width: 80px;
  }
  .qr-tips {
    background: transparent;
    color: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
  }
</style>
