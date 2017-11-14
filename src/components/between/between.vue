<template>
  <div class="home">
      <!--头部-->
      <tartop></tartop>
      <!--轮播图-->
      <swiper></swiper>
      <!--二级路由-->
      <twoRouter></twoRouter>
      1.懂得vue的二级路由用法<br>
      <br>
      引入cordova来调用摄像头<br>
      
  </div>
</template>

<script>
import tartop from '../tartop'
import swiper from '../swiper'
import twoRouter from '../twoRouter'

export default {
  data () {
    return {

    }
  },
  components: {
    'twoRouter':twoRouter,
    'tartop':tartop,
    'swiper':swiper
  }
}
</script>

<style scoped>
   
</style>