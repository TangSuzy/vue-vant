<template>
  <div>
    <h3 class="fabiao">发表评论</h3>
    <textarea placeholder="请输入你要评论的内容" v-model="msg"></textarea>
    <van-button class="btn" type="primary" @click="PostComment">提交评论</van-button>
    <div v-for="(item,index) in commList" :key="index">

        <div class="user">
            <span>第{{index+1}}楼</span>
            <span>用户:{{item.user_name}}</span>
            <span>发表时间:{{item.add_time}}</span>
        </div>
        <p class="content">{{item.content}}</p>
    </div>
    <van-button class="btn more" plain type="danger" @click="getmore">{{doMore}}</van-button>
</div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data: () => ({
    pageindex: 0,
    commList: [],
    doMore:'加载更多',
    limit:3,
    msg:''
  }),
  props: {
    id: {
      type: String
    }
  },
  created() {
    // this.getComment();
    this.getmore()
  },
  methods: {
    async getComment() {
      const {data: { status, message}} = await this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}&limit=${this.limit}`);
      if(status===0 && message.length>0){
        // console.log(message[0].id)
        this.commList = this.commList.concat(message)
        if(message.length<this.limit){
          this.doMore = '已经到底了'
        }
      }else{
        this.doMore = '已经到底了'
        return
      }
    },
   getmore(){
     this.pageindex++
     this.getComment()
    },
    async PostComment(){
      if(this.msg.trim() === ''){
         Toast('评论不能为空')
         return;
      }
      const {data:{status}} = await this.$http.post('api/postcomment/'+this.id,{
        content:this.msg.trim()
      })
      if(status===0){
        var cmt = {
            user_name: "匿名用户",
            content: this.msg.trim()
          };
        this.commList.unshift(cmt);
        this.msg=''
      }
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  width: 95%;
  display: block;
  margin: auto;
}
.more {
  margin-top: 15px;
}
.user {
  width: 95%;
  margin: 15px auto 0;
  height: 30px;
  font-size: 13px;
  color: #444;
  line-height: 30px;
  background-color: #ccc;
}
.content {
  width: 95%;
  margin: auto;
  line-height: 35px;
  padding-left: 20px;
  color: #444;
  font-size: 14px;
  box-sizing: border-box;
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
   color: #555;
 }
 .fabiao{
   margin: 0;
   padding: 0;
   padding-left: 10px;
   margin-top: 10px;
   color: #555;
 }
</style>