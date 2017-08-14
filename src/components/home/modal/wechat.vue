<template>
  <div id="model">
    <div class="content">
      <img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg">
      <div>
        扫描二维码<br>
        关注「开眼」微信公众号<br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeChat"
}
</script>

<style scoped>
  #model{
    background: rgba(0,0,0,.4);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    text-align: center;
    z-index: 10;
    opacity: 1;
    transition: opacity .3s;
  }
  .content {
    padding-bottom: 20px;
    width: 300px;
    background: #fff;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
    z-index: 1000;
    opacity: 1;
    transition: all .6s;
  }
  a{
    color: inherit;
  }
  img{
    max-width: 100%;
  }
</style>
