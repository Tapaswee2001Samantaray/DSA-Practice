/*
Given an array of integers A, find the [info message="A majority element in an array of size N is an element
 that appears more than N/2 times."]Majority Element.[/info]

 

Display the Majority Element in the array. If no majority element then display 0. 

 

Input
    5 
    1 2 1 2 2

 

    Where, 

First line represents the size of an array. 
Second line represents array elements separated by single space.
 

Output
    2 

 

Here for the given array, 2 appears 3 times in the array of size 5. 
*/

function solution(a, arr) {
    let map = new Map();

    for (let i = 0; i < a; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    for (let key of map) {
        if (key[1] > Math.floor(a / 2)) {
            return key[0];
        }
    }
    return 0;
}

let a = solution(5, [1, 2, 1, 2, 2]);
console.log(a);