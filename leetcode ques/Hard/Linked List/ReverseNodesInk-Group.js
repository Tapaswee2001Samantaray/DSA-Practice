/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k 
then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 

Follow-up: Can you solve the problem in O(1) extra memory space?
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

let head = convertArr1ToLL([1, 2, 3, 4, 5]);
// console.log(head);

//==========sol=======
var reverseKGroup = function (head, k) {
    let current = head;
    let counter = 0;

    while (current != null && counter < k) {
        current = current.next;
        counter++;
    }

    if (counter == k) {
        current = reverseKGroup(current, k);

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

let a = reverseKGroup(head, 2);
console.log(a);