<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item v-for="item in imgList" :key="item.img" class="demo-swipe">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
    <Gird></Gird>
    
  </div>
</template>

<script>
import Gird from '../subcomponents/Gird'
export default {
  data: () => ({
    imgList: []
  }),
  components:{
    Gird
  }
  ,
  created() {
    this.getLunBoTu();
  },
  methods: {
    getLunBoTu() {
      this.$http.get("http://localhost:5000/api/getlunbo").then(res => {
        this.imgList = res.data.message;
      });
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