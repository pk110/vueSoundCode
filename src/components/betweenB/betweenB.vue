<template>
    <div class="betweenB">
        二级路由第二页
        <div style="width:200px;height:40px;text-align:center;line-height:40px;color:red;border:1px solid orange;border-radius:5px;margin:20px auto;" @click="childrenPostFatherData">子传父值</div>  
    </div>
</template>

<script>
export default {
  data () {
    return {
        mydata:'这是孩子的信息给爸爸传递的！'
    }
  },
  methods: {
      childrenPostFatherData(){
          this.$emit('fatherGetChildrenData',this.mydata);
      }
  },
  computed: {
      
    }
}
</script>

<style scoped>
   
</style>