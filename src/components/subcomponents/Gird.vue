<template>
  <div class="demo-icon">
    <router-link class="van-col" v-for="item in list" :key='item.id' :to="item.path" >
      <i class="van-icon">
        <img :src="item.imgUrl" alt>
      </i>
      <span>{{item.title}}</span>
    </router-link>
  
  </div>
</template>

<script>
export default {
  data: () => ({
    list:[
      {id:'1',path:'/home/newslist',title:'定位服务',imgUrl:'static/gird/menu1.png'},
      {id:'2',path:'',title:'点餐服务',imgUrl:'static/gird/menu2.png'},
      {id:'3',path:'',title:'商品管理',imgUrl:'static/gird/menu3.png'},
      {id:'4',path:'',title:'充值服务',imgUrl:'static/gird/menu4.png'},
      {id:'5',path:'',title:'精彩点评',imgUrl:'static/gird/menu5.png'},
      {id:'6',path:'',title:'菜单分类',imgUrl:'static/gird/menu6.png'},
    ]
  })
};
</script>

<style lang="less">
.demo-icon {
  font-size: 0;
  padding-top: 10px;
}

.demo-icon-list {
  padding-top: 10px;
  box-sizing: border-box;
  min-height: calc(100vh - 65px);
}

.demo-icon .van-col {
  float: none;
  width: 33.33333%;
  text-align: center;
  // height: 100px;
  display: inline-block;
  vertical-align: middle;
  img{
    width: 60px;
    height: auto;
  }
}

.demo-icon .van-col span {
  display: block;
  padding: 0 5px;
  font-size: 15px;
  font-family: '楷体';
  line-height: 14px;
}

.demo-icon .van-icon {
  font-size: 32px;
  margin: 15px 0;
  color: #455a64;
}
</style>