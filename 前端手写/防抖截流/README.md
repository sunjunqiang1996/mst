#### 什么是防抖和截流

​	防抖和截流都是懒执行的一种形式

​	防抖(debounce)基本思想是将多个动作合并成一个动作

​	截流(throttle)基本思想单位时间内只能触发一次动作

#### 为什么需要防抖和截流函数(应用场景)

##### 防抖

	1. 用户在输入框中连续输入一串字符后，只会在输入完后去执行最后一次的查询请求
	1.  window的resize、scroll事件，不断地调整浏览器的窗口大小或者滚动时会触发对应事件，防抖让其只触发一次

##### 截流

	1. 如resize, touchmove, mousemove, scroll... 这些连续不断地触发某事件，在单位时间内只触发一次
	1. 在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间发一次请求，而不是在用户停下滚动页面操作时才去请求数据

#### 防抖和截流函数的实现

##### 防抖

```js
Function.prototype.debounce = function(time = 3000) {
    const thisFunc = this
    let timer = null
    return function() {
      const args = Array.from(arguments)
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        thisFunc(...args)
      }, time)
    }
  }
```

##### 截流

```js
Function.prototype.throttle = function(time = 3000) {
    const thisFunc = this
    let timer = null
    return function() {
      if (timer) return
      const args = Array.from(arguments)
      thisFunc(...args)
      timer = setTimeout(() => {
        timer = null
      }, time)
    }
  }
```

















