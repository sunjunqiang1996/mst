/**
 * 1. 从后往前遍历， 利用数组的splice方法删除元素
 */

var removeDuplicates = function(nums) {
  const len = nums.length
  let i = len - 1
  while(i > 0) {
    if (nums[i] === nums[i-1]) {
      nums.splice(i, 1)
    }
    i--
  }
  return nums.length
};

/**
 * 2. 利用快慢指针实现
 */
 var removeDuplicates1 = function(nums) {
  let slowPointer = fastPointer = 1
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[fastPointer] !== nums[fastPointer - 1]) {
      nums[slowPointer] = nums[fastPointer]
      slowPointer++
    }
    fastPointer++
  }
  return slowPointer + 1
};
