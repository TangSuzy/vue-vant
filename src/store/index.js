import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

/* 获取localStorage中的cart数据，如果是第一次获取，就设置为空数组 */
let cart = JSON.parse(localStorage.getItem('cart') || '[]')
export default new Store({
  state:{
    cart:cart
  },
  mutations:{
    /* 设置全局添加商品函数 */
   addToCar(state,goodsInfo){
     let flag = false;
     /* 遍历cart对象数组  */
     state.cart.some(item=>{
       if(item.id == goodsInfo.id){
         item.count += parseInt(goodsInfo.count)
         flag = true
         return true
       }
     })
     if(!flag){
       state.cart.unshift(goodsInfo)
     }
     localStorage.setItem('cart',JSON.stringify(state.cart))
   }
  },
  getters:{
    /* 返回localStorage中的商品的总个数 */
    getAllCount(state){
      let c = 0;
      state.cart.forEach(item=>{
        c += item.count
      }) 
      return c
    }
  }
})