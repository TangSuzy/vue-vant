<template>
  <div>
    <h3 class="title">{{newsInfo.title}}</h3>
    <div class="bd">
      <span class="time">发表时间：{{newsInfo.add_time}}</span>
      <span class="click">{{newsInfo.click}}次</span>
    </div>
    <h3 class="fabiao">发表评论</h3>
    <textarea :placeholder="newsInfo.content"></textarea>
    <van-button class="btn" type="primary">提交评论</van-button>
    <Comment :id = "id"></Comment>
    
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  data: () => ({
    id:'',
    newsInfo:[]
  }),
  created(){
    this.id =this.$route.params.id
    this.getNewsInfo()
  },
  methods:{
    async getNewsInfo(){
      const {data:{status,message}} = await this.$http.get('api/getimageInfo/'+this.id)
      if(status===0){
        this.newsInfo = message
        // console.log(this.newsInfo)
      }
    }
  },
  components:{
    Comment
  }
};
</script>

<style lang="less" scoped>
  .title{
    padding: 0;
    margin: 5px 0;
    text-align: center;
    font-family: '楷体';
    font-size: 18px;
    color: coral;
  }
 .bd{
    color: skyblue;
    .time{
    font-size: 13px;
    margin-left: 10px;
    }
    .click{
      font-size: 13px;
      float: right;
      font-family: '楷体';
      margin-right: 10px;
    }
 }
 textarea{
   width: 95%;
   display: block;
   height: 88px;
   font-size: 14px;
   text-indent: 2em;
   outline: none;
   resize: none;
   margin: 10px auto;
   border: 1px solid #ccc;
   padding-left: 10px;
   box-sizing: border-box;
 }
 .btn{
   width: 95%;
   display: block;
   margin: auto;
 }
 .fabiao{
   margin: 0;
   padding: 0;
   padding-left: 10px;
   margin-top: 10px;
   color: #555;
 }
 
</style>