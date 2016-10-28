/**
 * app
 */
import Vue from 'Vue';
import Layout from './pages/layout.vue'; //载入组件
import router from './router'; //初始化路由
import filter from './filter'; //初始化过滤器
const app = new Vue({
  router,
  render:createElement=>createElement(Layout)
}).$mount('#page');