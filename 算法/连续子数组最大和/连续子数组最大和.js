function getSubArrayMaxNum(nums) {
  let max = maxi_1 = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    let maxi = undefined
    if (maxi_1 > 0) {
      maxi = maxi_1 + nums[i]
    } else {
      maxi = nums[i]
    }
    maxi_1 = maxi
    max = Math.max(max, maxi)
  }
  return max
}
// 1. 青蛙跳台阶问题
/**
 * 一只青蛙每一次可能会跳一节台阶，也有可能跳两节，跳到第n节台阶有多少种跳法
 * [1, 2, 3, 5, ....]
 */
function qwttj(n) {
  let numi_2 = 1, numi_1 = 2
  // n节的可能性就是 numn_1 + numn_2
  for (let i = 3; i <= n; i++) {
    let numi = numi_2 + numi_1
    numi_2 = numi_1
    numi_1 = numi
  }
  return numi_1
}
// console.log(qwttj(5))


// 2. 斐波那契数列
/**
 * [1, 1, 2, 3, 5, 8,...]
 */

 function fbnq(n) {
  let numi_2 = numi_1 = 1
  // n节的可能性就是 numn_1 + numn_2
  for (let i = 3; i <= n; i++) {
    let numi = numi_2 + numi_1
    numi_2 = numi_1
    numi_1 = numi
  }
  return numi_1
}
console.log(fbnq(4))
