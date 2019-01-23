<template>
  <div>
    <div class="photos">
      <h3>{{imgInfo.title}}</h3>
      <div class="title">
        <span>发表时间:{{imgInfo.add_time}}</span>
        <span>点击:{{imgInfo.click}}次</span>
      </div>
      <!-- 缩略图 -->
      <div class="list">
        <div class="imgs" v-for="(item,index) in imgList" :key="item.id" @click="getClick(index)">
          <img :src="item.src" alt="">
        </div>
      </div>
      <p class="content" v-html="imgInfo.content"></p>
      <Comment></Comment>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { Toast } from 'vant';
import Comment from '../news/Comment.vue'
export default {
  data: () => ({
    id: "",
    imgInfo: [],
    imgList:[]
  }),
  created() {
    this.id = this.$route.params.id;
    this.getThumbs();
    this.getImg();
  },
  methods: {
    async getThumbs() {
      const {
        data: { message, status }
      } = await this.$http.get("api/getimageInfo/" + this.id);
      if (status === 0) {
        this.imgInfo = message;
        // console.log(message)
      }else{
         Toast('无数据')
         return
       }
    },
    async getImg(){
       const {data:{message,status}} = await this.$http.get('api/getthumimages/'+ this.id)
       if(status ===0){ 
         this.imgList=message  
       }else{
         Toast('无数据')
         return
       }
    },
    getClick(startPosition){
        let arr = []
        this.imgList.forEach(item=>{
          if(item.src != null){
            arr.push(item.src)
          }
        })
       ImagePreview({
          images: arr,
          startPosition,
        });
    }
  },
    components:{
      Comment
    }
};
</script>

<style lang="less" scoped>
.photos {
  padding: 5px;
  h3 {
    text-align: center;
    color: aquamarine;
    margin: 5px 0;
  }
  .title {
    display: flex;
    justify-content: space-between;
    color: #555;
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid #333;
  }
  .content {
    font-size: 13px;
    text-indent: 2em;
    color: #222;
  }
  .list{
    width: 100%;
    overflow: hidden;
    margin-top: 20px;
    .imgs{
      width: 30%;
      float: left;
      margin-right: 10px;
      img{
        width: 100%;
        height:  120px;
      }
    }
  }
}
</style>