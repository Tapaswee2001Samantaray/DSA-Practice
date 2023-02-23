/*
Given an unsorted array A, check whether the array is [info message="If an array can be split into two parts such that the sum of elements on both the sides is equal."]balanced[/info]. 

 

Display 1 if the array is balanced otherwise 0. 

 

Input
    5 
    1  1  1  2  1 

 

    Where, 

First line represents the size of an array. 
Second line represents array elements. 
 
Output
    1 

 

Here for the given array, the sum of first three elements 1 + 1 + 1 is 3 and last two elements 2 + 1 is 3. Hence the array is balanced. 
*/

function solution( arr) {
    let mid = Math.round(arr.length / 2);
    let pre = 0;
    let post = 0;
    for (let i = 0; i < mid; i++) {
        pre += arr[i];
    }

    for (let i = mid; i < arr.length; i++) {
        post += arr[i];
    }

    if (pre == post) {
        return 1;
    }
    return 0;
}