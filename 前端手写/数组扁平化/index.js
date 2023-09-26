/**
 *  1. 利用flat进行处理
 */
const arr = [1,2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
function flatFn(arr) {
  return arr.flat(Infinity)
}
console.log('flatFn');
console.log(flatFn(arr));
/**
 * 2. 利用数组转为字符串， 再转成数组进行处理
 */

function flatStringFn(arr) {
  return arr.toString().split(',')
}
console.log('flatStringFn');
console.log(flatStringFn(arr));

/**
 * 3. 利用深度优先遍历的递归实现
 */
function flatDeepFn(arr) {
  const res = []
  fn(arr)
  function fn(arr1) {
    for (let i = 0, len = arr1.length; i < len; i++) {
      if (Array.isArray(arr1[i])) {
        res.push(...flatDeepFn(arr1[i]))
      } else {
        res.push(arr1[i])
      }
    }
  }
  return res
}
console.log('flatDeepFn');
console.log(flatDeepFn(arr));

/**
 * 4. 利用reduce函数实现
 */
function flatReduceFn(arr) {
  function fn(arr1) {
    return arr1.reduce((preVal, nowVal) => {
      if (Array.isArray(nowVal)) {
        preVal.push(...fn(nowVal))
      } else {
        preVal.push(nowVal)
      }
      return preVal
    }, [])
  }
  return fn(arr)
}
console.log('flatReduceFn');
console.log(flatReduceFn(arr));

/**
 * 5. 利用迭代实现
 */
function flatWhileFn(arr) {
  while(arr.some(Array.isArray)) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log('flatWhileFn');
console.log(flatWhileFn(arr));
