<template>
      <div class="twoRouter">
          <div class="twoRouter-container-top">
                <ul>
                    <li v-for="(item,index) in items">
                        {{item.city}}-{{index}}
                    </li>
                </ul>
           </div>
          <div class="twoRouter-container-bottom">
                <ul>
                    <li>
                        <router-link to="/between/betweenA">newA</router-link>
                        <router-link to="/between/betweenB">newB</router-link>
                        <router-link to="/between/betweenC">newC</router-link>
                    </li>
                </ul>
          </div>
          <router-view></router-view>
      </div>
</template>
<script>

export default {
    data () {
        return {
            items: [
                { city: '武汉' },
                { city: '北京' },
                { city: '上海' },
                { city: '深圳' },
                { city: '黑龙江' },
                { city: '西藏' },
                { city: '新疆' },
                { city: '十堰' },
                { city: '乌鲁木齐' },
                { city: '浙江' },
                { city: '湖南' }
            ]
        }
    },    
    methods: {
        
    },
    computed: {

    },
    components: {
        
    }
}
</script>
<style>
    .twoRouter-container-top ul{
        width:100%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        overflow-x:auto;
        overflow-y:hidden;
        box-sizing:border-box;
        padding:0 15px;
        background:#99FF99;
    }
    .twoRouter-container-top ul li{
        list-style:none;
        width:52px;
        display:table;
        margin-right:10px;
    }
    .twoRouter-container-bottom ul{
        width:100%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        overflow-x:auto;
        overflow-y:hidden;
        box-sizing:border-box;
        padding:0 15px;
        background:red;
        margin-top:20px;
    }
    .twoRouter-container-bottom ul li{
        width:100%;
        list-style:none;
        display:flex;
        justify-content:space-between;
        align-items:center; 
    }
    .twoRouter-container-bottom ul li a{
        color:#fff;
        text-decoration:none;
    }
</style>