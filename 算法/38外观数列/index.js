/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let res = '1',
    pre = '1'
  for (let i = 2; i < n + 1; i++) {
    // 定义两个变量， 相同的值出现的次数， 目前重复的是哪个值
    let sameNums = 0,
      nowVal = undefined
    res = ''
    for (let key in pre) {
      if (nowVal !== pre[key]) {
        res += nowVal ? `${sameNums}${nowVal}` : '' // 排除undefined的情况
        nowVal = pre[key]
        sameNums = 1
      } else {
        sameNums++
      }
      nowVal = pre[key]
    }
    res += `${sameNums}${nowVal}`
    pre = res
  }
  return res
};

console.log(countAndSay(7))