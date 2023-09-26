
/**
 * 利用flat进行处理
 */
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
function flatArray(nums) {
  return nums.flat(Infinity)
}

console.log('flatArray');
console.log(flatArray(arr));

/**
 * 利用数组转为字符串再转为数组进行处理, 仅适用于字符串
 */

function flatStringArray(nums) {
  return nums.toString().split(',')
}
console.log('flatStringArray');
console.log(flatStringArray(arr));

/**
 * 利用深度优先遍历的递归进行处理
 */

function flatDeepArray(nums) {
  const res = []
  function fn(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!Array.isArray(arr[i])) {
        res.push(arr[i])
      } else {
        res.push(...flatDeepArray(arr[i]))
      }
    }
  }
  fn(nums)
  return res
}
console.log('flatDeepArray');
console.log(flatDeepArray(arr));

/**
 * 利用reduce递归进行处理
 */

function flatReduceArray(nums) {
  return nums.reduce((preVal, nowVal) => {
    if (!Array.isArray(nowVal)) {
      preVal.push(nowVal)
    } else {
      preVal.push(...flatReduceArray(nowVal))
    }
    return preVal
  }, [])
}

console.log('flatReduceArray');
console.log(flatReduceArray(arr));

/**
 * 利用遍历进行处理
 */

function flatWhileArray(nums) {
  while(nums.some(Array.isArray)) {
    nums = [].concat(...nums)
  }
  return nums
}
console.log('flatWhileArray');
console.log(flatWhileArray(arr));
