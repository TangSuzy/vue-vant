import Vue from 'vue'
import Router from 'vue-router'
// import Vant from '@/components/Vant'
import Home from '../components/tabbar/home.vue'
import Member from '../components/tabbar/member.vue'
import Cart from '../components/tabbar/cart.vue'
import Search from '../components/tabbar/search.vue'
import Newslist from '../components/subcomponents/Newslist.vue'
import newsInfo from '../components/subcomponents/newsInfo.vue'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    {
      path: '/member',
      name: 'Member',
      component:Member
    },
    {
      path: '/cart',
      name: 'Cart',
      component:Cart
    },
    {
      path: '/search',
      name: 'Search',
      component:Search
    },
    {
      path:'/home/newslist',
      component:Newslist
    },
    {
      path:'/home/newsInfo/:id',
      component:newsInfo
    }
  ]
})