/*
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?
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

let head = convertArrToLL([1, 2, 2, 1]);
// console.log(head);

//=====sol====

let reverse2ndHalfOfLL = function (head) {
    let pointer = head;
    let prev = null;

    while (pointer != null) {
        let after = pointer.next;
        pointer.next = prev;
        prev = pointer;
        pointer = after;
    }
    return prev;
}

var isPalindrome = function (head) {
    // let arr = [];

    // while (head != null) {
    //     arr.push(head.value);
    //     head = head.next;
    // }

    // let low = 0;
    // let high = arr.length - 1;

    // while (low < high) {
    //     if (arr[low] != arr[high]) {
    //         return false;
    //     }
    //     low++;
    //     high--;
    // }
    // //TC:O(n)
    // //SC:O(n)
    // return true;

    //=========or=========
    if (head.next == null) {
        return true;
    }

    if (head.next.next == null) {
        return (head.value == head.next.value ? true : false);
    }

    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let reverseHead = reverse2ndHalfOfLL(slow);

    while (head != null && reverseHead != null) {
        if (head.value != reverseHead.value) {
            return false;
        }
        head = head.next;
        reverseHead = reverseHead.next;
    }
    //TC:O(n)
    //SC:O(1)
    return true;
}

let a = isPalindrome(head);
console.log(a);