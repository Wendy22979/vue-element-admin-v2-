const path = require("path");
/*＊＊＊＊＊＊＊＊＊＊＊＊＊动态读取读取@/components/GlobalComponent/下组件＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊*/
const comFiles = require.context(
  "@/components/GlobalComponent/",
  true,
  /\.vue$/
);
const comFilesModule = {};
comFiles.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  comFilesModule[name] = comFiles(key).default||comFiles(key);
});
/*＊＊＊＊＊＊＊＊＊＊＊＊＊读取filter文件夹下过滤器＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊*/
const filterFiles = require.context(
  "@/filters/",
  true,
  /\.js$/
);
const filterFilesModule = {};
filterFiles.keys().forEach((key) => {
  let  modules = filterFiles(key)
  for(let  keyName in  modules){
    filterFilesModule[keyName] = modules[keyName]
  }
});
/*＊＊＊＊＊＊＊＊＊＊＊＊＊读取directives文件夹下自定义指令＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊*/
const directiveFiles = require.context(
  "@/directives/",
  true,
  /\.js$/
);

const directiveModule = {};
directiveFiles.keys().forEach((key) => {
  let  modules = directiveFiles(key)
  for(let  keyName in  modules){
    directiveModule[keyName] = modules[keyName]
  }
});


// 全局注册插件
export default {
  install(Vue) {
    // 全局组件自动注册
    for (let key in comFilesModule) {
      console.log(key)
      Vue.component(key, comFilesModule[key]);
    }

    //全局注册过滤器
    for(let  key  in  filterFilesModule){
      Vue.filter(key,filterFilesModule[key])
    }

     //全局注册自定义指令
    for(let  key  in  directiveModule){
      Vue.directive(key,directiveModule[key])
    }


  },
};
