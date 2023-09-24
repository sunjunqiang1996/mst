
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
