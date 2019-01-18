// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,NavBar,Tabbar, TabbarItem,Swipe, SwipeItem,Card } from 'vant';

// import Resource from 'vue-resource'
// Vue.use(Resource)
// /* 配置vue-resource的全局根路径 */
// Vue.http.options.root = 'http://localhost:5000/'

/* 使用axios */
import axios from 'axios'
/* 需要将axios挂载到vue原型上 */
Vue.prototype.$http = axios
/* 配置axios全局根路径 */
axios.defaults.baseURL = 'http://localhost:5000/'

/* 设置事件过滤器 */
import moment from 'moment'
Vue.filter('dateFormat',(date,arg="YYYY-MM-DD HH:mm:ss")=>{
  return moment(date).format(arg)
})

Vue.config.productionTip = false
Vue.use(NavBar)
.use(Button)
.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
.use(Card)
;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:c=>c(App)
})
