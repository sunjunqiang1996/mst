#### 删除链表中倒数第n个节点

​	![tupian](./1.jpeg)	

#### 什么是链表

​	链表是由一组不必相连【不必相连：可以连续也可以不连续】的内存结构 【节点】，按特定的顺序链接在一起的抽象数据类型。

​	用javascript代码来表示一下上面的链表

```js
const head = {
  value: 1,
  next: head2
}
const head2 = {
  value: 2,
  next: head3
}
const head3 = {
  value: 3,
  next: head4
}
const head4 = {
  value: 4,
  next: head5
}
const head5 = {
  value: 5,
  next: null
}
```

#### 代码

```js

var removeNthFromEnd = function(head, n) {
  let fastPointer = slowPointer = head
  while(n--) {
    fastPointer = fastPointer.next;
  }
  if (!fastPointer) {
    return head.next
  }
  while(fastPointer.next) {
    fastPointer = fastPointer.next
    slowPointer = slowPointer.next
  }
  slowPointer.next = slowPointer.next.next
  return head
};

```

视频地址：https://www.bilibili.com/video/BV1tC4y1Z7SE/