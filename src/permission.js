import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/404"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // 进度条
  NProgress.start();

  // 设置头
  document.title = getPageTitle(to.meta.title);

  // 获取token
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      if (
        Object.keys(store.getters.userInfo).length == 0 ||
        store.getters.removeRoute.length === 0
      ) {
        await store.dispatch("user/getMoveRoute");
        // 生成动态路由
        router.addRoutes([...store.state.user.removeRoute,{ path: "*", redirect: "/404", hidden: true }]);
        next({ ...to,replace:true})
      } else {
        next()
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      //跳转地址在白名单中
      next();
    } else {
      //非白名单
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
