<template>
  <footer>
    <ul>
      <li><a href="mailto:bd@eyepetizer.net?subject=[意见反馈]">意见反馈</a></li>
      <li><a href="http://www.eyepetizer.net/agreement.html">用户协议</a></li>
      <li><a href="http://www.eyepetizer.net/right.html">权利声明</a></li>
      <li><a href="mailto:bd@eyepetizer.net?subject=[商务合作]">商务合作</a></li>
      <li><a href="http://www.eyepetizer.net/positions.html">加入我们</a></li>
      <li><a href="http://www.eyepetizer.net/about_us.html">关于我们</a></li>
    </ul>
    <ul>
      <li><span>© 开眼 Eyepetizer 2015 - 2017</span></li>
      <li><a href="http://www.miitbeian.gov.cn/">京 ICP 备16030848 号</a></li>
      <li><a href="http://www.miitbeian.gov.cn/">京 ICP 证161038 号</a></li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: "FooterInfo"
}
</script>
<style scoped>
  footer {
    background: #444;
    font-size: 12px;
    padding: 55px 10px;
  }
  ul{
    color: #fff;
    font-size: 0;
    margin: 0 0 10px;
    padding: 0;
    text-align: center;
  }
  li{
    display: inline-block;
    font-size: 12px
  }
  li:after{
    content: "·";
    position: relative;
  }
  li:last-child:after {
    content: "";
	}
  a{
    color: inherit;
  }
</style>
