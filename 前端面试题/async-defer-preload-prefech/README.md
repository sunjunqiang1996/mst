#### 什么都不加的情况下

​	如果script标签在body元素上面会影响到文档的解析

​	如果script标签在body元素之下不会影响到文档的解析

#### async

​	MDN解释：对于普通脚本，如果存在 `async` 属性，那么普通脚本会被并行请求，并尽快解析和执行。

​	对于[模块脚本](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)，如果存在 `async` 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。

​	script 标签加上async属性之后，script标签中的脚本不会阻止html文档的解析

​	他的尽快执行要在文档解析之后

#### defer

​	MDN解释：这个布尔属性的设置是为了向浏览器表明，该脚本是要在文档被解析后，但在触发 [`DOMContentLoaded`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/DOMContentLoaded_event) 事件之前执行的。

#### DOMContentLoaded

​	MDN上解释：当 HTML 文档完全解析，且所有延迟脚本（[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script#defer) 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script#module)）下载和执行完毕后，会触发 **`DOMContentLoaded`** 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。

​	`DOMContentLoaded` 不会等待样式表加载，但延迟脚本*会*等待样式表，而且 `DOMContentLoaded` 事件排在延迟脚本之后。此外，非延迟或异步的脚本（如 `<script>`）将等待已解析的样式表加载。

#### defer 和 async的共性

​	都不会阻止文档的解析， 他们都会在文档解析完成之后执行

#### preload

​	MDN解释：link元素的 [`rel`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#rel) 属性的 `preload` 值允许你在 HTML 的 head 中声明获取请求，指定页面很快就需要的资源，这些资源是你希望在页面生命周期的早期就开始加载的，早于浏览器的主要渲染机制启动。这可以确保它们更早可用，并且不太可能阻塞页面的渲染，从而提高性能。尽管名称中包含“load”一词，但它并不加载和执行脚本，而只是安排脚本以更高的优先级进行下载和缓存。

​	preload 不受chrome浏览器最大并行请求数量为6的限制， 不会影响其他资源的正常加载

#### prefetch

​	关键字 **`prefetch`** 作为元素 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link) 的属性 [`rel`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#rel) 的值，是为了提示浏览器，用户未来的浏览有可能需要加载目标资源，所以浏览器有可能通过事先获取和缓存对应资源，优化用户体验。

​	他是在浏览器主线程空闲的时候去请求资源

总结

	1. defer 和 async 控制的是script标签的执行时机， defer和async都是在文档解析完成之后执行，而defer在DOMContentLoaded事件之前， async不一定，看响应时机；
	1. preload 和 prefetch 是link标签上rel属性的值，他们的作用都是预加载资源，他们的不同是preload在文档解析的早期就去加载资源， 而prefetch是在浏览器主线程空闲的时候去加载资源































