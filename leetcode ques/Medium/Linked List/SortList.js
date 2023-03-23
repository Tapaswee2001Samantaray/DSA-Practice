/*
Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
 

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
*/

class ListNode {
    constructor(value, next) {
        this.value = value == undefined ? 0 : value;
        this.next = next == undefined ? null : next;
    }
}

let convertArr1ToLL = function (arr) {
    let head = new ListNode(arr[0]);
    let pointer = head;

    for (let i = 1; i < arr.length; i++) {
        let node = new ListNode(arr[i]);
        pointer.next = node;
        pointer = pointer.next;
    }
    return head;
}

let head = convertArr1ToLL([4, 2, 1, 3]);
// console.log(head);

//============sol==========

let merge = function (list1, list2) {
    let dummyNode = new ListNode(0);
    let current = dummyNode;

    while (list1 != null && list2 != null) {
        if (list1.value < list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    while (list1 != null) {
        current.next = list1;
        list1 = list1.next;
        current = current.next;
    }

    while (list2 != null) {
        current.next = list2;
        list2 = list2.next;
        current = current.next;
    }
    return dummyNode.next;
}

var sortList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    let slow = head;
    let fast = head;
    let previous = null;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        previous = slow;
        slow = slow.next;
    }
    previous.next = null;

    let l1 = sortList(head);
    let l2 = sortList(slow);

    return merge(l1, l2);
}

let a = sortList(head);
console.log(a);