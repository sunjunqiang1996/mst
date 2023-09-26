
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let arr = [3,2,2,3]
var removeElement = function(nums, val) {
  let len = nums.length
  let i = len - 1
  while(i > -1) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
    i--
  }
  return nums.length
};
removeElement(arr, 3)

var removeElement1 = function(nums, val) {
  let fastPointer = slowPointer = 0
  let flag = false
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[slowPointer] !== val && !flag) {
      fastPointer++
      slowPointer++
      continue
    }
    flag = true
    if (nums[fastPointer] !== val) {
      nums[slowPointer] = nums[fastPointer]
      slowPointer++
    }
    fastPointer++
  }
  return slowPointer
};
removeElement1(arr, 3)
