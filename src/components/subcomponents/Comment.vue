<template>
  <div>
    <div v-for="(item,index) in commList" :key="index" >
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
export default {
  data: () => ({
    pageindex: 0,
    commList: [],
    doMore:'加载更多',
    limit:3,
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
  line-height: 40px;
  color: #333;
}
</style>