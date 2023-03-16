/*
Given an integer N, Compute the sum of digits in N using a loop.

 

Input:
    12345

 

    where:

First line represents value of N.
 

Output:
    15

 

Assumptions:

N can be in the range 1 to 100000.
*/

function solution(num) {
    let sum = 0;
    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }
    return sum;
}

let a = solution(12345);
console.log(a);