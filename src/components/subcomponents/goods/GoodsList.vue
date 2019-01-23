<template>
  <div class="goodslist">
      <ul class="imgList">
        <router-link v-for="item in goodsList" :to="'/goodslist/goodsInfo/'+item.id" :key="item.id" tag="li">
          <img v-lazy="item.img_url" alt="">
          <h3>{{item.title}}</h3>
          <div class="goodsInfo">
            <p>{{item.zhaiyao}}</p>
            <div class="price">
              <span>￥{{item.sell_price}}</span><span>￥{{item.market_price}}</span>
            </div>
            <div class="hotSell"><span>热卖中</span> <span>剩{{item.stock_quantity}}件</span></div>
          </div>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageindex:1,
    limit:2,
    goodsList:[]
    }),
  created(){
    this.getgoods()
  },
  methods:{
    async getgoods(){
      const {data:{status,message}} = await this.$http.get('api/getgoods?pageindex='+this.pageindex+'&limit='+this.limit)
      if(status===0){
        this.goodsList = message
        // console.log(this.goodsList);
      }
    }
  }
};
</script>

<style lang="less"  scoped>
  .goodslist{
    padding: 5px;
    .imgList{
      display: flex;
      justify-content: space-between;
      width: 100%;
      list-style: none;
      flex-wrap:wrap;
      // background-color: #ededed;
      li{
        float: left;
        display: flex;
        padding: 4px;
        width: 48%;
        // height: 310px;
        border: 1px solid #333;
        margin: 5px 0;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        img{
          width: 100%;
          height: auto;
        }
        h3{
          font-size: 20px;
          color: blueviolet;
        }
        .goodsInfo{
          background-color: #ededed;
            p{
              color: #555;
              font-size: 12px;
              padding: 0 4px;
            }
          .price{
            margin: 0;
            padding:0 5px;
          
            span:first-of-type{
              font-size: 22px;
              color: #f20;
            }
            span:last-of-type{
              color: #666;
              font-size: 14px;
              margin-left: 5px;
              text-decoration: line-through;
            }
          }
          .hotSell{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #555;
            padding: 3px;
          }
        }
      }
    }
  }
</style>