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
     // 直接指定首页的页面
    {
      path:'/',
      redirect: '/home'
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
