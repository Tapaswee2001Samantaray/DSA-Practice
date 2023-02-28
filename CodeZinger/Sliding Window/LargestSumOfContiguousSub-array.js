/*
Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

 

Input 
    5 
    -20 -12 42 -10 25

 

    Where, 

The first line represents the size of an array. 
The second line represents array elements.
 

Output 
    57 

 

Here largest sub-array sum = 42 + (-10) + 25 = 57.
*/

function solution(a, arr) {
    let maxSum = -Infinity;
    let currSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum > maxSum) {
            maxSum = currSum;
        }

        if (currSum < 0) {
            currSum = 0;
        }
    }
    return maxSum;
}