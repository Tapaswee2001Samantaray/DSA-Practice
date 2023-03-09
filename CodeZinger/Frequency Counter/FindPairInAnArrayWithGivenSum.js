/*
Given an array of integers A and an integer S, determines whether there exist two elements in the array whose sum is exactly equal to S 
or not. 

 

Display 1 a pair is found in an array with matching sum S else 0. 

 

Input 
    6
    5 
    1 -2 3 8 7

 

    Where, 

First line represents integer S. 
Second line represents the size of an array. 
Third line represents array elements separated by single space. 
 

Output 
    1 

 

For the given array, A[1] + A[3] = -2 + 8 = 6 which is equal to the given number S=6.
*/

function solution(s, a, arr) {
    let obj = {};

    for (let i = 0; i < a; i++) {
        if (obj[s - arr[i]]) {
            return 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return 0;
}

let a = solution(6, 5, [1, -2, 3, 8, 7]);
console.log(a);