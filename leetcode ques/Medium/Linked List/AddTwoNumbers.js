/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of 
their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
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

let convertArr2ToLL = function (arr) {
    let head = new ListNode(arr[0]);
    let pointer = head;

    for (let i = 1; i < arr.length; i++) {
        let node = new ListNode(arr[i]);
        pointer.next = node;
        pointer = pointer.next;
    }
    return head;
}

let head1 = convertArr1ToLL([2, 4, 3]);
let head2 = convertArr2ToLL([5, 6, 4]);
// console.log(head1,head2);

//=====sol====
var addTwoNumbers = function (l1, l2) {
    let dummyNode = new ListNode(0);
    let pointer = dummyNode;
    let carry = 0;

    while (l1 || l2 || carry) {
        //new value
        let sum = (l1 ? l1.value : 0) + (l2 ? l2.value : 0) + carry;
        carry = Math.floor(sum / 10);
        sum %= 10;
        pointer.next = new ListNode(sum);

        //update pointers
        pointer = pointer.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        // l1 = l1.next
        // l2 = l2.next
    }
    return dummyNode.next;
}

let a = addTwoNumbers(head1, head2);
console.log(a);