/*
Given an array of integers, find another integer such that, if all the elements of the array are subtracted individually from that 
number, then the sum of all the differences should add to 0. If any such integer exists, print its value otherwise print '-1'.

 

Input:

    3

    1 2 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    2

 

Explanation: Substracting all the elements of arrays from 2, The sum of difference is: 1 + 0 + (-1) = 0.

 

Assumptions:

Array can be of size 1 to 1000.
Array elements can be in the range -1000 to 1000.
 
*/

function solution(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    if (sum % arr.length == 0) {
        return sum / arr.length;
    }
    return -1;
}

let a = solution([1, 2, 3]);
console.log(a);