<template>
  <div class="home">
      <!--顶部 -->
      <tartop></tartop>
      <!--轮播图 -->
      <swiper></swiper>
      <!--底部
      <TarPages></TarPages> 
      -->
      <div style="width:200px;height:40px;text-align:center;line-height:40px;color:red;border:1px solid orange;border-radius:5px;margin:20px auto;" @click="getData">点击获取vuex传过来的数据</div>
      <div style="width:200px;height:40px;text-align:center;line-height:40px;color:red;border:1px solid orange;border-radius:5px;margin:20px auto;" @click="addData">点击改变vuex的数据再获取sign就是改变后的值</div>
      <div style="width:200px;height:40px;text-align:center;line-height:40px;color:red;border:1px solid orange;border-radius:5px;margin:20px auto;">上面点击变化的值是：{{sign}}</div>           
      检测是不是通过在父组件改变store里的数据 会不会在子组件里取store相同的值 而这个值也发生了变化<br>
      如果是 则可以不用管子组件传父组件值 父组件传子组件值 而是公用一个数据树 不过方便的时候也可以通过<br>
      属性props值来进行父子组件之间的数据传输<br>
      <between-c />


      1.搞懂vuex与vue的交互<br>
      2.包括一级路由、点击事件、安装插件、建立实例等<br>
      3.搞懂从vuex中取数据进行数据交互(methods、computed的用法)<br>
      4.搞懂怎么改vuex中的数据<br>
      5.搞懂vue的ajax用法(本地调试存在跨域问题，实际项目不影响，只要搞懂用法就行)<br>

      // react的a标不是像vue一样 可以跳到其他页面 a标签跳到设置的路由下
      <router-link to="/find">跳到发现页面下</router-link><br>
      {{a}}<br>
      <div style="width:200px;height:40px;text-align:center;line-height:40px;color:red;border:1px solid orange;border-radius:5px;margin:20px auto;" @click="getApi">点击获取api数据</div>
  </div>
</template>

<script>
import tartop from '../tartop'
import swiper from '../swiper'
import betweenC from '../betweenC/betweenC'
// import TarPages from '../TarPages'
import store from './../../store/store'

export default {
  data () {
    return {
      a:1
    }
  },    
  methods: {
    // 点击获取vuex中的数据
    getData(){
      store.dispatch({
        type: 'getData'
      })
    },
    // 点击改变 home里的sign
    addData(){
        return this.$store.state.home.sign = '改变的大帅比';
    },
    // 获取store.js里的方法
    getApi(){
      store.dispatch({
        type: 'getApi'
      })
    }
    // 点击请求接口  这种是小型项目里用这种方式  直接在每个组件里写
		// getApi(){
		// 	this.$fetch('http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000')
		// 		.then(function (response) {
		// 		console.log(response);
		// 	})
		// 		.catch(function (error) {
		// 		console.log(error);
		// 	});
		// }
  },
  computed: {
    // 绑定vuex中的home里的sign值
      sign () {
        // 获取store里的state
				// return this.$store.state.sign
        // 这样获取子模块中的数据
        return this.$store.state.home.sign
			}
  },
  components: {
    'tartop':tartop,
    // 'TarPages':TarPages,
    'swiper':swiper,
    'betweenC': betweenC
  }
}
</script>

<style scoped>
   .home{
      position: relative;
      bottom: 40px;
      overflow-y: auto;
      overflow:hidden;
   }
</style>
