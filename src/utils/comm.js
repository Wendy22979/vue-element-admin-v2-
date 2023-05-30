
/***
 * 对象数组去重
 * arr  格式[{index:1},{index:2}]
 * item  格式  string  为arr每一个项中的去重依据属性
*/
export function  objectArrDeWeight(arr,item){
  let  res  = new Map()
  return arr.filter(value=> !res.has(value[item])&&res.set(value[item],1))
}

// 数组去重
export function  arrDeWeight(arr){
 let  res = []
 return arr.filter(value=>!(res.indexOf(value)!= -1)&&res.push(value))
}

// 判断是否为空对象
export const isVaildObject = (obj) => {
  return typeof obj === 'object' && !Array.isArray(obj) && Object.keys(obj).length
}

// 深拷贝,局限性, 只能是对象或者数组, 类数组可能不行
export function deepCopy(arr) {
  const data  =  arr instanceof  Array? []:{}
  for (const key in arr) {
    if(arr[key] instanceof  Function){
      data[key] = arr[key]
    }else if (arr[key] instanceof Object) {
      const children = deepCopy(arr[key])
      data[key] = children
    }  else {
      data[key] = arr[key]
    }
  }
  return data
}


