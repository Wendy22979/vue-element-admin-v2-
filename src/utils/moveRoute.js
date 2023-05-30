// 获取动态路由
//引入的类型和方法
import { deepCopy } from './comm.js'

//具体实现动态路由的方法 //  返回的是动态路由  authList权限列表  moveRoutes所有的动态路由, 依据name递归判断的,也可换成url
/***
 *authList格式, 与moveRoutes路由格式一样, 但是某些参数可以不要, children属性, 以及用作判断的属性一定要有, 比如此时使用的name做的判断
 * moveRoutes为所有动态路由组成的数组
 * */
export const getMoveRoute = (authList, moveRoutes) => {
  let  authData = deepCopy(moveRoutes)
  const dataName = getAllName(authList)
  authData =  getAuthRote(dataName, authData)
  return  authData
}

// 递归获取authList的所有name, 这里是使用name对比的,所以提取name
function getAllName(authList) {
  const dataName = []
  for (const key in authList) {
    if (authList[key].children?.length) {
      dataName.push(authList[key].name)
      const arr = getAllName(authList[key].children)
      dataName.push(...arr)
    } else {
      dataName.push(authList[key].name)
    }
  }
  return dataName
}


//根据dataName, 递归生成动态路由, 这里采用先获取全部动态路由, 再剔除的方法去生成最终路由的
function getAuthRote(dataName, authData) {
  for (let i = 0; i < authData.length; i++) {
    const  flag = dataName.some((item)=> item  ===  authData[i].name) 
    if(!flag){
      authData.splice(i,1)
      i--
    }else  {
      if(authData[i].children&&authData[i].children.length>0){
        getAuthRote(dataName,authData[i].children)
      }
    }
  }
  return  authData
}
