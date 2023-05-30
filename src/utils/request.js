import axios from 'axios'
import { MessageBox, Message,Loading } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

let  loading

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基地址
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    loading = Loading.service({   //基础封装
      lock: true,
      text: '加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });   //加载loading效果


    if (store.getters.token) {
      config.headers['authorization'] = getToken()
    }
    return config
  },
  error => {
    loading.close();
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    loading.close();
    const res = response.data

    if(res.code !== 200){
      MessageBox.confirm(res.message||res.msg||'Error', '提示', {
        confirmButtonText: '确定',
        type: 'error'
      })
      return Promise.reject(new Error(res.message||res.msg||'Error'))
    }else {
      return res
    }
  },
  error => {
    loading.close();
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
