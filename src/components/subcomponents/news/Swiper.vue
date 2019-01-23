<template>
   <van-swipe :autoplay="3000" indicator-color="white" class="van-swipe">
      <van-swipe-item v-for="item in imgList" :key="item.img" class="demo-swipe">
        <img :src="item.img || item.src" alt>
      </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
  data: () => ({

    }),
    props:['imgList']
};
</script>

<style  scoped>

</style>