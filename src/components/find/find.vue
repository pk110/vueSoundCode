<template>
  <div class="home">
      小型项目开发用<br>
      这个组件也是用来在发现页面进行父传子值得组件<br>
      以下v-bind绑定data里的数据<br>
      <between-a :chidrenGetFatherData = 'fatherData'/>
      <br>
      以下是直接写定值传：
      <between-a chidrenGetFatherData = '这是父组件传给子组件的值(写的定值传进来的)！'/>
      <br>
      <br>
      这个组件是用来监听子组件向父组件传递的值得<br>
      <between-b @fatherGetChildrenData="getChildrenData"/>
      这是孩子传给爸爸的值：{{childrenData}}
      <TarPages></TarPages>
  </div>
</template>

<script>
import TarPages from '../TarPages'
import betweenA from '../betweenA/betweenA'
import betweenB from '../betweenB/betweenB'

export default {
  data () {
    return {
      fatherData:'这是父组件传给子组件的值(从data里传进来的)！',
      childrenData:''
    }
  },
  methods: {
      getChildrenData (data) {
          // data就是子组件传给父的第二参数值
          this.childrenData = data;
      }
  },
  components: {
    'TarPages': TarPages,
    'betweenA': betweenA,
    'betweenB': betweenB
  }
}
</script>

<style scoped>
  .home{
      position: fixed;
      bottom: 60px;
      top: 0;
      overflow-y: auto;
   }
</style>