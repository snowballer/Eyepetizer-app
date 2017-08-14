<template>
  <section class="divider">
    - {{today}} -
  </section>
</template>

<script>
import moment from 'moment';
export default {
  name: "Divider",
  data: () => ({
    today:moment().format('MMM. D')
  })
}
</script>

<style scoped>
  .divider{
    background: #fff;
    font-family: Lobster,cursive;
    font-size: 16px;
    line-height: 90px;
    text-align: center;
  }
</style>
