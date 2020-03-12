import Vue from 'vue'
// 适配 
import 'lib-flexible'
import App from './App.vue'
// 引入路由
import router from './router'
// 生成Vuex管理
import store from './store'
import * as API from './api'
// 使用图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$API = API
Vue.use(VueLazyload)
// 懒加载相应配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './common/errorImg/error.jpg',
  loading: './common/Loadingimg/loading.jpg',
  attempt: 1
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')