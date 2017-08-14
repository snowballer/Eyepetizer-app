<template>
  <div id="app">
    <router-view :key="this.$router.history.current.params.id"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body, html {
    height: 100%;
  }
  body {
    font-family: Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
    margin: 0;
    font-size: 13px;
    line-height: 1.5;
    background: #333;
  }
  button {
    border: 0;
    outline: none;
  }
  a {
    text-decoration: none;
  }
  #app{
    height: 100%;
  }
</style>
