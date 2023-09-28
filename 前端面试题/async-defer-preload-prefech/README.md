#### async

​	mdn上解释：

​		对于普通脚本，如果存在 `async` 属性，那么普通脚本会被并行请求，并尽快解析和执行。

​		对于模块脚本，如果存在 `async` 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。

​		会阻止文档解析

​	也就是说， 如果script标签上添加了async属性， 那么如果请求的是普通的js文件， 那么会待请求完成后立即执行。

​	如果是模块代码，那么会将模块所有依赖会被放到一个叫做延缓队列的队列中去，依次请求

#### defer

​	MDN 上解释为：

​	这个布尔属性的设置是为了向浏览器表明，该脚本是要在文档被解析后，但在触发DomContentLoad事件之前执行的。

包含 `defer` 属性的脚本将阻塞 `DOMContentLoaded` 事件触发，直到脚本完成加载并执行。

​	包含 `defer` 属性的脚本会按照它们出现在文档中的顺序执行。

#### prefetch

​	其利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档

使用, 在link标签上添加rel属性

```html
<link rel="prefetch" href="/images/big.jpeg" />
```

#### preload

link元素的 [`rel`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#rel) 属性的 `preload` 值允许你在 HTML 的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head) 中声明获取请求，指定页面很快就需要的资源，这些资源是你希望在页面生命周期的早期就开始加载的，早于浏览器的主要渲染机制启动。他不加载和执行脚本，只提供缓存。

​	preload需要配合href 和 as 属性使用

​	href指定资源的地址

​	as指定资源的类型

可以预加载的资源类型

​	audio、document（iframe文档）、embed、fetch、font、image、object、script、style、track、worker、video

可以在 link 标签的type属性中指定加载资源的MIME类型，浏览器会根据其判断如果支持此资源就加载，不支持就忽略。

































