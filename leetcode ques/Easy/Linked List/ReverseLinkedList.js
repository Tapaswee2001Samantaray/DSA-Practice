/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
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

//========sol=========
var reverseList = function (head) {
    // //base condition
    // if (head == null || head.next == null) {
    //     return head;
    // }

    // //general case
    // let reverseLLHead = reverseList(head.next);
    // head.next.next = head;
    // head.next = null;

    // // TC:O(n)
    // // SC:O(n)
    // return reverseLLHead;

    //===========or========
    //using iterative approach
    let prev = null;
    let pointer = head;

    while (pointer != null) {
        let after = pointer.next;
        pointer.next = prev;
        prev = pointer;
        pointer = after;
    }
    return prev;
}

let a = reverseList(head);
console.log(a);