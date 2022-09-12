import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入路由
import router from '@/router'

Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  //注册路由
  router
}).$mount('#app')
