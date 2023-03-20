/*
Create a Linked List and perforn insrtion and deletion operations.
*/

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next == undefined ? null : next;
    }
}

let arr = [2, 3, 4, 5, 6];

//convert array to LL and return head of the LL
let convertArrToLL = function (arr) {
    let dummyNode = new LinkedListNode(10);
    let pointer = dummyNode;

    for (let i = 0; i < arr.length; i++) {
        let node = new LinkedListNode(arr[i]);
        pointer.next = node;
        pointer = pointer.next;
    }
    return dummyNode.next;
}

let head = convertArrToLL(arr);
// console.log(head);



//==========addition operation==========

//function to add a node at front of LL
let addAtFront = function (head, val) {
    let node = new LinkedListNode(val);

    node.next = head;
    head = node;

    return head;
}

head = addAtFront(head, 1);
// console.log(head);

//function to add node after a certain value in LL, assuming LL has unique value as node values
let addInBetween = function (head, afterNodeVal, val) {
    let node = new LinkedListNode(val);
    let pointer = head;

    while (pointer != null && pointer.value != afterNodeVal) {
        pointer = pointer.next;
    }

    if (pointer == null) {
        return head;
    }

    node.next = pointer.next;
    pointer.next = node;

    return head;
}

head = addInBetween(head, 2, 13);
// console.log(head);

//function to add a node at last of LL
let addAtLast = function (head, val) {
    let node = new LinkedListNode(val);
    let pointer = head;
    while (pointer.next != null) {
        pointer = pointer.next;
    }

    pointer.next = node;
    return head;
}

head = addAtLast(head, 7);
// console.log(head);



//==========deletion operation==========

//function to delete 1st node
let deleteFirstNode = function (head) {
    head = head.next;
    return head;
}

head = deleteFirstNode(head);
// console.log(head);

//function to delete node after a certain value in LL, assuming LL has unique value as node values
let deleteInBetween = function (head, afterNodeVal) {
    let pointer = head;

    while (pointer != null && pointer.value != afterNodeVal) {
        pointer = pointer.next;
    }

    pointer.next = pointer.next.next;

    return head;
}

head = deleteInBetween(head, 2);
// console.log(head);

//function to delete last node
let deleteLastNode = function (head) {
    let pointer = head;
    let pervious = head;

    while (pointer != null && pointer.next != null) {
        pervious = pointer;
        pointer = pointer.next;
    }

    pervious.next = null;

    return head;
}

head = deleteLastNode(head);
console.log(head);