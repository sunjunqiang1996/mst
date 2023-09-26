/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let fastPoniter = slowPointer = head;
  let lastPointer = null;
  while(--k > 0) fastPoniter = fastPoniter.next;
  // 翻转一次
  while(fastPoniter.next) {
    if (lastPointer === null || slowPointer === lastPointer.next) {
      let nowPointer = fastPoniter.next
      let nextPointer = slowPointer;
      while(nextPointer !== slowPointer.next) {
        const nnPointer = nextPointer.next
        nextPointer.next = nowPointer
        nowPointer = nextPointer
        nextPointer = nnPointer
      }
      head = lastPointer === null ? fastPoniter : head
      if (lastPointer) lastPointer.next = fastPoniter
      lastPointer = slowPointer
      slowPointer = fastPoniter
      fastPoniter = lastPointer
    }
    slowPointer = slowPointer.next
    fastPoniter = fastPoniter.next
  }
  return head
};

const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
}

reverseKGroup(head, 2);

