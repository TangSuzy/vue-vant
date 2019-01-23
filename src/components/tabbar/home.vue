<template>
  <div>
   <Swiper :imgList='imgList'></Swiper>
    <Gird></Gird>
    
  </div>
</template>

<script>
import Gird from '../subcomponents/news/Gird'
import Swiper from '../subcomponents/news/Swiper'
export default {
  data: () => ({
    imgList: []
  }),
  components:{
    Gird,
    Swiper
  }
  ,
  created() {
    this.getLunBoTu();
  },
  methods: {
    async getLunBoTu() {
      const res = await this.$http.get("api/getlunbo")
      if(res.status ==200){
        this.imgList = res.data.message
      }
    }
  }
};
</script>

<style lang='less' >
.van-swipe {
  height: 211px;
  .demo-swipe {
    img {
      width: 100%;
      height: 100%;
    }
  }
}



</style>