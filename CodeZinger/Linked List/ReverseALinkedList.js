/*
Given a [info message="A singly linked list is a set of dynamically allocated nodes, arranged in such a way that each node contains 
one value and one pointer to another node. The pointer always points to a next member of the list in one direction. If the pointer is 
NULL, then it is the last node in the list."]Singly Linked List[/info], reverse the linked list. 
 

Write a function: 
        struct node* solution(struct node * H) 

 

that accept a pointer to the first node in linked list H of type “struct node”. The function should reverse the given linked list and 
return a pointer to the first element in linked list. 

 

Input 
    5 
    10 20 30 40 50 

 

    where, 

First line represents a number of elements in the linked list. 
Second line represents elements in the linked list. 
 

Output 
    50 40 30 20 10 

 

Assume that, 

Structure “struct node” is already defined.
Size of the linked list is between 0 and 32,767.
*/

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next == undefined ? null : next;
    }
}

function printList(head) {
    let arr = [];
    let curr = head;

    while (curr != null) {
        arr.push(curr.value);
        curr = curr.next;
    }
    console.log(arr.join(" "));
}

function solution(head) {
    let prev = null;
    let curr = head;

    while (curr != null) {
        let after = curr.next;
        curr.next = prev;
        prev = curr;
        curr = after;
    }
    return prev;
}


function main() {
    var a = parseInt(readLine());

    if (a == 0) {
        console.log("no elements found");
        return;
    }

    let arr = readLine().split(" ").map(Number);

    let head = new LinkedListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        let node = new LinkedListNode(arr[i]);
        curr.next = node;
        curr = curr.next;
    }

    let newHead = solution(head);
    printList(newHead);
}