/**
 * @param {number[]} nums
 * @return {number}
 */
//  var removeDuplicates = function(nums) {
//   const len = nums.length;
//   let i = len - 1
//   while(i) {
//       if (nums[i] === nums[i - 1]) nums.splice(i, 1);
//       i--
//   }
//   return nums.length
// };

var removeDuplicates = function(nums) {
  const len = nums.length;
  let j = 1
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i]
      j++
    }
  }
  return j
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
