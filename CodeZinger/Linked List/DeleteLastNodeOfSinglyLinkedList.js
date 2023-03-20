/*
Given a [info message="A singly linked list is a set of dynamically allocated nodes, arranged in such a way that each node contains 
one value and one pointer to another node. The pointer always points to a next member of the list in one direction. If the pointer is
 NULL, then it is the last node in the list."]Singly Linked List[/info], write a function to delete a last node of the linked list.

 

Write a function:

        struct node * solution(struct node *head)

 

that accept a pointer to the head node of linked list. The function should delete the last node of linked list and return a pointer to 
the head node of the linked list. If a list becomes empty, return NULL pointer.

 

Input

    7
    2 6 4 7 8 2 9

 

    where

First line represents a number of elements in the linked list.
Second line represents elements in the linked list.
 

Output

    2 6 4 7 8 2

 

The output display updated linked list after removal of the last node.

 

Assume that,

Structure “struct node” is already defined.
Singly Linked List already created.
*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = next == undefined ? null : next;
    }
}

function printList(head) {
    if (head == null) {
        console.log("no element present");
        return;
    }
    let curr = head;
    let arr = [];

    while (curr != null) {
        arr.push(curr.data);
        curr = curr.next;
    }
    console.log(arr.join(" "));
}

function solution(head) {
    if (head == null || head.next == null) {
        head = null;
        return head;
    }
    let curr = head;
    while (curr.next.next != null) {
        curr = curr.next;
    }
    curr.next = null;
    return head;
}


function main() {
    var a = parseInt(readLine());
    if (a == 0) {
        console.log("no element present");
        return;
    }
    var list = readLine().split(" ");
    let head = new Node(list[0]);
    let curr = head;
    for (let i = 1; i < list.length; i++) {
        let node = new Node(list[i]);
        curr.next = node;
        curr = curr.next;
    }
    var newHead = solution(head);
    printList(newHead);
}
