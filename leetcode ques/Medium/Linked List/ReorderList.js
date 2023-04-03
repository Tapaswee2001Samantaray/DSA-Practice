/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
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

var reorderList = function (head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let reverseHead = reverseHalfList(slow.next);

    slow.next = null;

    let head1 = head;
    let head2 = reverseHead;

    while (head2 != null) {
        let after = head1.next;
        head1.next = head2;
        head1 = head2;
        head2 = after;
    }
    return head;
};


let reverseHalfList = function (head) {
    let curr = head;
    let prev = null;

    while (curr != null) {
        let after = curr.next;
        curr.next = prev;
        prev = curr;
        curr = after;
    }
    return prev;
}

let a = reorderList(head);
console.log(a);