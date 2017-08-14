<template>
  <div class="loading">
    <div class="photo">
      <div class="rotate"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
  @keyframes rotate360 {
    from {
    transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .loading{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
  .photo{
    margin: 0;
    background-image: url('http://static.kaiyanapp.com/eyepetizer-web/assets/images/detail/loading_out@3x.444b89a3.png');
    background-size: cover;
    height: 48px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rotate{
    margin: 0;
    background-image: url('http://static.kaiyanapp.com/eyepetizer-web/assets/images/detail/loading_in@3x.94a9c4b4.png');
    background-size: cover;
    height: 48px;
    width: 70px;
    animation: rotate360 .5s linear infinite;
  }
</style>
