import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index";
import store from "./store/index"
import '@/assets/css/public.css'
//引入自定义指令
require('./directives/index')

//引入上述的index.js
import mycomponents from "@/utils/globalCom.js";
Vue.use(mycomponents);
//引入svg
import './icons'
//挂载到vue实例
import message from '@/components/Message/Message.js'
Vue.prototype.$message = message

import { debounce } from "@/utils/utils"
Vue.prototype.$debounce = debounce

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
