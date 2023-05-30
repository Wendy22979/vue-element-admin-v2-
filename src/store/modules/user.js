import { login, getUserInfo } from "@/api/user.js";
import { setToken, getToken } from "@/utils/auth";
import { getMoveRoute } from "@/utils/moveRoute.js";
import {moveRouterAll}  from  "@/router/index.js"
const state = () => {
  return {
    token: getToken(),
    userInfo:{},
    removeRoute:[],//动态路由
  };
};
const mutations = {};
const actions = {
  // 登录
  async login(commit, data) {
    try {
      let res = await login(data);
      if (res.code === 200) {
        setToken(res.data.token);
      }
    } catch (error) {}
  },
  // 获取动态路由
  async getMoveRoute({state}) {
    try {
      let res = await getUserInfo();
      if(res.code === 200){
        let  list  = getMoveRoute(res.data.authList,moveRouterAll);
        state.userInfo = res.data.userInfo
        state.removeRoute = list
      }
    } catch (error) {}
  },
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
