/*
Given an array of integers A, count the number of unique values in the array. Do not use system function to find the unique number. 

 

Input
    10 
    1 2 3 1 4 2 5 6 7 8 

 

    where, 

First line represents the size of an array. 
Second line represents array elements. 
 

Output
    6 

 

Here in the given array, unique values are [3 4 5 6 7 8] hence the result is 6. 
*/

function solution(a, arr) {
    let freqCount = {};

    for (let i = 0; i < a; i++) {
        if (freqCount[arr[i]]) {
            freqCount[arr[i]]++;
        } else {
            freqCount[arr[i]] = 1;
        }
    }

    let count = 0;

    for (let key in freqCount) {
        if (freqCount[key] == 1) {
            count++;
        }
    }
    return count;
}

let a = solution(10, [1, 2, 3, 1, 4, 2, 5, 6, 7, 8]);
console.log(a);