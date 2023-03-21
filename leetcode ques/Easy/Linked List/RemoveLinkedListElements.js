/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return 
the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
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

let head = convertArrToLL([1, 2, 6, 3, 4, 5, 6]);
// console.log(head);

//====sol=========
var removeElements = function (head, val) {
    if (head == null) {
        return head;
    }

    let pointer = head;
    while (pointer.next != null) {
        if (pointer.next.value == val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }

    if (head.value == val) {
        head = head.next;
    }
    return head;
}

let a = removeElements(head, 6);
console.log(a);