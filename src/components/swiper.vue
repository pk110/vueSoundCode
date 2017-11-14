<template>
  <div class="swiper">
      <div class="swiper-container">
            <swiper :options="swiperOption"  ref="mySwiper">  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="item in items"> 
                    <img :src="item">
                </swiper-slide>   
                <!--轮播图小点-->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
            </swiper>  
      </div>
  </div>
</template>
     
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data () {
        return {
            items:['http://img.hb.aicdn.com/e0e93f66b11fd0ff808c4d8f75f4129a14f5ced6162e3-YN1cGO_fw658',
            'http://img.hb.aicdn.com/68f1243c4d528bff8bc5916a4caf0dcb988b44db47985-LxOo2a_fw658',
            'http://img.hb.aicdn.com/7ea97310a262acbf48950c51ef1d97c9842a840f17ac3-eTgIHg_fw658'],
            swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                direction : 'horizontal',
                effect:"coverflow",
                grabCursor : true,
                setWrapperSize :true,
                // autoHeight: true,
                // paginationType:"bullets",
                pagination : '.swiper-pagination',
                paginationClickable :true,
                // prevButton:'.swiper-button-prev',
                // nextButton:'.swiper-button-next',
                // scrollbar:'.swiper-scrollbar',
                mousewheelControl : true,
                observeParents:true,
                // if you need use plugins in the swiper, you can config in here like this
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                // debugger: true,
                // swiper callbacks
                // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                onTransitionStart(swiper){
                //   console.log(swiper)
                }
                // more Swiper configs and callbacks...
                // ...
            }
        }
    }, 
    //定义这个sweiper对象  
    computed: {  
        swiper() {  
            return this.$refs.mySwiper.swiper;  
        }  
    },  
    mounted () {  
        //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
        //this.swiper.slideTo(0, 0, false);  
    },  
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style scoped>
   .swiper-container{
       width:100%;
       height:200px;
   }
   .swiper-container img{
       width:100%;
       height:200px;
   }
</style>
