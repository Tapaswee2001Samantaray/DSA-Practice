/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the 
list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:


Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]
 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
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

let head = convertArr1ToLL([1, 2, 3, 4]);
// console.log(head);

//============sol==========

var swapPairs = function (head) {
    if (head == null) {
        return null;
    }

    let current = head;
    let counter = 0;

    while (current != null && counter < 2) {
        current = current.next;
        counter++;
    }

    if (counter == 2) {
        current = swapPairs(current);

        while (counter > 0) {
            let after = head.next;
            head.next = current;
            current = head;
            head = after;
            counter--;
        }
        head = current;
    }
    return head;
}

let a = swapPairs(head);
console.log(a);

