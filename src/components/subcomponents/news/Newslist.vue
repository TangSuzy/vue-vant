<template>
  <div>
    <router-link  v-for="item in newslist" :to="'/home/newsInfo/' +item.id" :key="item.id">
      <van-card
        :desc="item.add_time | dateFormat('YYYY-MM-DD')"
        :title="item.title"
        :thumb="'static/gird/preview.jpg'"
      >
        <!-- :num="item.click" -->
        <div slot="footer" class="foot">
          <van-button size="mini">点击{{item.click }}次</van-button>
        </div>
      </van-card>
    </router-link>
  </div>
</template>
<script>
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const res = await this.$http.get("api/getnewslist");
      if (res.data.status === 0) {
        this.newslist = res.data.message;
      }
    }
  }
};
</script>

<style lang="less" >
.van-card {
  font-size: 14px;
  .foot {
    position: absolute;
    top: 45px;
    right: 20px;
  }
}
.van-card__content {
  height: 60px;
  div.van-card__title {
    margin-bottom: 10px;
  }
}
</style>