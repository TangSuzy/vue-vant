<template>
 <div>
    <van-tabs v-model="active" @click="getImgUrl(active)">
        <van-tab v-for="item in category" :title="item.title" :key="item.id">
        </van-tab>
    </van-tabs>
    <router-link v-for="img in imageList" :to="'/home/photoinfo/'+img.id" :key="img.id">
        <img v-lazy="img.img_url">
    </router-link>
</div>
</template>

<script>
import { Toast } from 'vant';
export default {
  
  data: () => ({
    category:[],
    active:0,
    imageList:[]
    }),
  created(){
    this.getimgcategory()
    this.getImgUrl(1)
  },
  methods:{
    async getimgcategory(){
      const {data:{message,status}} = await this.$http.get('api/getimgcategory')
      // console.log(message)
      if(status===0){
        message.unshift({title:'全部',id:0})
        this.category = message
      }else{
        Toast('获取数据失败')
      }
    },
    async getImgUrl(id){
      const {data:{status,message}} = await this.$http.get('api/getimages/'+id)
      this.imageList=message
    }
  }
};
</script>

<style  scoped>
img{
  width: 100%;
  height: auto;
}

</style>