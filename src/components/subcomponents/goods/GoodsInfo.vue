<template>
  <div class="goodsInfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div ref="ball" v-show="flag" class="ball">
      </div>
    </transition>
    <div class="swipe">
      <Swiper :imgList='imgList'></Swiper>
    </div>
    <div class="des">
      <h3>{{infoList.title}}</h3>
      <div class="title">
        <p class="price">
          <span>市场价格: <em>￥{{infoList.market_price}}</em> </span><span>销售价格:￥{{infoList.sell_price}}</span>
        </p>
        <div class="num">
          <span>购买数量:</span>
          <van-stepper v-model="value" />
        </div>
        <div class="choose">
          <van-button size="small" type="primary">立即购买</van-button>
          <van-button size="small" type="danger" @click="addToCart" :disabled="add">加入购物车</van-button>
        </div>
      </div>
    </div>
    <div class="Info">
      <h3>商品参数:</h3>
      <p>商品货号: {{infoList.goods_no}}</p>
      <p>库存情况: {{infoList.stock_quantity}}</p>
      <p>上架时间: {{infoList.add_time| dateFormat}}</p>
    </div>
  </div>
</template>

<script>
import Swiper from '../news/Swiper.vue'
export default {
  data: () => ({
    imgList:[],
    id:'',
    value:1,
    infoList:[],
    flag:false,
    xDist:0,
    yDist:0,
    add:false
    }),
    created(){
        this.id = parseInt(this.$route.params.id)+100;
        this.getLunBo()
        this.getgoodsInfo()
    },
  methods:{
    async getLunBo(){
      const {data:{message,status}} = await this.$http.get('api/getthumimages/'+this.id)
      if(status===0){
        this.imgList=message
        // console.log(this.imgList)
      }
    },
    async getgoodsInfo(){
      const {data:{message,status}} = await this.$http.get('api/goods/getinfo/'+(this.id-100))
       if(status===0){
        this.infoList=message
      }
    },
    addToCart(){
      this.flag = !this.flag
      this.add = true
      setTimeout(()=>{
        this.add = false
      },1100)
      /* 创建一个数组，将作为参数传给全局函数addToCar */
      let goodsInfo = {
        id: this.id,
        count: this.value,
        price: this.infoList.sell_price,
        selected: true,
        timer: null
      }
      /* 将创建好的数组传给全局函数 */
      this.$store.commit('addToCar',goodsInfo)
    },
    beforeEnter(el){
      el.style.transform = "translate(0)"
    },
    enter(el,done){
      el.offsetWidth
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const cartPosition = document.querySelector('.van-info').getBoundingClientRect()
      this.xDist = cartPosition.left-ballPosition.left;
      this.yDist = cartPosition.top-ballPosition.top;
      el.style.transform = `translate(${this.xDist}px,${this.yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(1,-0.54,.22,.95)";
      done()
    },
    afterEnter(el){
      this.flag = !this.flag;
    }
  },
  components:{
    Swiper
  }
};
</script>

<style lang="less" >
  .goodsInfo{
    position: relative;
    padding: 5px;
    .ball{
      position: absolute;
      opacity: 1;
      width: 15px;
      height: 15px;
      top: 380px;
      left: 140px;
      background-color: #f20;
      z-index: 6;
      border-radius: 50%;
      // transform: translate(0px,0px)
    }
    .swipe{
      padding: 5px 0;
      width: 100%;
      border: 1px dashed #38f;
      box-shadow: 0 2px 2px rgba(0,0,0, .5);
      img{
        width: 70%;
        height: 211px;
        display: block;
        margin: auto;
      }
    }
    .des{
      border: 1px dashed #38f;
      margin-top: 35px;
      h3{
        margin: 0;
        padding-left: 5px;
        border-bottom: 1px solid #ccc;
        line-height: 50px;
        color: blueviolet;
      }
      .title{
        .price{
          font-size: 14px;
          color: #666;
          span:first-of-type{
            margin-left: 10px;
            em{
              font-style: normal;
              text-decoration: line-through;
            }
          }
          span:last-of-type{
            margin-left: 10px;
          }
        }
      }
      .num{
        // position: absolute;
        display: flex;
        padding-left: 10px;
        line-height: 50px;
        span{
          font-size: 15px;
          color: #666;
          margin-right: 11px;
        }
      }
      .choose{
        padding: 10px;
      }
    }
    .Info{
      padding: 10px;
      border: 1px dashed #38f;
      margin-top: 30px;
      h3{
        margin: 0;
        color: #333;
        font-size: 20px;
        line-height: 35px;
        border-bottom: 1px solid #ccc;
      }
      p{
        font-size: 14px;
        color: #666;
        padding-left: 5px;
      }
    }
  }
</style>