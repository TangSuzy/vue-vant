<template>
  <div class="carts">
    <div class="cartchose">
      <div class="switch">
        <van-switch v-model="checked"/>
      </div>
      <div class="cartInfo">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="'static/gird/preview.jpg'"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: true,
    cartList:[]
  }),
  methods:{
    getMessage(){

    }
  }
};
</script>

<style lang="less">
.carts {
  padding: 10px;
  box-sizing: border-box;
  .cartchose {
    display: flex; // justify-content: space-between;
    .switch {
      line-height: 70px;
      box-sizing: border-box;
    }
    .cartInfo {
      width: 100%;
     .van-card{
       height: 70px;
       .van-card__content{
         height: 70px;
       }
     }
    }
  }
}
</style>