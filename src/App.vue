<template>
  <div class="app">
      <van-nav-bar class="header" title="Vue-vant项目" left-text="返回" fixed left-arrow @click-left="onClickLeft" />
      <!-- <div>111</div> -->
      <transition>
        <router-view></router-view>
      </transition>
      <van-tabbar v-model="active">
          <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item to="/member" icon="user-o" >会员</van-tabbar-item>
          <van-tabbar-item to="/cart" icon="shopping-cart-o" id="cart" :info="$store.getters.getAllCount">购物车</van-tabbar-item>
          <van-tabbar-item to="/search" icon="search" dot>搜索</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: 'App',
  data:()=>({
    active:0
  }),
  methods:{
    onClickLeft(){
      // Toast('hello')
      // window.history.go(-1);
      this.$router.go(-1)
    }
  },
  components:{
  }
}
</script>

<style lang="less" >
  .app{
    padding-top: 46px;
    overflow-x: hidden;
    padding-bottom: 60px;
  }
  .header{
    background-color: skyblue;
  }
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    position: absolute;
    opacity: 0;
    transform:translateX(-100%);
    left:-200%;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
  .v-enter-to,
  .v-leave{
    opacity: 1;
  }
</style>
