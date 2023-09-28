
Array.prototype.myMap = function(callback, argThis) {
  const originArr = this
  const resultArr = []
  for (let i = 0, len = originArr.length; i < len; i++) {
    // map 回调函数三个参数 此时元素的值, 此时的索引, 数组本身
    const eleI = callback.call(argThis, originArr[i], i, originArr)
    resultArr.push(eleI)
  }
  return resultArr
}

const arr = [1,2,3,4,5,6,7]
const obj = {
  name: 'sjq'
}
const newArr = arr.myMap(function(item) {
  return item + this.name
}, obj)

const newArrMap = arr.map(function(item) {
  return item + this.name
}, obj)
console.log(newArr);
console.log(newArrMap);

