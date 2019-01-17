// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,NavBar,Tabbar, TabbarItem,Swipe, SwipeItem} from 'vant';

// import Resource from 'vue-resource'
// Vue.use(Resource)

/* 使用axios */
import axios from 'axios'
/* 需要将axios挂载到vue原型上 */
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(NavBar)
.use(Button)
.use(Tabbar)
.use(TabbarItem)
.use(Swipe)
.use(SwipeItem)
;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:c=>c(App)
})
