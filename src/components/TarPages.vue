<template>
    <div class="bottom">
        <div class="bottom-container">
            <div class="tarbottom">
                <router-link to="/">首页</router-link>
            </div>
            <div class="tarbottom">
                <router-link to="/between">附近</router-link>
            </div>
            <div class="tarbottom">
                <router-link to="/find">发现</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .bottom-container{
        width:100%;
        height:50px;
        position:fixed;
        bottom:0;
        border-top:1px solid #dedede;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:	#E80000;
    }
    .tarbottom a{
        color:#fff;
        text-decoration:none;
    }
</style>