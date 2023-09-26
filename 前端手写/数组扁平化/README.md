1. 利用flat进行处理

   代码实现：

   ```js
   
   function flatArray(nums) {
     return nums.flat(Infinity)
   }
   ```

2. 利用数组转为字符串再转为数组进行处理, 仅适用于字符串数组

   代码实现：

   ```js
   function flatStringArray(nums) {
     return nums.toString().split(',')
   }
   ```

3. 利用深度优先遍历的递归进行处理

   代码实现：

   ```js
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
   ```

4. 利用reduce递归进行处理

   代码实现：

   ```js
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
   ```

5. 利用遍历进行处理

   代码实现：

   ```js
   function flatWhileArray(nums) {
     while(nums.some(Array.isArray)) {
       nums = [].concat(...nums)
     }
     return nums
   }
   ```

   