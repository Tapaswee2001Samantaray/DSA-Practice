/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list 
sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
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

let head = convertArrToLL([1, 1, 2, 3, 3]);
// console.log(head);

//=======sol==========
var deleteDuplicates = function (head) {
    let pointer = head;

    if (pointer == null && pointer.next == null) {
        return head;
    }

    while (pointer != null) {
        while (pointer.next != null && pointer.value == pointer.next.value) {
            pointer.next = pointer.next.next;
        }
        pointer = pointer.next;
    }
    return head;
}

let a = deleteDuplicates(head);
console.log(head);