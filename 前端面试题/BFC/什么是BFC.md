#### 什么是BFC

​	BFC（Block Formatte Context）块级格式化上下文

​	MDN上解释为他是Web页面的可视css渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素和其他元素交互的区域。

​	BFC是一个隔离的区域， 内部元素的布局，不会影响外部元素的布局

#### 什么情况下会触发BFC

​	1、 根元素

​	2、 浮动元素

​	3、 绝对定位元素（absolute 和 fixed）

​	4、行内块级元素（inline-block）

​	5、表格单元格 （display 为 table-cell 的元素）

​	6、overflow为hidden 或者 auto的元素

​	7、contain值为layout、content、paint的元素

​	8、弹性盒子

等...

#### BFC解决了什么

1. 包含内部浮动

2. 排除外部浮动

   正常文档流中建立的BFC不得与元素本身所在的块级格式化上下文中的任何浮动的外边距重叠， 也就是说如果一个元素中有浮动元素，另外一个元素没有建立BFC， 那么他们的外边距是有重叠的情况的

3. 方式相邻元素margin重叠

视频地址：https://www.bilibili.com/video/BV13j411C7tJ/?vd_source=e46930c75b1a49af929af7ae8772c6d3































