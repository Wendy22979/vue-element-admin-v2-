import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'normalize.css/normalize.css' //css重置
import '@/styles/index.scss' // global css


import '@/icons' // icon
import '@/permission' // permission control
import plugins from   "@/plugins.js"   //全局注册插件
Vue.use(plugins)


import 'element-ui/lib/theme-chalk/index.css'
import "@/utils/ElementUi.js"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
