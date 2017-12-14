import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import find from '@/components/find/find'
import between from '@/components/between/between'
import betweenA from '@/components/betweenA/betweenA'
import betweenB from '@/components/betweenB/betweenB'
import betweenC from '@/components/betweenC/betweenC'

Vue.use(Router)

export default new Router({
  routes: [
     // 直接指定首页的页面   以下可以指定任意的path下的路径
    //并且可以有多个如下的操作  比如访问/between路径的时候 直接就访问的/between/betweenA 这样就不存在访问/between里的路由的第一页不加载的问题
    {
      path:'/',
      redirect: '/home'
    },{
      path:'/between',
      redirect: '/between/betweenA'
    },
    {
      // 以根目录为初始显示
      path: '',
      component: home
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/between',
      // 与子路由公用这个组件
      component: between,
      //  菜单的router
      children: [{
        // 第二页的第一个
        // path: '',
        // redirect: '/between/betweenA',
        // component: between

        // between   第一页
        path: '/between/betweenA',
        component: betweenA
      },
      {
        // between   第二页
        path: '/between/betweenB',
        component: betweenB
      },
      {
        // between   第三页
        path: '/between/betweenC',
        component: betweenC
      }]
    }
  ]
})
