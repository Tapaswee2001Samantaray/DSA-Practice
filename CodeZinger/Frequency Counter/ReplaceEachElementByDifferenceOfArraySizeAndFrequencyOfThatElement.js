/*
Given an array of integers, write a program to replace every element by the difference of the total size of the array and its frequency.

 

Input:

    7

    1 2 5 2 2 5 4

 

    where:

First line represents the number of elements in the array.
Second line represents elements in the array.
 

Output:

    6 4 5 4 4 5 6

 

Explanation: Size of the array is 7.

                       The frequency of 1 is 1. So replace it by 7-1 = 6

                       The frequency of 2 is 3. So replace it by 7-3 = 4

                       The frequency of 5 is 2. So replace it by 7-2 = 5

                       The frequency of 4 is 1. So replace it by 7-1 = 6, hence the output is: 6 4 5 4 4 5 6.
*/

function solution(arr) {
    let freqCount = {};

    for (let i = 0; i < arr.length; i++) {
        freqCount[arr[i]] = (freqCount[arr[i]] || 0) + 1;
    }

    for (let i = 0; i < arr.length; i++) {
        let diff = arr.length - freqCount[arr[i]];
        arr[i] = diff;
    }
    return arr.join(" ");
}

let a = solution([1, 2, 5, 2, 2, 5, 4]);
console.log(a);