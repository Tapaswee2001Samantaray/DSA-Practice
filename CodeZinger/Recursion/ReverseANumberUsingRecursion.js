/*
Given a number N as input, write a program to reverse N using recursion.

 

Write a function that accepts an integer N. The function should return reverse of N using recursion. 

 

Input:

    10348

 

    where:

First line represents a value of N.
 

Output:
    84301
*/

function reverseNum(num) {
    if (num.length <= 1) {
        return num;
    }

    return reverseNum(num.slice(1)) + num[0];
}