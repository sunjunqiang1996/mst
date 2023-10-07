#### compose

​	compose是函数式编程很重要的函数之一， 他的作用是组合函数，将多个函数串联起来执行，一个函数的输入作为另外一个函数的输出。

#### compose函数的应用

​	compose函数的作用就是将单个功能的函数组合成为复杂功能的函数

​	例如： 

​		将给定的为数字的字符串四舍五入， 首先我们需要先使用parseFloat函数将其转为数字， 再使用Math.round方法， 将其做四舍五入的操作，然而这时候我们可以将这两步操作组合起来成为一个函数。如下面这样：

```js
const strNum = '3.1415926'
const data = parseFloat(strNum)
const res = Math.round(data) // 输出 3

// 如果我们使用compose函数将其改写将成为
const composeRound() = compose(Math.round, parseFloat)
// 先执行parseFloat函数将参数转为数字， 然后将转换后的结果传给Math.round方法 实现同样的效果
const res1 = composeRound(strNum) // 输出 3
```

compose实现

```js

```



​	











