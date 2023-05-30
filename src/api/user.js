import request from '@/utils/request'


// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}


// 获取用户信息和动态路由
export const getUserInfo = ()=>{
   return request({
    url:'/userInfo'
   })
}