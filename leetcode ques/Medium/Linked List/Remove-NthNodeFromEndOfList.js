/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
*/

class ListNode {
    constructor(value, next) {
        this.value = value == undefined ? 0 : value;
        this.next = next == undefined ? null : next;
    }
}

let convertArrToLL = function (arr) {
    let head = new ListNode(arr[0]);
    let pointer = head;

    for (let i = 1; i < arr.length; i++) {
        let node = new ListNode(arr[i]);
        pointer.next = node;
        pointer = pointer.next;
    }
    return head;
}

let head = convertArrToLL([1, 2, 3, 4, 5]);
// console.log(head);

//========ques sol=====
var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode(0, head);
    let low = dummyNode;
    let high = head;

    while (n > 0 && high != null) {
        high = high.next;
        n--;
    }

    while (high != null) {
        high = high.next;
        low = low.next;
    }

    low.next = low.next.next;

    return dummyNode.next;
}

let a = removeNthFromEnd(head, 2);
console.log(a);