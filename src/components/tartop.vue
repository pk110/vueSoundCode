<template>
  <div class="top">
      <div class="top-container">
        <div class="top-top">
            <img src="./../assets/menu.png" alt="菜单栏" @click="show = !show">
            <p>{{title}}</p>
            <img src="./../assets/sousuo.png" alt="搜索">
        </div>
      </div>
      <div v-if="show" class="box" @click="show = !show"></div>
      <transition name="fade">
            <div v-if="show" class="siderMenu">
                <div class="siderMenu-top">
                    <img src="http://img.hb.aicdn.com/205e439c0a99adcd4ce5a71fd8fbd73a4789633111a8e-9VPTqt_fw658" alt="" class="siderMenu-top-img">
                    <div class="siderMenu-top-list">
                        <p>彭帅哦</p>
                        <img src="./../assets/vip.png" alt="">
                        <div @click="toggleSign">{{sign}}</div>
                    </div>
                </div>
                <div class="siderMenu-list">
                     <ul>
                       <li>
                          <p>个人中心</p>
                          <img src="./../assets/right.png" alt="">
                       </li>
                       <li>
                          <p>个人中心</p>
                          <img src="./../assets/right.png" alt="">
                       </li>
                       <li>
                          <p>个人中心</p>
                          <img src="./../assets/right.png" alt="">
                       </li>
                       <li>
                          <p>个人中心</p>
                          <img src="./../assets/right.png" alt="">
                       </li>
                       <li>
                          <p>个人中心</p>
                          <img src="./../assets/right.png" alt="">
                       </li>
                     </ul>
                </div>
                <div class="siderMenu-bottom">
                   <p>夜间模式</p>
                   <p>设置</p>
                   <p>退出</p>
                </div>
            </div>
      </transition>
  </div>
</template>

<script>
import store from './../store/store'

export default {
    data () {
        return {
            title:'首页',
            sign:'签到',
            show:false
        }
    },		
    methods: {
        toggleSign(){
            this.sign = "已签到"
            // store.dispatch({
            //     type: 'signName'
            // })
        }
    },
    computed: {
        
    },
    components: {
        
    }
}
</script>

<style scoped>
    .siderMenu-bottom{
        position:fixed;
        bottom:0;
        width:250px;
        height:30px;
        box-sizing:border-box;
        padding:0 15px;
        display:flex;
        justify-content:space-between;
        align-items:center;  
        border-top:1px solid #dedede;
    }
    .siderMenu-list{
        display:flex;
        flex-direction:column;
    }
    .siderMenu-list ul li{
        height:30px;
        box-sizing:border-box;
        padding:0 15px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #dedede;
        font-size:14px;
    }
    .siderMenu-list ul li img{
        width:15px;
        height:15px;
    }
    .siderMenu-top{
        box-sizing:border-box;
        padding:20px 15px;
        text-align:left;
        border-bottom:1px solid #dedede;
        background:url(http://img.hb.aicdn.com/cf550a2a89c37cd5a0b9fde7da900f755d8400382590b6-xlWZQ7_fw658) no-repeat;
        background-size:cover;
    }
    .siderMenu-top-img{
        width:50px;
        height:auto;
        border-radius:100%;
    }
    .siderMenu-top-list{
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top:15px;
    }
    .siderMenu-top-list img{
        width:20px;
        height:auto;
    }
    .top-container{
        width:100%;
    }
   .top-top{
       width:100%;
       height:40px;
       position:fixed;
       top:0;
       display:flex;
       justify-content:space-between;
       align-items:center;
       box-sizing:border-box;
       padding:0 15px;
       z-index:99;
   }
   .top-container img{
       width:20px;
       height:auto;
   }
   .siderMenu{
       position:fixed;
       top:0;
       bottom:0;
       left:0;
       width:250px;
       background:#fff;
       z-index:9999;
   }
   .box{
       position:fixed;
       top:0;
       left:0;
       right:0;
       bottom:0;
       z-index:9998;
       background:rgba(0,0,0,0.5);
   }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
        opacity: 0;
    }
</style>


