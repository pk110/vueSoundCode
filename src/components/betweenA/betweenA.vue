<template>
     <div class="betweenA">
            下面的这个sign是检测在大型项目的时候store里的值是共享的
            {{sign}}<br>
            二级路由的第一页<br>
            <div style="width:200px;height:40px;text-align:center;line-height:40px;color:red;border:1px solid orange;border-radius:5px;margin:20px auto;" @click="getFatherData">父传子值</div>
            <p style="color:green;">该值绑定的是props:{{chidrenGetFatherData}}</p><br>
     </div>
</template>

<script>
export default {
  data () {
    return {
        
    }
  },
//   属性这里必须得和父组件的名字一致才行
  props:['chidrenGetFatherData'],
  methods: {
      getFatherData () {
         alert(this.chidrenGetFatherData)
      }
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

<style scoped>
   
</style>