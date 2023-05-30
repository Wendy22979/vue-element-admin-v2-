import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)


// 自动读取modules中的.js文件
let   path   =  require('path')
let files =  require.context("./modules/",true, /\.js$/)
const module =  {}
files.keys().forEach(key =>{
   const name =  path.basename(key,".js")
   module[name] = files(key).default || files.key
})
console.log(module,"module")



const store = new Vuex.Store({
  modules: {
    ...module
  },
  getters
})


export default store
