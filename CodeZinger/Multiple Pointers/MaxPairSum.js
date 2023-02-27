/*
Given an array of distinct integers A, find the largest sum of any pair of elements. 

 

Input 
    6 
    1 2 3 89 4 10 

 

    Where, 

First line contains the size of array N. 
Second line contains array elements.      
 

Output 
    99 

 

Here for the given array, sum of various pairs are 
    1 + 89 = 90 
    2 + 89 = 91 
    3 + 89 = 92 

    4 + 89 = 93
    10 + 89 = 99 


and so on. The largest sum out of these pairs is 99. 
*/

function solution(a, arr) {
    let left = 0;
    let right = a - 1;
    let sum = arr[left] + arr[right];
    while (left < right) {
        if ((arr[left] + arr[right]) > sum) {
            sum = arr[left] + arr[right];
        } else if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }
    return sum;
}