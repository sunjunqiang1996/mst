/**
 * 利用序列化和反序列化
 * 局限性：
 *  1. 无法实现对函数或者RegExp等特殊对象的克隆
 *  2. 会抛弃对象的contructor属性，
 *  3. 对象循环引用会报错
 */


/**
 * 面试简单版本
 */
function simpleCopy(obj) {
  if (typeof obj !== 'object') return obj
  let copyObj = {}
  if (Array.isArray(obj)) copyObj = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = simpleCopy(obj[key])
    }
  }
  return copyObj
}

const obj = {
  name: 'sjq',
  nums: [1,2,3,4]
}
const copyObj = simpleCopy(obj)
copyObj.nums[1] = 'aa'
console.log(copyObj);
console.log(obj);

/**
 * 进阶版
 * 解决拷贝循环引用
 * 解决拷贝对应原型问题
 */

// 递归拷贝 (类型判断)
function deepClone(value,hash = new WeakMap){
  // 基本数据类型、null、function、symbol、BigInt
  if (typeof value !== 'object' || value === null) return value // value是基本数据类型 -- 直接将其返回
  if (hash.get(value)) return hash.get(value) // 处理循环引用的问题
  if (value instanceof Date) return new Date(value)
  if (value instanceof RegExp) return new RegExp(value)
  const obj = new value.constructor()
  hash.set(value, obj) // object array
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      obj[key] = deepClone(value[key], hash)
    }
  }
  return obj
}
const obj1 = {
  name: 'www',
  age: 18
}
obj1.friend = obj1
const deepObj = deepClone(obj1)
console.log('deepObj')
console.log(deepObj.friend)


