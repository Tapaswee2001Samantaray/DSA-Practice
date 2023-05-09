/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
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

let list1 = convertArr1ToLL([1, 2, 4]);
let list2 = convertArr2ToLL([1, 3, 4]);
// console.log(list1, list2);

//=========sol=======
var mergeTwoLists = function (list1, list2) {
    // let dummyNode = new ListNode();
    // let pointer = dummyNode;

    // while (list1 != null && list2 != null) {
    //     if (list1.value < list2.value) {
    //         pointer.next = list1;
    //         list1 = list1.next;
    //     } else {
    //         pointer.next = list2;
    //         list2 = list2.next;
    //     }
    //     pointer = pointer.next;
    // }

    // while (list1 != null) {
    //     pointer.next = list1;
    //     list1 = list1.next;
    //     pointer = pointer.next;
    // }

    // while (list2 != null) {
    //     pointer.next = list2;
    //     list2 = list2.next;
    //     pointer = pointer.next;
    // }

    //TC :- O(n+m)
    //SC :- O(1)
    // return dummyNode.next;

    if (list1 == null) {
        return list2;
    }

    if (list2 == null) {
        return list1;
    }

    if (list1.value > list2.value) {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    } else {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
}

let a = mergeTwoLists(list1, list2);
console.log(a);