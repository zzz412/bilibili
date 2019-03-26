import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
// import qs from 'qs' // 引入qs
import "../public/css/index.css"
import "../public/css/common.css"
import "../public/css/reset.css"
import "../public/js/jquery.min.js"
import "../public/js/jquery.SuperSlide.2.1.3.js"
import "../public/js/danmuplayer.min"

import './plugins/element.js'

axios.defaults.baseURL = 'http://111.230.247.223/SameBWeb/';
axios.defaults.withCredentials = true;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/nav_img.gif'),
  loading: require('./assets/main_pic.jpg'),
  attempt: 1,
  
})
Vue.config.productionTip = false;

// 请求的拦截器

// axios.interceptors.request.use(function (config) {
//   // 判断请求的类型
//   // 如果是post请求就把默认参数拼到data里面
//   // 如果是get请求就拼到params里面
//   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   if (config.method === 'post') {
//     config.data = qs.stringify({
//       origin: window.location.origin,
//       ...config.data,
//     })
//   } else if (config.method === 'get') {
//     config.params = {
//       origin: window.location.origin,
//       ...config.params
//     }
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// })

Vue.prototype.axios = axios;

router.beforeEach((to, from, next) => {
  /* 页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  axios.get('xyuser/findSession.do').then(rs => {
    if (!(JSON.stringify(rs.data) === "{}")) {
      store.commit('setuser', rs.data.xyuser);
    }
    /* 判断该路由是否需要登录权限 */
    if (to.matched.some(record => record.meta.requireAuth)) {
      axios.get('xyuser/findSession.do').then(rst => {
        if (JSON.stringify(rst.data) === "{}") {
          router.push({
            name: "login"
          })
          next(false);
        } else {
          next();
        }
      })
    } else {
      next();
    }
  })

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')