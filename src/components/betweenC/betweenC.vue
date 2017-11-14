<template>
    <div class="betweenC">
            <br>
            betweeenC组件
            <br>
            二级路由第三页
            <span style="color:red;">{{sign}}</span>
            <br>
            <br>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {

        },
        computed: {
                // 绑定vuex中的home里的sign值
                sign () {
                    // 获取store里的state
                            // return this.$store.state.sign
                    // 这样获取子模块中的数据
                    return this.$store.state.home.sign
                }
            }
        }
</script>