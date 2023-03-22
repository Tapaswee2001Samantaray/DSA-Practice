/*
Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
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

let calculateListLength = function (head) {
    let length = 0;
    let pointer = head;

    while (pointer != null) {
        pointer = pointer.next;
        length++;
    }
    return length;
}

var rotateRight = function (head, k) {
    if (head == null || head.next == null) {
        return head;
    }

    let listLength = calculateListLength(head);

    k = k % listLength;
    if (k == 0) {
        return head;
    }

    let tail = head;
    let newTail = head;

    while (tail.next != null) {
        if (listLength - k > 1) {
            newTail = newTail.next;
            k++;
        }
        tail = tail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;

    return newHead;
}

let a = rotateRight(head, 2);
console.log(a);